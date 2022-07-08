const bcrypt = require('bcrypt');
const { generateError } = require('../helpers');
const { getConnection } = require('./db');

const getUserByEmail = async (email) => {
  let connection;

  try {
    connection = await getConnection();

    const [result] = await connection.query(
      `
        SELECT idUser, username, password, email FROM User WHERE email = ?
      `,
      [email]
    );

    if (result.length === 0) {
      throw generateError('There is no user with this email', 404);
    }

    return result[0];
  } finally {
    if (connection) connection.release();
  }
};

//  Devuelve la información pública de un usuario por su id

const getUserById = async (id) => {
  let connection;

  try {
    connection = await getConnection();

    const [result] = await connection.query(
      `
          SELECT idUser, username, email FROM User WHERE idUser = ?
      `,
      [id]
    );

    if (result.length === 0) {
      throw generateError('There is no user with this ID', 404);
    }
    return result[0];
  } finally {
    if (connection) connection.release();
  }
};

//  Devuelve la información pública de todos los usuarios

const getUsers = async () => {
  let connection;

  try {
    connection = await getConnection();

    const [result] = await connection.query(`
          SELECT username, email FROM User ORDER BY username ASC
      `);

    return result;
  } finally {
    if (connection) connection.release();
  }
};

// Crea un usuario en la base de datos y devuelve su Id
const createUser = async (userName, email, password) => {
  let connection;
  console.log(password);
  try {
    connection = await getConnection();
    // Comprobar que no exista otro usuario con ese email
    const [user] = await connection.query(
      `SELECT idUser FROM User WHERE email = ?`,
      [email]
    );

    if (user.length > 0) {
      throw generateError('There is another user with this email', 409);
    }

    // Encriptar la password
    const passwordHash = await bcrypt.hash(password, 8);

    // Crear el usuario

    const [newUser] = await connection.query(
      `
        INSERT INTO User (userName, email, password) VALUES(?, ?, ?)
        `,
      [userName, email, passwordHash]
    );
    // Devolver la Id
    return newUser.insertId;
  } finally {
    if (connection) connection.release();
  }
};

const modifyUserById = async (id, userName, email) => {
  let connection;

  try {
    connection = await getConnection();

    const [result] = await connection.query(
      `UPDATE User SET userName = ?, email = ? WHERE idUser = ?`,
      [userName, email, id]
    );

    return result;
  } finally {
    if (connection) connection.release();
  }
};

const modifyPasswordById = async (id, password) => {
  let connection;

  try {
    connection = await getConnection();
    // Encriptar la password
    const passwordHash = await bcrypt.hash(password, 8);

    const [result] = await connection.query(
      `UPDATE User SET password = ? WHERE idUser = ?`,
      [passwordHash, id]
    );

    return result;
  } finally {
    if (connection) connection.release();
  }
};

module.exports = {
  createUser,
  getUserById,
  getUserByEmail,
  getUsers,
  modifyUserById,
  modifyPasswordById,
};
