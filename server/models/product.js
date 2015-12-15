var mongoose        = require('mongoose');
var Schema          = mongoose.Schema;
var ProductSchema   = new Schema (
  { name: {type: String, required: true, minlength: 2},
    description: String
  });

mongoose.model('Product', ProductSchema);
