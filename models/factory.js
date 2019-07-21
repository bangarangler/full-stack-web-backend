const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const factorySchema = new Schema({
  factName: {
    type: String,
    required: true
  },
  childGen: {
    type: Number,
    required: true
  },
  lRange: {
    type: Number,
    required: true
  },
  hRange: {
    type: Number,
    required: true
  },
  children: {
    type: [Number],
    required: true
  },
});


module.exports = mongoose.model("Factory", factorySchema)
