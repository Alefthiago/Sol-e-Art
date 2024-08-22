<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use App\Models\UserModel;
use CodeIgniter\HTTP\ResponseInterface;
use CodeIgniter\HTTP\IncomingRequest;

use CodeIgniter\Database\Exceptions\DatabaseException;

class UserController extends BaseController
{
    public $user_model;
    // public $requestController;

    public function __construct()
    {
        $this->user_model = new UserModel();
        // $this->requestController = request();
    }

    public function login()
    {
        $email = $this->request->getPost('email');
        $password = $this->request->getPost('password');

        $user = $this->user_model->where(
            'USR_EMAIL',
            $email,
        )->first();
        
        // die(json_encode(password_verify($password, $user['USR_PASSWORD'])));

        if (!$user) {
            $json = array(
                'message' => 'error',
                'errors' => array('Usuário não encontrado.')
            );
            die(json_encode($json));
        }

        if (!password_verify($password, $user['USR_PASSWORD'])) {
            $json = array(
                'message' => 'error',
                'errors' => array('Senha inválida.')
            );
            die(json_encode($json));
        }

        $jwt = parent::createJWT($email);

        $json = array(
            'message' => 'success',
            'data' => array(
                'success' => 'Login efetuado com sucesso.'
            ),
            'token' => $jwt
        );

        die(json_encode($json));
    }

    public function create()
    {
        //  REGRAS DE VALIDAÇÃO.  //
        $rules = [
            'nome'      => 'required',
            'email'     => 'required|valid_email',
            'password'  => 'required',
            // 'cpf'       => 'required',
            // 'cep'       => 'required',
            // 'numero'    => 'required',
            // 'rua'       => 'required',
            // 'bairro'    => 'required',
            // 'uf'        => 'required',
        ];
        //  /REGRAS DE VALIDAÇÃO.  //

        //  MENSAGENS DE ERRO.  //
        $msg = [
            'nome'      => ['required' => 'O campo nome é obrigatório.'],
            'email'     => ['required' => 'O campo email é obrigatório.', 'valid_email' => 'O email informado é inválido.'],
            'password'  => ['required' => 'O campo senha é obrigatório.'],
            // 'cpf'       => ['required' => 'O campo cpf é obrigatório.'],
        ];
        //  /MENSAGENS DE ERRO.  //

        $validated = $this->validate($rules, $msg);

        if (!$validated) {
            // http_response_code(422);

            $json = array(
                'message' => 'error',
                'errors' => $this->validator->getErrors()
            );
            header('Content-Type: application/json');
            die(json_encode($json));
        }

        //  ROTINA PARA USAR API DE CONSULTA DE CEP(viacep.com.br). //
        //  DADOS DE ENDEREÇO.   //
        // $ch     = curl_init();
        // $url    = 'viacep.com.br/ws/' . (string)$this->request->getPost('cep') . '/json/';

        // curl_setopt($ch, CURLOPT_URL, $url);
        // curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

        // $output = curl_exec($ch);
        // curl_close($ch);
        // die($output);
        // /DADOS DE ENDEREÇO.   //

        // /ROTINA PARA USAR API DE CONSULTA DE CEP(viacep.com.br). //
        // die(json_encode($this->request->getPost('email')));
        $data = array(
            'USR_NAME'      => (string)$this->request->getPost('nome'),
            'USR_EMAIL'     => (string)$this->request->getPost('email'),
            'USR_PASSWORD'  => password_hash((string)$this->request->getPost('password'), PASSWORD_DEFAULT), // --> hash = criptografia padrão
            'USR_CPF'       => (string)$this->request->getPost('cpf'),
            'USR_GENDER'    => (string)$this->request->getPost('sexo') ? (string)$this->request->getPost('sexo') : null,
            //  DADOS DE ENDEREÇO.   //
            'USR_ADDRESS_CEP'           => (string)$this->request->getPost('cep') ? (string)$this->request->getPost('cep') : null,
            'USR_ADDRESS_NUMBER'        => (string)$this->request->getPost('numero') ? (string)$this->request->getPost('numero') : null,
            'USR_ADDRESS_STREET'        => (string)$this->request->getPost('rua') ? (string)$this->request->getPost('rua') : null,
            'USR_ADDRESS_NEIGHBORHOOD'  => (string)$this->request->getPost('bairro') ? (string)$this->request->getPost('bairro') : null,
            'USR_ADDRESS_COMPLEMENT'    => (string)$this->request->getPost('complemento') ? (string)$this->request->getPost('complemento') : null,
            'USR_ADDRESS_CITY'          => (string)$this->request->getPost('cidade') ? (string)$this->request->getPost('cidade') : null,
            'USR_ADDRESS_STATE'         => (string)$this->request->getPost('uf') ? (string)$this->request->getPost('uf') : null,
            // /DADOS DE ENDEREÇO.   //

            'created_at'    => date('Y-m-d H:i:s')
        );
        // die(json_encode($data));
        try {
            $created = $this->user_model->insert($data);
            $jwt = parent::createJWT($this->request->getPost('email'));
            $created ? $json = array(
                'message' => 'success',
                // 'token' => $jwt
            ) :
                $json = array(
                    'message' => 'error',
                    'errors' => 'Erro ao criar conta.'
                );

            die(json_encode($json));
        } catch (DatabaseException $e) {
            http_response_code(422);
            $message = $e->getMessage();

            if (strpos($message, 'USR_EMAIL')) {
                $json = array(
                    'message' => 'error',
                    'errors' => array('Email já cadastrado.')
                );
            } else if (strpos($message, 'USR_CPF')) {
                $json = array(
                    'message' => 'error',
                    'errors' => array('CPF já cadastrado.')
                );
            } else {
                $json = array(
                    'message' => 'error',
                    'errors' => $e->getMessage()
                );
            }

            die(json_encode($json));
        } catch (\Exception $e) {
            $json = array('message' => 'error', 'errors' => $e->getMessage());
            die(json_encode($json));
        }
    }

    public function getByEmail()
    {
        $email  = $this->request->getPost('USR_EMAIL');
        $user   = $this->user_model->where('USR_EMAIL', $email)->first();
        if ($user) {
            $json = array(
                'message' => 'success',
                'data' => $user
            );
        } else {
            $json = array(
                'message' => 'error',
                'data' => 'Usuário não encontrado'
            );
        }
        die(json_encode($json));
    }


    public function edit()
    {
        // regra de edição
        $rules = [
            'name'      => 'required',
            'email'     => 'required|valid_email',
            'password'  => 'required',
            'cpf'       => 'required',
        ];

        $validated = $this->validate($rules);

        if (!$validated) {
            $json = [
                'message' => 'error',
                'errors' => $this->validator->getErrors()
            ];
            die(json_encode($json)); // encode --> envia json, decode --> recebe json
        }
        // regra de edição

        $user_id = (int) $this->request->getPost('user_id'); // obtém o id do usuário que tá querendo editar inf da conta

        // agora tem que verificar se esse caba existe no bd
        $user_id = $this->user_model->find($user_id);
        if (!$user_id) {
            $json = [
                'message' => 'error',
                'data' => 'Usuário não encontrado'
            ];
            die(json_encode($json));
        }

        $data = [ // --> obter os dados enviados pelo form
            'USER_NAME' => (string) $this->request->getPost('name'),
            'USER_EMAIL' => (string) $this->request->getPost('email'),
            'USER_PASSWORD' => (string) $this->request->getPost('password'),
            'USER_CPF' => (string) $this->request->getPost('cpf'),
        ];

        $this->user_model->update($user_id, $data); // --> atualizar as inf editada no bd
        $json = [
            'message' => 'sucess',
            'data' => 'Usuário alterado com sucesso'
        ];
        die(json_encode($json));
    }
}
