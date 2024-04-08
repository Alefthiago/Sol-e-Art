<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use App\Models\UserModel;
use CodeIgniter\HTTP\ResponseInterface;

class UserController extends BaseController
{
    public $user_model;

    public function __construct()
    {
        $this->user_model = new UserModel();
    }

    public function create()
    {
        die(json_encode('CADE O PAPA FRANGO?'));
        //  REGRAS DE VALIDAÇÃO.  //
        $rules = [
            'name'      => 'required',
            'email'     => 'required|valid_email',
            'password'  => 'required',
            'cpf'       => 'required',
        ];
        $validated = $this->validate($rules);

        if (!$validated) {
            $json = array(
                'message' => 'error',
                'errors' => $this->validator->getErrors()
            );
            die(json_encode($json)); 
        }
        //  /REGRAS DE VALIDAÇÃO.  //

        $data = array(
            'USER_EMAIL'    => (string)$this->request->getPost('email'),
            'USER_PASS'     => (string)$this->request->getPost('password'),
            // 'password'  => password_hash((string)$this->request->getPost('password'), PASSWORD_DEFAULT), // --> hash = criptografia padrão
            // 'cpf'       => (string)$this->request->getPost('cpf'),
            // 'gender'    => (string)$this->request->getPost('gender'),
            //  DADOS DE ENDEREÇO.   //

            // /DADOS DE ENDEREÇO.   //
        );
        // die(json_encode($data));
        $this->user_model->insert($data);
    }

    public function getByEmail()
    {
        $email = $this->request->getPost('USER_EMAIL');
        $user = $this->user_model->where('USER_EMAIL', $email)->first();
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
