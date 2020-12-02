const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const mySchema  = new Schema ({
Descripcion : String,
Valor : Number,
   
    
});

const  model = mongoose.model('habilidades', mySchema);

module.exports  = model;
