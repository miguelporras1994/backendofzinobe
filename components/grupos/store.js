
const Model = require('./model');





function addGrupo(Grupo){
     const MyGrupo = new Model(Grupo)
     console.log( 'mi user es ' + MyGrupo )
      return  MyGrupo.save();
}

async function getGrupo(filterUser){
     let filter = {};
    if(filterUser !== null){
        filter = { name: filterUser };
    }
    const User = await Model.find(filter);
    return User;
}

async  function  updateGrupo(id, Tercero){

    const foundTercero = await Model.findOne({
        _id: id
    });

   
    foundTercero.Cedula = Tercero.Cedula,
    foundTercero.Nombre = Tercero.Nombre,
    foundTercero.Apellido = Tercero.Apellido,
    foundTercero.Telefono = Tercero.Telefono,
    foundTercero.Direccion = Tercero.Direccion
    foundTercero.Cargo  = Tercero.Cargo
    foundTercero.Fecha_Nacimiento = Tercero.Fecha_Nacimiento 
    foundTercero.Id_estado  = Tercero.Id_estado
    foundTercero.Estado  = Tercero.Estado
    

    const result = await foundTercero.save();
    
    return  result;
}


function deleteGrupo(id){
  
     return Model.deleteOne({
      _id: id
  });
}



module.exports = {
    add: addGrupo,
    list: getGrupo,
    update:  updateGrupo,
    delete : deleteGrupo
    // update
   
}

