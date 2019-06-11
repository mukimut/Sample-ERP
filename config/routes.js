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

  '/': { view: 'pages/login', locals:{layout: 'layouts/login'}  },
  'get /signup': {view: 'pages/signup', locals:{layout: 'layouts/login'}},
  'get /login': {view: 'pages/login', locals:{layout: 'layouts/login'}},
  'get /dashboard': {view: 'pages/dashboard', locals:{layout: 'layouts/dashboard'} },
  'get /tovpage': {view: 'pages/tov', locals:{layout: 'layouts/dashboard'}},
  'get /company': {view: 'pages/company', locals:{layout: 'layouts/dashboard'}},
  'get /supplier': {view: 'pages/supplier', locals:{layout: 'layouts/dashboard'}},
  'get /customer': {view: 'pages/customer', locals:{layout: 'layouts/dashboard'}},
  'post /login': {action: 'login'  },
  'post /register': {action: 'signup'},
  'post /tokendata': {action: 'tokendata'},
  'get /admin': {view: 'pages/adminboard'},
  'get /getUser': {action: 'alluser'},
  'put /editUser': {action: 'signup'},
  'delete /deleteUser': {action: 'deleteuser'},
  'get /tov': {action: 'get-tov'},
  'put /addunit': {action: 'update-tov'},
  'post /company': {action: 'company/update-company'},
  'get /api/companies': {action: 'company/get-companies'},
  'get /api/tovValue': {action: 'map/get-values'},
  'get /user': {view: 'pages/user', locals:{layout: 'layouts/dashboard'}},
  'get /mapping': {view: 'pages/mapping', locals:{layout: 'layouts/dashboard'}},


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
