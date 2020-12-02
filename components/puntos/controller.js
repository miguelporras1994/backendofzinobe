const store = require('./store');

function addpuntos(puntos){
       console.log(puntos);
        // if(!puntos.Apellido){
     
        //        return Promise.reject('Nombre invalido')
              
        //  }
          
        const punto  ={
            
    Certificado: puntos.Certificado,
    valor:  puntos.valor,
    Fecha_Creacion :  puntos.Fecha_Creacion,
    Id_Tercero : puntos.Id_Tercero,
    Id_Habilidad : puntos.Id_Habilidad
    
           
            };
            return  store.add(punto)
           

    }

    function getpuntos(filterpunto){
            return new Promise((resolve, reject) =>{
            resolve(store.list(filterpunto));
    
        });
    }


    function Updatepuntos(id , puntos) {
        return new Promise( async (  resolve, reject) => {
            if(!id || !message){
                reject('Invalid Data');
                return false;
            }
           
          const result = await  store.update(id, puntos)
          resolve(result)
        });
     }
    function deletepuntos(id){
        
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
    addpuntos,
    getpuntos,
    Updatepuntos,
    deletepuntos,
}
