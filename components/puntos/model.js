const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const mySchema  = new Schema ({
   
 
    Certificado: String,
    valor: Number,
    Fecha_Creacion : Date,
    Id_Tercero : [{
        type: Schema.ObjectId,
        ref: 'Tercero',
    }],
    Id_Habilidad : [{
        type: Schema.ObjectId,
        ref: 'Habilidades',
    }],
    

    
});

const  model = mongoose.model('Puntos', mySchema);

module.exports  = model;
