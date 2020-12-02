const Model = require('./model');





function addCatergoria(Catergoria){
     const MyCatergoria = new Model(Catergoria)
     console.log( 'mi Catergoria es ' + MyCatergoria)
      return MyCatergoria.save();
}

async function getCatergoria (filterCatergoria){
     let filter = {};
    if(filterCatergoria !== null){
        filter = { name: filterCatergoria };
    }
    const Catergoria = await Model.find(filter);
    return Catergoria;
}

async  function  updateCatergoria(id, Catergoria){

    const foundCatergoria = await Model.findOne({
        _id: id
    });

   
    foundCatergoria.Cedula = Catergoria.Cedula,
    foundCatergoria.Nombre = Catergoria.Nombre,
    foundCatergoria.Apellido = Catergoria.Apellido,
    foundCatergoria.Telefono = Catergoria.Telefono,
    foundCatergoria.Direccion = Catergoria.Direccion
    foundCatergoria.Cargo  = Catergoria.Cargo
    foundCatergoria.Fecha_Nacimiento = Catergoria.Fecha_Nacimiento 
    foundCatergoria.Id_estado  = Catergoria.Id_estado
    foundCatergoria.Estado  = Catergoria.Estado
    

    const result = await foundCatergoria.save();
    
    return  result;
}


function deleteCatergoria(id){
  
     return Model.deleteOne({
      _id: id
  });
}



module.exports = {
    add: addCatergoria,
    list: getCatergoria ,
    update:  updateCatergoria,
    delete : deleteCatergoria
    // update
   
}

