const mongoose = require("mongoose");
const Schema = mongoose.Schema;


    const projectsSchema = new Schema({
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
        projectURL:{
            type: String,
        },
        spacingForProject: {
            type: String,
        },
        technologies_used:{
            type: String,
        }
    });
    
    
    const Projects = mongoose.model("Projects", projectsSchema);
  
  module.exports = Projects;

  // END STARTER CODE
  