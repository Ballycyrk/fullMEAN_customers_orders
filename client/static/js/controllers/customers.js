ballyCyrk.controller('customersController', function(customerFactory){
  _this = this;
  this.index = function(){
    customerFactory.index(function(data){
      this.customers = data;
    })
  }

  this.index();
})
