
const Model = require('./model');


 function addStatus(status){
   
     const MyStatus = new Model(status)
     console.log( 'mi estatus  es ' + MyStatus)
      return MyStatus.save();
}

async function getStatus(filterStatus){
    console.log('estoy llegado store')
    console.log(filterStatus)
    let filter = {};
    if(filterStatus !== null){
        filter = { name: filterStatus };
    }
    const Status= await Model.find(filter);
    return Status;
}

async  function  updateEstado(id, Estado){

    const foundTercero = await Model.findOne({
        _id: id
    });

   
    // foundTercero.Cedula =  Estado.,
    // foundTercero.Nombre = Tercero.Nombre,
 

    const result = await foundTercero.save();
    
    return  result;
}


function deleteEstado(id){
  
     return Model.deleteOne({
      _id: id
  });
}

module.exports = {
    add: addStatus,
    list: getStatus ,
     update: updateEstado,
    delete : deleteEstado
    // get
    // update
   
}