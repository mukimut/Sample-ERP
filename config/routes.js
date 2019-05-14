/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },
  'get /signup': {view: 'pages/signup'},
  'get /login': {view: 'pages/login'},
  'post /login': {action: 'login'},
  'post /register': {action: 'signup'},
  'get /dashboard': {view: 'pages/dashboard'},
  'post /tokendata': {action: 'tokendata'},
  'get /admin': {view: 'pages/adminboard'},
  'get /getUser': {action: 'alluser'},
  'put /editUser': {action: 'signup'},
  'delete /deleteUser': {action: 'deleteuser'},
  'get /tov': {action: 'getTov'},
  'get /tovpage': {view: 'pages/tov'},
  'put /addunit': {action: 'update-tov'}


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
