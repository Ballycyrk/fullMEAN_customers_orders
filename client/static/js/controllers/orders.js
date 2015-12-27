ballyCyrk.controller('ordersController',
                      function(orderFactory, productFactory, customerFactory){
  _this = this;
  this.getProducts = function(){
    productFactory.index(function(data){
      _this.products = data;
    })
  };
  this.getCustomers = function(){
    customerFactory.index(function(data){ _this.customers = data });
  };
  this.index = function(){
    orderFactory.index(function(data){ _this.orders = data; })
  };
  this.createOrder = function(){
    orderFactory.create(_this.newOrder, this.index);
  };

  this.getProducts();
  this.getCustomers();
  this.index();
})
