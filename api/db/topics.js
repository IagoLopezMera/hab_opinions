const { getConnection } = require('../db/db');

const getAllTopics = async () => {
  let connection;

  try {
    connection = await getConnection();

    const [topics] = await connection.query(
      'SELECT idTopic, description FROM opinionsForumDB.Topic'
    );

    return topics;
  } finally {
    if (connection) {
      connection.release();
    }
  }
};

const getTopicById = async (id) => {
  let connection;

  try {
    connection = await getConnection();

    const [topics] = await connection.query(
      'SELECT idTopic, description FROM opinionsForumDB.Topic WHERE idTopic = ?',
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

module.exports = {
    getAllTopics,
    getTopicById
};