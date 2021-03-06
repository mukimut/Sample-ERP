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
  'get /login': {view: 'pages/login', locals:{layout: 'layouts/login'}},
  'get /dashboard': {view: 'pages/dashboard', locals:{layout: 'layouts/dashboard'} },
  'get /tovpage': {view: 'pages/tov', locals:{layout: 'layouts/dashboard'}},
  'get /company': {view: 'pages/company', locals:{layout: 'layouts/dashboard'}},
  'post /login': {action: 'login'  },
  'post /register': {action: 'signup'},
  'post /tokendata': {action: 'tokendata'},
  'get /admin': {view: 'pages/adminboard'},
  'get /getUser': {action: 'alluser'},
  'put /editUser': {action: 'signup'},
  'delete /deleteUser': {action: 'deleteuser'},
  'delete /employee': {action: 'employee/delete-employee'},
  'delete /api/deleteTov': {action: 'tov/delete-tov'},
  'get /tov': {action: 'tov/get-tov'},
  'put /addunit': {action: 'tov/update-tov'},
  'post /company': {action: 'company/update-company'},
  'get /api/companies': {action: 'company/get-companies'},
  'get /api/tovValue': {action: 'map/get-values'},
  'get /api/getGroups': {action: 'products/get-groups'},
  'get /api/getTypes': {action: 'products/get-types'},
  'post /api/setMap': {action: 'map/set-values'},
  'get /user': {view: 'pages/user', locals:{layout: 'layouts/dashboard'}},
  'get /mapping': {view: 'pages/mapping', locals:{layout: 'layouts/dashboard'}},
  'delete /company': {action: 'company/delete-company'},
  'delete /product': {action: 'products/delete-product'},
  'get /products': {view: 'pages/products', locals:{layout: 'layouts/dashboard'}},
  'get /api/products': {action: 'products/get-products'},
  'get /api/employees': {action: 'employee/get-employees'},
  'get /api/receives': {action: 'receive/get-receive'},
  'get /invoice': {view: 'pages/invoice', locals:{layout: 'layouts/login'}},
  'post /api/products': {action: 'products/update-product'},
  'post /api/receive': {action: 'receive/update-receive'},
  'put /api/receive': {action: 'receive/update-receive'},
  'put /api/products': {action: 'products/update-product'},
  'get /employee': {view: 'pages/employee', locals:{layout: 'layouts/dashboard'}},
  'post /employee': {action: 'employee/save-employee'},
  'post /api/expense': {action: 'expenses/save-expense'},
  'put /api/expense': {action: 'expenses/save-expense'},
  'get /api/expense': {action: 'expenses/get-expense'},
  'get /material_receive': {view: 'pages/material_receive', locals:{layout: 'layouts/dashboard'}},
  'get /daily_expenses': {view: 'pages/daily_expenses', locals:{layout: 'layouts/dashboard'}},
  'get /issue': {view: 'pages/issue_note', locals:{layout: 'layouts/dashboard'}},
  'get /dailyexpenses_dashboard': {view: 'pages/dailyexpenses_dashboard', locals:{layout: 'layouts/dashboard'}},
  'get /party_payment': {view: 'pages/party_payment', locals:{layout: 'layouts/dashboard'}},
  'get /payment_receive': {view: 'pages/payment_receive', locals:{layout: 'layouts/dashboard'}},
  'get /page_permission': {view: 'pages/page_permission', locals:{layout: 'layouts/dashboard'}},
  'post /api/group': {action: 'user/addgroup'},
  'get /api/group': {action: 'user/get-groups'},
  'post /api/payment': {action: 'expenses/save-payment'},
  'get /api/payment': {action: 'expenses/get-payment'},
  'get /api/payment-report': {action: 'expenses/payment-report'},
  'get /payment_report': {view: 'pages/payment-report', locals:{layout: 'layouts/dashboard'}},
  'get /departmentalApproval': {view: 'pages/departmentalApproval', locals:{layout: 'layouts/dashboard'}},
  'get /managementApproval': {view: 'pages/managementApproval', locals:{layout: 'layouts/dashboard'}},
  'get /dailyPayment': {view: 'pages/dailyPayment', locals:{layout: 'layouts/dashboard'}},
  'get /paymentReport': {view: 'pages/paymentReport', locals:{layout: 'layouts/dashboard'}},


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
