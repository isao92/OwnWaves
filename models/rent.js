const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RentSchema = new Schema({
    rentTitle: { 
        type: String, 
    },
    RentItemName: {
        type: String,
    },
    NameOfRenter: {
        type: String,
    },
    EmailRenter: {
        type: String,
    },
    DateAvailable: {
        type: Date,
    },
    RentItemPrice: {
        type: Number,
    },
    uniqueID: {
        type: String,
    }
});

const Rent = mongoose.model("Rent", RentSchema);
  
module.exports = Rent;