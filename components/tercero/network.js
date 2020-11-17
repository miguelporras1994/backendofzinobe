const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')
const router =  express.Router();


router.post('/' , function(req , res){

    controller.addTercero(req.body)
    .then(data =>{
        response.success(req, res, data , 201 )
    })
    .catch(err =>{
        response.error(req, res,'Internal error', 500 ,  err)  
    });

})




router.get('/' , function(req , res){
    const   filterUser = req.query.name|| null;

  
  controller.getTercero(filterUser)
  .then((UserList) => {
      response.success(req, res, UserList, 200)

  })
  .catch(e =>{
      response.error(req, res,'Unexpected', 500, e );
  })
})




module.exports =  router;