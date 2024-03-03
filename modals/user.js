const mongoose = require("mongoose");

const nameSchema = new mongoose.Schema({

    name: {
        type: String,
      
      
    },
   
   
});

const Name = mongoose.model('DeploymentUser', nameSchema);
module.exports = Name;

