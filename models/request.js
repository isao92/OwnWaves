const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const requestSchema = new Schema({
    requestNumDays: { 
        type: Number, 
    },
    userEmail: {
        type: String,
    },
    UserNameOfRequest: {
        type: String,
    },
    PhoneOfRequest: {
        type: Number,
    },
    DateOfRequest: {
        type: Date,
    },
    uniqueID: {
        type: String,
    }
});

const Request = mongoose.model("Request", requestSchema);
  
module.exports = Request;