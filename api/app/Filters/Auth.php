<?php
namespace App\Filters;

use CodeIgniter\Filters\FilterInterface;
use CodeIgniter\HTTP\RequestInterface;
use CodeIgniter\HTTP\ResponseInterface;
use Firebase\JWT\JWT;
use Firebase\JWT\KEY;

class Auth implements FilterInterface
{
    protected $key;

    public function __construct()
    {
        // Idealmente, carregue a chave de um arquivo de configuração ou variável de ambiente
        $this->key = getenv('JWT_SECRET') ?: 'eogalo';
    }

    public function before(RequestInterface $request, $arguments = null)
    {
        $authHeader = $request->getServer('HTTP_AUTHORIZATION');

        if (!$authHeader) {
            return $this->unauthorized('Token não informado.');
        }

        // Extrai o token JWT do cabeçalho "Authorization: Bearer <token>"
        $token = null;
        if (preg_match('/Bearer\s(\S+)/', $authHeader, $matches)) {
            $token = $matches[1];
        }

        if (!$token) {
            return $this->unauthorized('Token não informado ou malformado.');
        }

        try {
            JWT::decode($token, new KEY($this->key, 'HS256'));
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