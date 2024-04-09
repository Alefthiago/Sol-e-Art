<?php

namespace App\Filters;

use CodeIgniter\Filters\FilterInterface;
use CodeIgniter\HTTP\RequestInterface;
use CodeIgniter\HTTP\ResponseInterface;
use Firebase\JWT\JWT;
use Firebase\JWT\KEY;

class Auth implements FilterInterface
{
    /**
     * Do whatever processing this filter needs to do.
     * By default it should not return anything during
     * normal execution. However, when an abnormal state
     * is found, it should return an instance of
     * CodeIgniter\HTTP\Response. If it does, script
     * execution will end and that Response will be
     * sent back to the client, allowing for error pages,
     * redirects, etc.
     *
     * @param RequestInterface $request
     * @param array|null       $arguments
     *
     * @return RequestInterface|ResponseInterface|string|void
     */

    //  KEY PARA O JWT.  //
    protected $key = "eogalo";
    // /KEY PARA O JWT.  //

    //  MÉTODO PARA VALIDAR O TOKEN.  //
    public function before(RequestInterface $request, $arguments = null)
    {
        $jwt = $request->getServer('HTTP_AUTHORIZATION');
        if (!$jwt) {
            http_response_code(401);
            die(json_encode(array(
                'msg' => 'Token não informado.'
            )));
        }
        
        try {
            JWT::decode($jwt, new KEY($this->key, 'HS256'));
        } catch (\Exception $e) {
            http_response_code(401);
            die(json_encode(array(
                'msg' => 'Token inválido.'
            )));
        }
    }
    //  /MÉTODO PARA VALIDAR O TOKEN.  //

    /**
     * Allows After filters to inspect and modify the response
     * object as needed. This method does not allow any way
     * to stop execution of other after filters, short of
     * throwing an Exception or Error.
     *
     * @param RequestInterface  $request
     * @param ResponseInterface $response
     * @param array|null        $arguments
     *
     * @return ResponseInterface|void
     */
    public function after(RequestInterface $request, ResponseInterface $response, $arguments = null)
    {
        //
    }
}
