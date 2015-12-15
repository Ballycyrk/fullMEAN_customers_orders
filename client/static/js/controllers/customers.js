ballyCyrk.controller('customersController', function(customerFactory){
  _this = this;
  this.index = function(){
    customerFactory.index(function(data){
      _this.customers = data;
      console.log(_this.customers);
    })
  }
  this.createCustomer = function(){
    customerFactory.create(this.newCustomer, this.index);
    this.newCustomer = {};
  }
  this.deleteCustomer = function(customer){
    customerFactory.delete(customer, this.index);
  }
  this.index();
})
