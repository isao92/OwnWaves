const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RentSchema = new Schema({
    rentTitle: { 
        type: String, 
    },
    rentItemName: {
        type: String,
    },
    addressOfRental: {
        type: String,
    },
    emailRenter: {
        type: String,
    },
    dateAvailable: {
        type: Date,
    },
    rentItemPrice: {
        type: Number,
    },
    uniqueID: {
        type: String,
    }
});

const Rent = mongoose.model("Rent", RentSchema);
  
module.exports = Rent;