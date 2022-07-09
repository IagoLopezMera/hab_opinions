const jwt = require('jsonwebtoken');
const { generateError } = require('../helpers');

const authUser = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
<<<<<<< HEAD
      throw generateError('Authorization header is missing', 401);
=======
      throw generateError('Falta la cabecera de Authorization', 401);
>>>>>>> b2b7ff9204823e13435b47af1331cebda9925fa1
    }

    // Comprobamos que el token sea correcto
    let token;

    try {
      token = jwt.verify(authorization, process.env.SECRET);
    } catch {
<<<<<<< HEAD
      throw generateError('Wrong Token', 401);
=======
      throw generateError('Token incorrecto', 401);
>>>>>>> b2b7ff9204823e13435b47af1331cebda9925fa1
    }

    // Metemos la información del token en la request para usarla en el controlador
    req.idUser = token.id;

    // Saltamos al controlador
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  authUser,
};
