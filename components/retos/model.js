const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const mySchema  = new Schema ({
   Namechallenge : String,
   Descriptionchallenge  : String,
   points : Number ,
   Id_category: [{
    type: Schema.ObjectId,
    ref: 'Categorias',
}],
    Id_status: [{
        type: Schema.ObjectId,
        ref: 'Estados',
    }],
    status : String,

    
});

const  model = mongoose.model('Retos', mySchema);

module.exports  = model;
