var mongoose    = require('mongoose');
var Customer    = mongoose.model('Customer')

module.exports  = {
  index: function(req, res){
    console.log('SERVER-CONTROL');
    Customer.find({}, function(err, customers){
      if (err) {
        console.log(err);
      } else {
        res.json(customers);
      }
    });
  },
  create: function(req, res){
    console.log('CREATE USER:SERVER-CONTROL');
  }
}
