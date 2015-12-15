ballyCyrk.factory('orderFactory', function($http){
  var orders = [];
  var factory = {};
  factory.index = function(callback){
    callback(orders);
  }
  return factory;
})
