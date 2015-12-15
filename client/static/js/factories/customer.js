ballyCyrk.factory('customerFactory', function($http){
  var customers = [];
  var factory = {};
  factory.index = function(callback){
    $http.get('/customers').success(function(output){
      customers = output;
      callback(customers);
    })
  };
  factory.create = function(customer, callback){
    customer.date = new Date();
    console.log(customer);
    $http.post('/create', customer).success(function(output){
      customers = output;
      callback(customers);
    })
  };
  factory.delete = function(customer, callback){
    $http.post('/destroy', customer).success(function(output){
      customers = output;
      callback(customers);
    })
  };

  return factory;
});
