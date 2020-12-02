const store = require('./store');

function addStatus(estado){
        console.log(estado);
        if(!estado.Idestado){
     


              return Promise.reject('Id Estado invalido')
              
           }
           if(!estado.NomEstado){
     


            return Promise.reject('Non estado invalido')
            
         }

          
        const status  ={
            NomEstado : estado.NomEstado,
            Idestado  : estado.Idestado
            };

            return  store.add(status)
           

    }

    function getStatus(filterUser){
        console.log('estoy llegado controller')
        return new Promise((resolve, reject) =>{
            resolve(store.list(filterUser));
    
        });
    }

    function UpdateEstado(id , Estado) {
        return new Promise( async (  resolve, reject) => {
            if(!id || !Estado){
                reject('Invalid Data');
                return false;
            }
           
          const result = await  store.update(id, Estado)
          resolve(result)
        });
     }

    function deleteEstado(id){
        
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
    addStatus,
    getStatus,
    deleteEstado,
    UpdateEstado

}
