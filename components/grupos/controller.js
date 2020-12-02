const store = require('./store');

function addGrupo(grupo){
       console.log(grupo);
        if(!grupo.nameGrupo){
     
               return Promise.reject(' nameGrupo invalido')
              
         }
          
        const Grupo  ={
        
            nameGrupo  : grupo.nameGrupo,
                
            };
            return  store.add(Grupo)
           

    }

    function getGrupo(filterUser){
            return new Promise((resolve, reject) =>{
            resolve(store.list(filterUser));
    
        });
    }


    function UpdateGrupo(id , grupo) {
        return new Promise( async (  resolve, reject) => {
            if(!id || !grupo){
                reject('Invalid Data');
                return false;
            }
           
          const result = await  store.update(id, grupo)
          resolve(result)
        });
     }
    function deleteGrupo(id){
        
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
    addGrupo,
    getGrupo,
    UpdateGrupo,
    deleteGrupo,
}
