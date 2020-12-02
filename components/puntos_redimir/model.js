const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const mySchema  = new Schema ({
    
    Puntos_disponibles: Number,
    Puntos_redimidos: Number,
    Total_puntos:  Number,
    Id_tercero : [{
        type: Schema.ObjectId,
        ref: 'Tercero',
    }],


    
});

const  model = mongoose.model('puntosredimir', mySchema);

module.exports  = model;
