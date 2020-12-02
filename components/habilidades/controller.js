const store = require('./store');

function addhabilidades(habilidades){
        // console.log(estado);
        // if(!estado.Idestado){
     


        //       return Promise.reject('Id Estado invalido')
              
        //    }
        //    if(!estado.NomEstado){
     


        //     return Promise.reject('Non estado invalido')
            
        //  }

          
        const  habilidad  ={
            Descripcion : habilidades.Descripcion,
            Valor : habilidades.Valor
           
            };

            return  store.add(habilidad)
           

    }

    function gethabilidades(filterhabilidad){
        console.log('estoy llegado controller')
        return new Promise((resolve, reject) =>{
            resolve(store.list(filterhabilidad));
    
        });
    }

    function Updatehabilidades(id , Estado) {
        return new Promise( async (  resolve, reject) => {
            if(!id || !Estado){
                reject('Invalid Data');
                return false;
            }
           
          const result = await  store.update(id, Estado)
          resolve(result)
        });
     }

    function deletehabilidades(id){
        
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
    addhabilidades,
    gethabilidades,
    deletehabilidades,
    Updatehabilidades

}
