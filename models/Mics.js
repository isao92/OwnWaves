const mongoose = require("mongoose");
const Schema = mongoose.Schema;


    const micsSchema = new Schema({
        first_name: { 
            type: String, 
            unique: true
        },
        last_name: { 
            type: String, 
            unique: true
        },
        description: {
            type: String,
            unique: true
        },
        imageUrl: {
            type: String,
            default: "https://via.placeholder.com/150"
        },
        description: {
            type: String,
            required: true
        },
        buildURL:{
            type: String,
        },
        spacingForBuild: {
            type: String,
        },
        technologies_used:{
            type: String,
        }
    });
    
    
    const Mics = mongoose.model("Mics", micsSchema);
  
  module.exports = Mics;

  // END STARTER CODE
  