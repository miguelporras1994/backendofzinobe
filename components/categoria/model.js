const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const mySchema  = new Schema ({

    NameCategory : String,
    Id_estado : [{
        type: Schema.ObjectId,
        ref: 'Estados',
    }],
  
    
});

const  model = mongoose.model('Categorias', mySchema);

module.exports  = model;
