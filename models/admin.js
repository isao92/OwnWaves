const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    name_first: { 
        type: String,
    },
    name_last: {
        type: String,
    },
    username: {
        type: String,
        unique: true,
    },
    password: {
        type: String
    },
});

const Admin = mongoose.model("Admin", adminSchema);
  
module.exports = Admin;