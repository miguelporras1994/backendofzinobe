const store = require('./store');

function addRetos(reto){
       console.log(reto);
        if(!reto.Apellido){
     
               return Promise.reject('Nombre invalido')
              
         }
          
        const Savereto  ={
              Namechallenge : reto.Namechallenge,
              Descriptionchallenge  :  reto.Descriptionchallenge,
              points : reto.points,
              Id_category:  reto.points,
              Id_status:  reto.Id_status,
               status : reto.status
                
            };
            return  store.add(Savereto)
           

    }

    function getRetos(filterSavereto){
            return new Promise((resolve, reject) =>{
            resolve(store.list(filterSavereto));
    
        });
    }


    function UpdateRetos(id , Retos) {
        return new Promise( async (  resolve, reject) => {
            if(!id || !message){
                reject('Invalid Data');
                return false;
            }
           
          const result = await  store.update(id, Retos)
          resolve(result)
        });
     }
    function deleteRetos(id){
        
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
    addRetos,
    getRetos,
    UpdateRetos,
    deleteRetos,
}
