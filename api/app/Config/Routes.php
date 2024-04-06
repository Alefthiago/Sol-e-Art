<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
//  ROTA PARA INDEX FRONT.  //
// $routes->get('/', 'Home::index');
// /ROTA PARA INDEX FRONT.  //

//  ROTA PARA CRUD DO USUARIO.  //
$routes->match(['post', 'options'], '/userCreate', 'UserController::create');
$routes->post('/getByEmail', 'UserController::getByEmail');
// /ROTA PARA CRUD DO USUARIO.  //

