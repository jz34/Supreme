var mongoose = require("mongoose");
var ItemSchema = require("../item/item.schema.server");
var UserSchema = mongoose.Schema({
  username: String,
  password: String,
  lastName: String,
  firstName: String,
  email: String,
  phone: String,
  cardNumber: String,
  cardCvv: String,
  expirationDate: String,
  address: String,
  unit: String,
  zip: String,
  city: String,
  state: String,
  cart: [ItemSchema],
  facebook: {
    id: String,
    token: String
  },
  userType: {type: String, enum: ['Seller', 'Buyer', 'Admin']},
  dateCreated: {type: Date, default: Date.now}
}, {collection: "assignment.user"});
module.exports = UserSchema;
