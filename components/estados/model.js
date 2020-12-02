const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const mySchema  = new Schema ({
    Id_estado: Number,
    NomEstado: String,
   
    
});

const  model = mongoose.model('Estados', mySchema);

module.exports  = model;
