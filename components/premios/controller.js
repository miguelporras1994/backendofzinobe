const store = require('./store');

function addPremio(premios){
       console.log(premios);
        // if(!premios.Apellido){
     
        //        return Promise.reject('Nombre invalido')
              
        //  }
          
        const premio  ={
            Descripcion: premios.Descripcion,
            Cantidad : premios.Cantidad,
            Valor_Puntos : premios.Valor_Puntos,
            Id_estado :  premios.Id_estado,
            Estado :  premios.Estado,
                
            };
            return  store.add(premio)
           

    }

    function getPremio(filterpremio){
            return new Promise((resolve, reject) =>{
            resolve(store.list(filterpremio));
    
        });
    }


    function UpdatePremio(id , premios) {
        return new Promise( async (  resolve, reject) => {
            if(!id || !message){
                reject('Invalid Data');
                return false;
            }
           
          const result = await  store.update(id, premios)
          resolve(result)
        });
     }
    function deletePremio(id){
        
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
    addPremio,
    getPremio,
    UpdatePremio,
    deletePremio,
}
