const {Schema} = require("mongoose");

const HoldingsSchema = new Schema({
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    Day: String,
});
module.exports = {HoldingsSchema};