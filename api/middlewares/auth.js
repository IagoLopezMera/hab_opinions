const jwt = require('jsonwebtoken');
const { generateError } = require('../helpers');

const authUser = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      throw generateError('Authorization header is missing', 401);
    }

    // Comprobamos que el token sea correcto
    let token;

    try {
      token = jwt.verify(authorization, process.env.SECRET);
    } catch {
      throw generateError('Wrong Token', 401);
    }
    console.log(token.id);
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
