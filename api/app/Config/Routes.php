<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
//  ROTA PARA INDEX FRONT.  //
$routes->get('/', 'Home::index');
// /ROTA PARA INDEX FRONT.  //

//  ROTA PARA CRUD DO USUARIO.  //
$routes->post('/userCreate', 'UserController::create');
// /ROTA PARA CRUD DO USUARIO.  //

