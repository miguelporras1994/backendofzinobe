const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const mySchema  = new Schema ({
  
    Id_Grupo : [{
        type: Schema.ObjectId,
        ref: 'Grupo',
    }],
    Id_Tercero : [{
        type: Schema.ObjectId,
        ref: 'Tercero',
    }],
   
    
});

const  model = mongoose.model('GrupoTercero', mySchema);

module.exports  = model;
