const store = require('./store');

function addcategorias(cate){
       console.log(cate);
        // if(!cate.Apellido){
     
        //        return Promise.reject('Nombre invalido')
              
        //  }
          
        const categoria  ={
            NameCategory : cate.NameCategory,
            Id_estado :  cate.Id_estado
             };
            return  store.add(categoria)
           

    }

    function getcategoriass(filtercategorias){
            return new Promise((resolve, reject) =>{
            resolve(store.list(filtercategorias));
    
        });
    }


    function Updatecategorias(id , categorias) {
        return new Promise( async (  resolve, reject) => {
            if(!id || !message){
                reject('Invalid Data');
                return false;
            }
           
          const result = await  store.update(id, categorias)
          resolve(result)
        });
     }
    function deletecategorias(id){
        
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
    addcategorias,
    getcategorias,
    Updatecategorias,
    deletecategorias,
}
