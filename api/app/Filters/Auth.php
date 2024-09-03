<?php

namespace App\Filters;

use CodeIgniter\Filters\FilterInterface;
use CodeIgniter\HTTP\RequestInterface;
use CodeIgniter\HTTP\ResponseInterface;
use Firebase\JWT\JWT;
use Firebase\JWT\KEY;

use function PHPUnit\Framework\isEmpty;

class Auth implements FilterInterface
{
    protected $key;

    public function __construct()
    {
        $this->key = getenv('JWT_SECRET') ?: 'eogalo';
    }

    public function before(RequestInterface $request, $arguments = null)
    {   
        if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
            http_response_code(200);
            exit();
        }
    
        $authHeader = $request->getServer('HTTP_AUTHORIZATION');
    
        if (empty($authHeader) || count(explode('.', $authHeader)) < 3) {
            return $this->unauthorized('Token não informado ou malformado.');
        }

        // $token = explode('.', $authHeader)[1];

        try {
            JWT::decode($authHeader, new KEY($this->key, 'HS256'));
        } catch (\Exception $e) {
            return $this->unauthorized('Token inválido.');
        }
    
    }
    

    private function unauthorized($message)
    {
        http_response_code(401);
        die(json_encode(['msg' => $message]));
    }

    public function after(RequestInterface $request, ResponseInterface $response, $arguments = null)
    {
        // Lógica para executar após a execução da rota
    }
}
