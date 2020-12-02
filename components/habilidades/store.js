
const Model = require('./model');


function addhabilidades(habilidades){
  
    const Myhabilidades = new Model(habilidades)
    console.log( 'mi estatus  es ' + Myhabilidades)
     return Myhabilidades.save();
}

async function gethabilidades(filterhabilidades){
   console.log('estoy llegado store')

   let filter = {};
   if(filterhabilidades !== null){
       filter = { name: filterhabilidades };
   }
   const Status= await Model.find(filter);
   return Status;
}

async  function  updatehabilidades(id, habilidades){

   const foundTercero = await Model.findOne({
       _id: id
   });

  
   // foundTercero.Cedula =  Estado.,
   // foundTercero.Nombre = Tercero.Nombre,


   const result = await foundTercero.save();
   
   return  result;
}


function deletehabilidades(id){
 
    return Model.deleteOne({
     _id: id
 });
}

module.exports = {
   add: addhabilidades,
   list: gethabilidades ,
   update: updatehabilidades,
   delete : deletehabilidades
   // get
   // update
  
}