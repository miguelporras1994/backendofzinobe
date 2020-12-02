const store = require('./store');

function addNiveles(nivel){
       console.log(nivel);
        // if(!nivel.Apellido){
     
        //        return Promise.reject('Nombre invalido')
              
        //  }
          
        const SaveNiveles  = {
            NameLevel  : nivel.NameLevel,
            Id_status  : nivel.Id_status,
            Status : nivel.Status
                
            };
            return  store.add(SaveNiveles)
           

    }

    function getNiveles(filterSaveNiveles){
            return new Promise((resolve, reject) =>{
            resolve(store.list(filterSaveNiveles));
    
        });
    }


    function UpdateNiveles(id , Niveles) {
        return new Promise( async (  resolve, reject) => {
            if(!id || !message){
                reject('Invalid Data');
                return false;
            }
           
          const result = await  store.update(id, Niveles)
          resolve(result)
        });
     }
    function deleteNiveles(id){
        
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
    addNiveles,
    getNiveles,
    UpdateNiveles,
    deleteNiveles,
}
