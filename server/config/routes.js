var customers       = require('../controllers/customers.js');
var orders           = require('../controllers/orders.js');
var products         = require('../controllers/products.js');

module.exports    = function(app){
  app.get('/customers',   function(req, res){customers.index(req, res) })
  app.post('/create',     function(req, res){ customers.create(req, res) })
  // app.post('/destroy', function(req, res){ person.destroy(req, res) })
  // app.get('/:name',    function(req, res){ person.show(req, res) })
}
