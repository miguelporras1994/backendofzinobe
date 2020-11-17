const Tercero = require('../components/tercero/network');
//  const user = require('../components/user/network');
//  const chat  = require('../components/chat/network');



const routes = function  (server) {
     server.use('/tercero', Tercero);
    //  server.use('/estados', estados);
    //  server.use('/grupos', grupos);
}

module.exports = routes