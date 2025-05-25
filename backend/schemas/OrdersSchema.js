// const {Schema}= require('mongoose');
// const OrdersSchema = new Schema({
//     name: String,
//     qty: Number,
//     price: Number,
//     type: String, // buy or sell
//    mode: String,
// });
// module.exports = {OrdersSchema};

const { Schema } = require("mongoose");

const OrdersSchema = new Schema({
  name: String,
  qty: Number,
  price: Number,
  mode: String,
});

module.exports = { OrdersSchema };