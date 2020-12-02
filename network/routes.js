const Tercero = require('../components/tercero/network');
 const Estado = require('../components/estados/network');
 const Grupo = require('../components/grupos/network');
 const GrupoTercero = require('../components/grupoTercero/network');
 const Puntos = require('../components/puntos/network');
 const Premios = require('../components/premios/network')
 const PuntosRedimir = require('../components/Premios_redimidos/network');
 const PremiosRedimidos = require('../components/Premios_redimidos/network');
  const Habilidades = require('../components/habilidades/network');




const routes = function  (server) {
     server.use('/tercero', Tercero);
     server.use('/estado', Estado);
     server.use('/grupo', Grupo);
     server.use('/grupotercero', GrupoTercero);
     server.use('/puntos', Puntos);
     server.use('/premios', Premios);
     server.use('/puntosredimir', PuntosRedimir);
     server.use('/premiosredimidos', PremiosRedimidos);
      server.use('/habilidades', Habilidades);
   
}

module.exports = routes