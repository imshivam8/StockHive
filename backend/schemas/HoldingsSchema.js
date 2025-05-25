// const {Schema} = require('mongoose');
// const HoldingsSchema = new Schema({
//     name: string,
//     qty: Number,
//     avg: Number,
//     price: Number,
//     net: String,
//     day: String,
// });
// module.exports = { HoldingsSchema };


const { Schema } = require("mongoose");

const HoldingsSchema = new Schema({
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String,
});

module.exports = { HoldingsSchema };