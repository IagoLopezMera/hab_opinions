const { getConnection } = require('../db/db');

//get all topics from db
const getAllTopics = async () => {
  let connection;

  try {
    connection = await getConnection();

    const [topics] = await connection.query(
      'SELECT idTopic, description FROM Topic'
    );

    return topics;
  } finally {
    if (connection) {
      connection.release();
    }
  }
};

//get topic by id from db
const getTopicById = async (id) => {
  let connection;

  try {
    connection = await getConnection();

    const [topics] = await connection.query(
      'SELECT idTopic, description FROM Topic WHERE idTopic = ?',
      [id]
    );

    if (topics.length === 0) return null;

    const topic = topics[0];
    return topic;
  } finally {
    if (connection) {
      connection.release();
    }
  }
};

//get topic by description from db
const getTopicByDescription = async (description) => {
  let connection;

  try {
    connection = await getConnection();

    const [topics] = await connection.query(
      'SELECT idTopic, description FROM Topic WHERE description = ?',
      [description]
    );

    if (topics.length === 0) return null;

    const topic = topics[0];
    return topic;
  } finally {
    if (connection) {
      connection.release();
    }
  }
};

//create new topic
const createTopic = async (description) => {
  let connection;

  try {
    connection = await getConnection();

    const [result] = await connection.query(
      'INSERT INTO Topic (description) VALUES (?)',
      [description]
    );

    const id = result.insertId;
    return id;
  } finally {
    if (connection) {
      connection.release();
    }
  }
};

module.exports = {
  getAllTopics,
  getTopicById,
  createTopic,
  getTopicByDescription
};
