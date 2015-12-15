var ballyCyrk     = angular.module('ballyCyrk', ['ngRoute']);
// -----ROUTES-------
ballyCyrk.config(function($routeProvider){
  $routeProvider
  .when('/users', {
    templateUrl: './../views/partials/_user.html',
    controller: 'customersController'
  })
  .when('/orders', {
    templateUrl: 'views/partials/_order.html',
    controller: 'ordersController'
  })
  .otherwise({ redirectTo: '/users'});
});
