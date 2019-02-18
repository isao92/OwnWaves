const mongoose = require("mongoose");
const Schema = mongoose.Schema;


    const buildsSchema = new Schema({
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
    
    
    const Builds = mongoose.model("Builds", buildsSchema);
  
  module.exports = Builds;

  // END STARTER CODE
  