const store = require('./store');

function addGrupoTer(Grupoter){
        // console.log(estado);
        // if(!estado.Idestado){
     


        //       return Promise.reject('Id Estado invalido')
              
        //    }
        //    if(!estado.NomEstado){
     


        //     return Promise.reject('Non estado invalido')
            
        //  }

          
        const  Grupostercero  ={
            Id_Grupo :  Grupoter.Id_Grupo,
                
            Id_Tercero : Grupoter.Id_Tercero
               
           
            };

            return  store.add(Grupostercero)
           

    }

    function getGrupoTer(filterUser){
        console.log('estoy llegado controller')
        return new Promise((resolve, reject) =>{
            resolve(store.list(filterUser));
    
        });
    }

    function UpdateGrupoTer(id , Estado) {
        return new Promise( async (  resolve, reject) => {
            if(!id || !Estado){
                reject('Invalid Data');
                return false;
            }
           
          const result = await  store.update(id, Estado)
          resolve(result)
        });
     }

    function deleteGrupoTer(id){
        
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
    addGrupoTer,
    getGrupoTer,
    deleteGrupoTer,
    UpdateGrupoTer

}
