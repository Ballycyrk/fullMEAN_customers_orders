ballyCyrk.factory('productFactory', function(){
  var products = [
    {name: "Dingleberries"},
    {name: "Sounders Jersey"},
    {name: "XBox One"},
    {name: "Nikon D7100"},
    {name: "Intiman Theatre Subscription"}
  ];
  var factory = {};
  factory.index = function(callback){
    callback(products);
  };

  return factory;
})
