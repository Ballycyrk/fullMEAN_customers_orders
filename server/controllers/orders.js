var mongoose    = require('mongoose');
var Order       = mongoose.model('Order');

module.exports = {
  index: function(req, res){
    Order.find({}).populate('customer')
    .exec(function(err, orders){
      if (err) {
        console.log(err);
      } else {
        res.json(orders);
      }
    });
  },
  create: function(req, res){
    console.log('REQ', req.body.customer._id);
    newOrder = new Order({customer: req.body.customer._id,
      product: req.body.product, quantity: req.body.qty, date: req.body.date})
    newOrder.save(function(err){
      if (err) {
        console.log(err)
      } else {
        res.redirect('/orders');
      }
    })
  }
}
