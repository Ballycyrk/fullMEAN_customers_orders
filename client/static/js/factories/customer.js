ballyCyrk.factory('customerFactory', function($http){
  var customers = [];
  var factory = {};
  factory.index = function(callback){
    $http.get('/customers').success(function(output){
      customers = output;
      callback(customers);
    })
  };

  return factory;
});
