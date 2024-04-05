<?php

namespace App\Controllers;

class Home extends BaseController
{
    public function index()
    {
        // $this->unauthorized();
        $this->auth();
    }

    public function auth()
    {
        // if (!isset($_SERVER['HTTP_AUTHENTICATION'])) {
        //     $this->unauthorized();
        // }

        // die(password_hash('123', PASSWORD_DEFAULT));
        // die(json_encode(array(
        //     'message' => 'eogalo'
        // )));
    }
}
