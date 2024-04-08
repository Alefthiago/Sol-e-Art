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
            // 'password'  => password_hash((string)$this->request->getPost('password'), PASSWORD_DEFAULT),
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
    // julin linde
}
