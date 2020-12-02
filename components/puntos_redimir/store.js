
const Model = require('./model');





function addPuntosRedimir(Puntos){
     const MyPuntos = new Model(Puntos)
     console.log( 'mi Puntos es ' + MyPuntos)
      return MyPuntos.save();
}

async function getPuntosRedimir (filterPuntos){
     let filter = {};
    if(filterPuntos !== null){
        filter = { name: filterPuntos };
    }
    const Puntos = await Model.find(filter);
    return Puntos;
}

async  function  updatePuntosRedimir(id, PuntosRedimir){

    const foundPuntosRedimir = await Model.findOne({
        _id: id
    });

   
    foundPuntosRedimir.Cedula = PuntosRedimir.Cedula,
    foundPuntosRedimir.Nombre = PuntosRedimir.Nombre,
    foundPuntosRedimir.Apellido = PuntosRedimir.Apellido,
    foundPuntosRedimir.Telefono = PuntosRedimir.Telefono,
    foundPuntosRedimir.Direccion = PuntosRedimir.Direccion
    foundPuntosRedimir.Cargo  = PuntosRedimir.Cargo
    foundPuntosRedimir.Fecha_Nacimiento = PuntosRedimir.Fecha_Nacimiento 
    foundPuntosRedimir.Id_estado  = PuntosRedimir.Id_estado
    foundPuntosRedimir.Estado  = PuntosRedimir.Estado
    

    const result = await foundPuntosRedimir.save();
    
    return  result;
}


function deletePuntosRedimir(id){
  
     return Model.deleteOne({
      _id: id
  });
}



module.exports = {
    add: addPuntosRedimir,
    list: getPuntosRedimir ,
    update:  updatePuntosRedimir,
    delete : deletePuntosRedimir
    // update
   
}

