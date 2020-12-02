const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const mySchema  = new Schema ({
   nameGrupo : String,

    
});

const  model = mongoose.model('Grupo', mySchema);

module.exports  = model;
