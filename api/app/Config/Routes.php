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
$routes->match(['post', 'options'], '/userEdit', 'UserController::edit', ['filter' => 'auth']);
$routes->match(['post', 'options'], '/userDelete', 'UserController::delete', ['filter' => 'auth']);
// /ROTA PARA CRUD DO USUARIO.  //
