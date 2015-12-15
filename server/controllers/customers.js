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
    console.log(req.body)
    customer = new Customer({ name: req.body.name, date: req.body.date });
    customer.save(function(err){
      if (err) {
        console.log(err);
      } else {
        res.redirect('/customers');
      }
    })
  }
}
