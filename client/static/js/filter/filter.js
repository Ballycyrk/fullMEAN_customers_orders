ballyCyrk.filter('orderFilter', function(){

  return function(input, filt){
    var output = [];
    var re = filt;
    for(var i =0; i< input.length; i++){

      if (input[i].customer.name.match(re) || input[i].product.name.match(re) || input[i].quantity == filt){
        output.push(input[i]);
      }
    }
  return output;
  }
})
