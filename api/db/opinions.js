// const { generateError } = require('../helpers');
const { generateError } = require('../helpers');
const { getConnection } = require('./db');

const getOpinionsByUserId = async (id) => {
  let connection;

  try {
    connection = await getConnection();

    const [result] = await connection.query(
      `
      SELECT Opinion.*, User.username FROM Opinion LEFT JOIN User on Opinion.idUser = User.idUser WHERE Opinion.idUser = ?`,
      [id]
    );
    
    return result;
  } finally {
    if (connection) connection.release();
  }
}

const getAllOpinions = async () => {
    let connection;

    try {
        connection = await getConnection();

        const [result] = await connection.query(`
        SELECT Opinion.idOpinion, Opinion.text, Opinion.idTopic, Opinion.idUser, Opinion.createdAt, User.username FROM Opinion LEFT JOIN User on Opinion.idUser = User.idUser ORDER BY Opinion.createdAt DESC;
        `);
        
        return result;
    } finally {
        if(connection) connection.release();
    }
}


const getOpinionById = async (id) => {
    let connection;

    try {
        connection = await getConnection();

        const [result] = await connection.query(`
        SELECT Opinion.idOpinion, Opinion.text, Opinion.idTopic, Opinion.idUser, Opinion.createdAt, User.username FROM Opinion LEFT JOIN User on Opinion.idUser = User.idUser WHERE idOpinion = ?
        `, [id]);

        if(!result.length) {
          throw generateError('La opinión no existe', 404);
        }

        return result[0];
    } finally {
        if(connection) connection.release();
    }
}

const createOpinion = async (idTopic, idUser, text) => {
    let connection;

    try {
        connection = await getConnection();

        const [result] = await connection.query(`
        INSERT INTO Opinion (idTopic, idUser, text)
        VALUES(?, ?, ?);
        `, 
        [idTopic, idUser, text]
        );

        return result.insertId;

    } finally {
        if (connection) connection.release()
    }

};

const deleteOpinionById = async (id) => {
    let connection;
  
    try {
      connection = await getConnection();
  
      await connection.query(
        `
        DELETE FROM Opinion WHERE idOpinion = ?
      `,
        [id]
      );
  
      return;
    } finally {
      if (connection) connection.release();
    }
};

const modifyOpinionById = async (idOpinion, text) => {
    let connection;
  
    try {
      connection = await getConnection();
  
      await connection.query(
        `
        UPDATE Opinion SET text = ? WHERE idOpinion = ?
      `,
        [text, idOpinion]
      );
  
      return;
    } finally {
      if (connection) connection.release();
    }
};

module.exports = {
    createOpinion,
    getAllOpinions,
    getOpinionById,
    deleteOpinionById,
    modifyOpinionById,
    getOpinionsByUserId
};