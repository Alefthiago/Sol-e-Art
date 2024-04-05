<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use CodeIgniter\HTTP\ResponseInterface;

class UserController extends BaseController
{
    public function create()
    {
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
            'name'      => (string)$this->request->getPost('name'),
            'email'     => (string)$this->request->getPost('email'),
            'password'  => password_hash((string)$this->request->getPost('password'), PASSWORD_DEFAULT),
            'cpf'       => (string)$this->request->getPost('cpf'),
            'gender'    => (string)$this->request->getPost('gender'),
            //  DADOS DE ENDEREÇO.   //

            // /DADOS DE ENDEREÇO.   //
        );
        


    }
}
