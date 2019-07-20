const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const factorySchema = new Schema({
  factName: {
    type: String,
    required: true
  },
  childGen: {
    type: String,
    required: true
  },
  lRange: {
    type: String,
    required: true
  },
  hRange: {
    type: String,
    required: true
  },
  children: {
    type: [Number],
    required: true
  },
});

module.exports = mongoose.model("Factory", factorySchema)
