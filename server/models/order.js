var mongoose      = require('mongoose');
var Schema        = mongoose.Schema;
var OrderSchema   = new Schema (
  { customer: Schema.Types.ObjectId,
    product: Schema.Types.ObjectId
  });

mongoose.model('Order', OrderSchema);
