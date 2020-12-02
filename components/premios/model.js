const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const mySchema  = new Schema ({
    
    Descripcion: String,
    Cantidad : Number,
    Valor_Puntos : Number,
    Id_estado : [{
        type: Schema.ObjectId,
        ref: 'Estados',
    }],
    Estado : String,

    
});

const  model = mongoose.model('Premio', mySchema);

module.exports  = model;
