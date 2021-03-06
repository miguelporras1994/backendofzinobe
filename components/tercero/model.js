const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const mySchema  = new Schema ({
    Cedula: Number ,
    Nombre: String,
    Apellido: String,
    Telefono: String,
    Direccion : String,
    Cargo : String,
    Fecha_Nacimiento : Date,
    Id_estado : [{
        type: Schema.ObjectId,
        ref: 'Estados',
    }],
    Estado : String,

    
});

const  model = mongoose.model('Tercero', mySchema);

module.exports  = model;
