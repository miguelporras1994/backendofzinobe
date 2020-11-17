const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const mySchema  = new Schema ({
    Nombre: String,
    Apellido: String,
    Telefono: String,
    
});

const  model = mongoose.model('prueba', mySchema);

module.exports  = model;
