const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const mySchema  = new Schema ({
    
    
    Id_Premio : [{
        type: Schema.ObjectId,
        ref: 'Premio',
    }],

    ValorPremios:  Number,
    Id_Tercero : [{
        type: Schema.ObjectId,
        ref: 'Tercero',
    }],
    Fecha_Pedido : Date,
    Fecha_Entrega : Date,
    Id_estado : [{
        type: Schema.ObjectId,
        ref: 'Estados',
    }],
    Estado : String,

    
});

const  model = mongoose.model('Premiosredimidos', mySchema);

module.exports  = model;
