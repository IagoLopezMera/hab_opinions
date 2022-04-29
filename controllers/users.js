const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const {generateError} = require('../helpers');
const {createUser, getUserById, getUsers, getUserByEmail} = require('../db/user');
require("dotenv").config()

const newUserController = async (req, res, next) => {
  try {
    const {userName, email, password} = req.body;

    // ¡¡¡¡¡¡¡¡¡¡ Hay que sustituir esto por el módulo Joi (vídeo de la semana pasada)!!!!!!!
    if (!email || !password) {
        throw generateError('Es necesario indicar un email y una contraseña', 400)
    }

    const id = await createUser(userName, email, password);
    console.log(id);
    
    res.send({
        status: 'ok',
        message: `User created with id: ${id}`,
    });
  } catch(error) {
    next(error)
  }
};

const getUsersController = async (req, res, next) => {
    try {
        const users = await getUsers();

        res.send({
            status: 'ok',
            message: users,
        })
      } catch(error) {
        next(error)
      }
};

const getSingleUserController = async (req, res, next) => {
    try {
      const { id } = req.params;
      
      const user = await getUserById(id);

        res.send({
            status: 'ok',
            message: user,
        })
      } catch(error) {
        next(error)
      }
};

const loginController = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw generateError('Debes enviar un email y una password', 400);
    }

    // Recojo los datos de la base de datos del usuario con ese mail
    const user = await getUserByEmail(email);
    

    // Compruebo que las contraseñas coinciden
    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      throw generateError('La contraseña no coincide', 401);
    }

    // Creo el payload del token
    const payload = { id: user.idUser };

    // Firmo el token
    const token = jwt.sign(payload, process.env.SECRET, {
      expiresIn: '30d',
    });

    // Envío el token
    res.send({
      status: 'ok',
      data: token,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
    newUserController,
    getUsersController,
    getSingleUserController,
    loginController,
};