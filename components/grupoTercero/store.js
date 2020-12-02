
const Model = require('./model');


function addGrupoTer(GrupoTer){
  
    const MygrupoTer = new Model(GrupoTer)
    console.log( 'mi estatus  es ' + MygrupoTer)
     return MygrupoTer.save();
}

async function getGrupoTer(filterGrupoTer){
   console.log('estoy llegado store')

   let filter = {};
   if(filterGrupoTer !== null){
       filter = { name: filterGrupoTer };
   }
   const Status= await Model.find(filter);
   return Status;
}

async  function  updateGrupoTer(id, grupoTer){

   const foundTercero = await Model.findOne({
       _id: id
   });

  
   // foundTercero.Cedula =  Estado.,
   // foundTercero.Nombre = Tercero.Nombre,


   const result = await foundTercero.save();
   
   return  result;
}


function deleteGrupoTer(id){
 
    return Model.deleteOne({
     _id: id
 });
}

module.exports = {
   add: addGrupoTer,
   list: getGrupoTer ,
   update: updateGrupoTer,
   delete : deleteGrupoTer
   // get
   // update
  
}