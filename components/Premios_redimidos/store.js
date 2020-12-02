
const Model = require('./model');





function addPremiosRedimidos(Premios){
     const MyPremios = new Model(Premios)
     console.log( 'mi Premios es ' + MyPremios)
      return MyPremios.save();
}

async function getPremiosRedimidos (filterPremios){
     let filter = {};
    if(filterPremios !== null){
        filter = { name: filterPremios };
    }
    const Premios = await Model.find(filter);
    return Premios;
}

async  function  updatePremiosRedimidos(id, PremiosRedimidos){

    const foundPremiosRedimidos = await Model.findOne({
        _id: id
    });

   
    foundPremiosRedimidos.Cedula = PremiosRedimidos.Cedula,
    foundPremiosRedimidos.Nombre = PremiosRedimidos.Nombre,
    foundPremiosRedimidos.Apellido = PremiosRedimidos.Apellido,
    foundPremiosRedimidos.Telefono = PremiosRedimidos.Telefono,
    foundPremiosRedimidos.Direccion = PremiosRedimidos.Direccion
    foundPremiosRedimidos.Cargo  = PremiosRedimidos.Cargo
    foundPremiosRedimidos.Fecha_Nacimiento = PremiosRedimidos.Fecha_Nacimiento 
    foundPremiosRedimidos.Id_estado  = PremiosRedimidos.Id_estado
    foundPremiosRedimidos.Estado  = PremiosRedimidos.Estado
    

    const result = await foundPremiosRedimidos.save();
    
    return  result;
}


function deletePremiosRedimidos(id){
  
     return Model.deleteOne({
      _id: id
  });
}



module.exports = {
    add: addPremiosRedimidos,
    list: getPremiosRedimidos ,
    update:  updatePremiosRedimidos,
    delete : deletePremiosRedimidos
    // update
   
}

