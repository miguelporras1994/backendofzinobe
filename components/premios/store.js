
const Model = require('./model');





function addPremio(Premio){
     const MyPremio = new Model(Premio)
     console.log( 'mi user es ' + MyPremio)
      return MyPremio.save();
}

async function getPremio (filterPremio){
     let filter = {};
    if(filterPremio !== null){
        filter = { name: filterPremio };
    }
    const Premio = await Model.find(filter);
    return Premio;
}

async  function  updatePremio(id, Premio){

    const foundTPremio = await Model.findOne({
        _id: id
    });

   
    foundTPremio.Cedula = Premio.Cedula,
    foundTPremio.Nombre = Premio.Nombre,
    foundTPremio.Apellido = Premio.Apellido,
    foundTPremio.Telefono = Premio.Telefono,
    foundTPremio.Direccion = Premio.Direccion
    foundTPremio.Cargo  = Premio.Cargo
    foundTPremio.Fecha_Nacimiento = Premio.Fecha_Nacimiento 
    foundTPremio.Id_estado  = Premio.Id_estado
    foundTPremio.Estado  = Premio.Estado
    

    const result = await foundTPremio.save();
    
    return  result;
}


function deletePremio(id){
  
     return Model.deleteOne({
      _id: id
  });
}



module.exports = {
    add: addPremio,
    list: getPremio,
    update:  updatePremio,
    delete : deletePremio
    // update
   
}

