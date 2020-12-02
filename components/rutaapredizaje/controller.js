const store = require('./store');

function addTercero(person){
       console.log(person);
        if(!person.Apellido){
     
               return Promise.reject('Nombre invalido')
              
         }
          
        const user  ={
            Nombre : person.Nombre,
            Apellido : person.Apellido,
            Telefono : person.Telefono,
            Cedula : person.Cedula,
            Direccion :   person.Direccion,
            Cargo :  person.Cargo,
            Fecha_Nacimiento :  person.Fecha_Nacimiento,

            Id_estado :  person.Id_estado,
            Estado :  person.Estado,
                
            };
            return  store.add(user)
           

    }

    function getTercero(filterUser){
            return new Promise((resolve, reject) =>{
            resolve(store.list(filterUser));
    
        });
    }


    function UpdateTercero(id , tercero) {
        return new Promise( async (  resolve, reject) => {
            if(!id || !message){
                reject('Invalid Data');
                return false;
            }
           
          const result = await  store.update(id, tercero)
          resolve(result)
        });
     }
    function deleteTercero(id){
        
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
    addTercero,
    getTercero,
    UpdateTercero,
    deleteTercero,
}
