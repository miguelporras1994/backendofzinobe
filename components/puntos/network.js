const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')
const router =  express.Router();


router.post('/' , function(req , res){

    controller.addpuntos(req.body)
    .then(data =>{
        response.success(req, res, data , 201 )
    })
    .catch(err =>{
        response.error(req, res,'Internal error', 500 ,  err)  
    });

})




router.get('/' , function(req , res){
    const   filterUser = req.query.name|| null;

  
  controller.getpuntos(filterUser)
  .then((UserList) => {
      response.success(req, res, UserList, 200)

  })
  .catch(e =>{
      response.error(req, res,'Unexpected', 500, e );
  })
})


router.patch('/:id', function(req , res){
   
    controller.Updatepuntos(req.params.id, req.body)
    .then((data) => {
        response.success(req, res, data, 200);
     })
     .catch( e =>{
           response.error(req,  res, 'error Interno', 500, e);
     });

})


router.delete('/:id', function(req, res){
    console.log(req.params.id);
     controller.deletepuntos(req.params.id)
     .then(() =>{
         response.success(req, res, `Usuario ${req.params.id} fue eliminado`, 200 )
     })
     .catch(e => {
         response.error(req, res, 'error Interno ',  500)
     })
})



module.exports =  router;