
const Model = require('./model');





function addNiveles(Niveles){
     const MyNiveles = new Model(Niveles)
     console.log( 'mi Niveles es ' + MyNiveles)
      return MyNiveles.save();
}

async function getNiveles (filterNiveles){
     let filter = {};
    if(filterNiveles !== null){
        filter = { name: filterNiveles };
    }
    const Niveles = await Model.find(filter);
    return Niveles;
}

async  function  updateNiveles(id, Niveles){

    const foundNiveles = await Model.findOne({
        _id: id
    });

   
    foundNiveles.Cedula = Niveles.Cedula,
    foundNiveles.Nombre = Niveles.Nombre,
    foundNiveles.Apellido = Niveles.Apellido,
    foundNiveles.Telefono = Niveles.Telefono,
    foundNiveles.Direccion = Niveles.Direccion
    foundNiveles.Cargo  = Niveles.Cargo
    foundNiveles.Fecha_Nacimiento = Niveles.Fecha_Nacimiento 
    foundNiveles.Id_estado  = Niveles.Id_estado
    foundNiveles.Estado  = Niveles.Estado
    

    const result = await foundNiveles.save();
    
    return  result;
}


function deleteNiveles(id){
  
     return Model.deleteOne({
      _id: id
  });
}



module.exports = {
    add: addNiveles,
    list: getNiveles ,
    update:  updateNiveles,
    delete : deleteNiveles
    // update
   
}

