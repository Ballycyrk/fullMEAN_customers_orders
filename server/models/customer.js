var mongoose      = require('mongoose');
var Schema        = mongoose.Schema;
var CustomerSchema  = new Schema (
  { name: {type: String, minlength: 2, required: true},
    date: Date,
    orders: Array
  });

mongoose.model('Customer', CustomerSchema);
