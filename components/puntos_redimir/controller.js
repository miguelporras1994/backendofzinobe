const { put } = require('../grupos/network');
const store = require('./store');

function addPuntosRedimir(puntos){
       console.log(puntos);
        // if(!puntos.Apellido){
     
        //        return Promise.reject('Nombre invalido')
              
        //  }
          
        const Puntos  ={
            Puntos_disponibles: puntos.Puntos_disponibles,
            Puntos_redimidos:  puntos.Puntos_redimidos,
            Total_puntos:  puntos.Total_puntos,
            Id_tercero : puntos.Id_tercero
        
        
                
            };
            return  store.add(Puntos)
           

    }

    function getPuntosRedimir(filterPuntos){
            return new Promise((resolve, reject) =>{
            resolve(store.list(filterPuntos));
    
        });
    }


    function UpdatePuntosRedimir(id , PuntosRedimir) {
        return new Promise( async (  resolve, reject) => {
            if(!id || !message){
                reject('Invalid Data');
                return false;
            }
           
          const result = await  store.update(id, PuntosRedimir)
          resolve(result)
        });
     }
    function deletePuntosRedimir(id){
        
        return new Promise((resolve, reject) => {
        store.delete(id)
        .then(()=>{
            resolve();
        })
        .catch(e => {
            reject(e);
    
        })
    
        })
    }
    

   

module.exports = {
    addPuntosRedimir,
    getPuntosRedimir,
    UpdatePuntosRedimir,
    deletePuntosRedimir,
}
