const store = require('./store');

function addTercero(person){
       console.log(person);
    //    if(!Nombre){
     
    //           return Promise.reject('Nombre invalido')
              
    //       }
          
        const user  ={
            Nombre : person.Nombre,
            Apellido : person.Apellido,
            Telefono : person.Telefono,
                
            };
            return  store.add(user)
           

    }

    function getTercero(filterUser){
        console.log('estoy llegado controller')
        return new Promise((resolve, reject) =>{
            resolve(store.list(filterUser));
    
        });
    }

   

module.exports = {
    addTercero,
    getTercero
}
