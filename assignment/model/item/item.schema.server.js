var mongoose = require("mongoose");
var ItemSchema = mongoose.Schema({
  name: String,
  color: String,
  category: {type: String, enum: ['Jacket', 'Shirt', 'Top', 'Sweatshirt', 'Pants', 'Hat', 'Bag', 'Skate', 'Accessory']},
  size: {type: String, enum: ['noSize', 'Small', 'Medium', 'Large', 'XLarge']},
  url: String,
  price: String,
  isRecommended: Boolean,
  _buyer: {
    type: mongoose.Schema.ObjectId,
    ref: "User"
  },
  _seller: {
    type: mongoose.Schema.ObjectId,
    ref: "User"
  },
}, {collection: "assignment.item"});
module.exports = ItemSchema;
