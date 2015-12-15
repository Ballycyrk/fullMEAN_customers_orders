var ballyCyrk     = angular.module('ballyCyrk', ['ngRoute']);
// -----ROUTES-------
ballyCyrk.config(function($routeProvider){
  $routeProvider
  .when('/users', {
    templateUrl: './../views/partials/_user.html',
    controller: 'customersController as UC'
  })
  .when('/orders', {
    templateUrl: 'views/partials/_order.html',
    controller: 'ordersController as OC'
  })
  .otherwise({ redirectTo: '/users'});
});
