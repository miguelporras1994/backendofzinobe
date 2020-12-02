const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const mySchema  = new Schema ({
   
    Nameroute : String,
    Id_level: [{
     type: Schema.ObjectId,
     ref: 'niveles',
      }],
     Id_status: [{
         type: Schema.ObjectId,
         ref: 'Estados',
     }],
     Status :  String,

    
});

const  model = mongoose.model('RutaApredizaje', mySchema);

module.exports  = model;
