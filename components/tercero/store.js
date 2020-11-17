
const Model = require('./model');





function addTercero(user){
     const MyUser = new Model(user)
     console.log( 'mi user es ' + MyUser)
      return MyUser.save();
}

async function getTercero (filterUser){
    console.log('estoy llegado store')
    console.log(filterUser)
    let filter = {};
    if(filterUser !== null){
        filter = { name: filterUser };
    }
    const User = await Model.find(filter);
    return User;
}


module.exports = {
    add: addTercero,
    list: getTercero ,
    // updateText: updateText,
    // delete :
    // get
    // update
   
}