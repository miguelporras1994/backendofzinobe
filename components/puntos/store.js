
const Model = require('./model');





function addpuntos(user){
     const MyUser = new Model(user)
     console.log( 'mi user es ' + MyUser)
      return MyUser.save();
}

async function getpuntos (filterUser){
     let filter = {};
    if(filterUser !== null){
        filter = { name: filterUser };
    }
    const User = await Model.find(filter);
    return User;
}

async  function  updatepuntos(id, puntos){

    const foundpuntos = await Model.findOne({
        _id: id
    });

   
    foundpuntos.Cedula = puntos.Cedula,
    foundpuntos.Nombre = puntos.Nombre,
    foundpuntos.Apellido = puntos.Apellido,
    foundpuntos.Telefono = puntos.Telefono,
    foundpuntos.Direccion = puntos.Direccion
    foundpuntos.Cargo  = puntos.Cargo
    foundpuntos.Fecha_Nacimiento = puntos.Fecha_Nacimiento 
    foundpuntos.Id_estado  = puntos.Id_estado
    foundpuntos.Estado  = puntos.Estado
    

    const result = await foundpuntos.save();
    
    return  result;
}


function deletepuntos(id){
  
     return Model.deleteOne({
      _id: id
  });
}



module.exports = {
    add: addpuntos,
    list: getpuntos ,
    update:  updatepuntos,
    delete : deletepuntos
    // update
   
}

