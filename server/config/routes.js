var customers       = require('../controllers/customers.js');
var orders           = require('../controllers/orders.js');

module.exports    = function(app){
  app.get('/customers',     function(req, res){customers.index(req, res) })
  app.post('/create',       function(req, res){ customers.create(req, res) })
  app.post('/destroy',      function(req, res){ customers.delete(req, res) })
  app.get('/orders',       function(req, res){ orders.index(req, res) })
  app.post('/create/order', function(req, res){ orders.create(req, res) })
}
