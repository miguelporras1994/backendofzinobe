const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const mySchema  = new Schema ({
 NameLevel  : String,
    Id_status: [{
        type: Schema.ObjectId,
        ref: 'Estados',
    }],
    Status: String,

    
});

const  model = mongoose.model('Niveles', mySchema);

module.exports  = model;
