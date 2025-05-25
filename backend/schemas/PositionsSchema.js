// const {Schema} = require('mongoose');
// const POsitionsSchema = new Schema({
//     name: String,
//     qty: Number,
//     price: Number,
//     type: String, // buy or sell
    
//     net:String ,// intraday or delivery
//     avg: Number, // average price
//     day: String, // date of transaction
//     isLoss: Boolean, // whether the price is down or not
    
// });
// module.exports = {PositionsSchema};


const { Schema } = require("mongoose");

const PositionsSchema = new Schema({
  product: String,
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String,
  isLoss: Boolean,
});

module.exports = { PositionsSchema };