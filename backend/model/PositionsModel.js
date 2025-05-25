// const{ model }= require('mongoose');

// const {PositionsModel} = require('../schemas/PositionsModel');

// const PositionsModel = new model('position', PositionsModel);
// module.exports = {PositionsModel};


const { model } = require("mongoose");

const { PositionsSchema } = require("../schemas/PositionsSchema");

const PositionsModel = new model("position", PositionsSchema);

module.exports = { PositionsModel };