const store = require('./store');

function addPremiosRedimidos(Premios){
       console.log(Premios);
        // if(!Premios.Apellido){
     
        //        return Promise.reject('Nombre invalido')
              
        //  }
          
        const PremiosRedimidos  ={
            
            Id_Premio : Premios.Id_Premio ,
            ValorPremios:  Premios.ValorPremios ,
            Id_Tercero :  Premios.Id_Tercero,
            Fecha_Pedido : Premios.Fecha_Pedido,
            Fecha_Entrega : Premios.Fecha_Entrega,
            Id_estado :  Premios.Id_estado,
            Estado :  Premios.Estado
        
                
            };
            return  store.add(PremiosRedimidos)
           

    }

    function getPremiosRedimidos(filterPremiosRedimidos){
            return new Promise((resolve, reject) =>{
            resolve(store.list(filterPremiosRedimidos));
    
        });
    }


    function UpdatePremiosRedimidos(id , PremiosRedimidos) {
        return new Promise( async (  resolve, reject) => {
            if(!id || !message){
                reject('Invalid Data');
                return false;
            }
           
          const result = await  store.update(id, PremiosRedimidos)
          resolve(result)
        });
     }
    function deletePremiosRedimidos(id){
        
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
    addPremiosRedimidos,
    getPremiosRedimidos,
    UpdatePremiosRedimidos,
    deletePremiosRedimidos,
}
