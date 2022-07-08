const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Joi = require('@hapi/joi');
const { generateError } = require('../helpers');
const {
  createUser,
  getUserById,
  getUsers,
  getUserByEmail,
  modifyUserById,
  modifyPasswordById,
} = require('../db/user');

const { getOpinionsByUserId } = require('../db/opinions');

require('dotenv').config();

const newUserController = async (req, res, next) => {
  try {
    const { userName, email, password } = req.body;

    const schema = Joi.object().keys({
      userName: Joi.string().min(2).max(20).required(),
      email: Joi.string()
        .email()
        .required()
        .error(new Error('Inserted email is not correct')),
      password: Joi.string()
        .min(8)
        .required()
        .error(
          new Error('Inserted password is not correct. 8 characters minimum')
        ),
    });

    const validation = schema.validate(req.body);

    if (validation.error) {
      throw generateError(validation.error.message, 400);
    }

    const id = await createUser(userName, email, password);
    console.log(id);

    res.send({
      status: 'ok',
      message: `User created with ID: ${id}`,
    });
  } catch (error) {
    next(error);
  }
};

const getUsersController = async (req, res, next) => {
  try {
    const users = await getUsers();

    res.send({
      status: 'ok',
      data: users,
    });
  } catch (error) {
    next(error);
  }
};

const getSingleUserController = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await getUserById(id);

    res.send({
      status: 'ok',
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

const getUserOpinionsController = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await getOpinionsByUserId(id);

    res.send({
      status: 'ok',
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

const getLoggedUserInfoController = async (req, res, next) => {
  try {
    const user = await getUserById(req.idUser);
    res.send({
      status: 'ok',
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

const loginController = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw generateError('You should send an email and a password', 400);
    }

    // Recojo los datos de la base de datos del usuario con ese mail
    const user = await getUserByEmail(email);

    // Compruebo que las contraseñas coinciden
    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      throw generateError('Passwords do not match', 401);
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

const modifyUserController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { userName, email } = req.body;
    const user = await getUserById(id);

    if (req.idUser !== user.idUser) {
      throw generateError("It's not possible to change other user's data");
    }

    // Modificar los datos del usuario
    await modifyUserById(id, userName, email);

    res.send({
      status: 'ok',
      message: 'Username has been modified',
    });
  } catch (error) {
    next(error);
  }
};

const modifyPasswordController = async (req, res, next) => {
  try {
    const { password } = req.body;

    // Modificar los datos del usuario
    await modifyPasswordById(req.idUser, password);

    res.send({
      status: 'ok',
      message: 'Password has been modified',
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
  modifyUserController,
  modifyPasswordController,
  getLoggedUserInfoController,
  getUserOpinionsController,
};
