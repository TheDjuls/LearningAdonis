'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

/** Se pueden agrupar las rutas y añadirles un prefijo*/

Route.group(() => {
  Route.get('/', () => {
    return {greeting: 'Hello world TheDjuls'}
  })
  Route.post('usuarios/registro', 'UserController.store')
  Route.post('usuarios/login', 'UserController.login')
  Route.get('proyectos', 'ProyectoController.index').middleware('auth')
  Route.post('proyectos', 'ProyectoController.create').middleware('auth')
  Route.delete('proyectos/:id', 'ProyectoController.destroy').middleware('auth')
  Route.patch('proyectos/:id', 'ProyectoController.update').middleware('auth')
  Route.post('tareas/:id', 'TareaController.create').middleware('auth')

}).prefix('api/v1/')

