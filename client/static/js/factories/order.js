ballyCyrk.factory('orderFactory', function($http){
  var orders = [];
  var factory = {};
  factory.index = function(callback){
    $http.get('/orders').success(function(output){
      orders = output;
      callback(orders);
    })
  };
  factory.create = function(order, callback){
    console.log('Order',order);
    console.log('callback',callback);
    order.date = new Date;
    $http.post('/create/order', order).success(function(output){
      orders = output;
      callback(orders);
    })
  };
  return factory;
})
