var mongoose      = require('mongoose');
var Schema        = mongoose.Schema;
var OrderSchema   = new Schema (
  { customer: {type: Schema.Types.ObjectId, ref: 'Customer'},
    product: Object,
    quantity: Number,
    date: Date
  });

mongoose.model('Order', OrderSchema);
