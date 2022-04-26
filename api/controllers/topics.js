const { getConnection } = require('../db/db');

//Get all topics controller
const getAllTopicsController = async (req, res) => {
  let connection;

  try {
    connection = await getConnection();

    const [topics] = await connection.query(
      "SELECT idTopic, description FROM opinionsForumDB.Topic"
    );

    res.send(topics);
  } finally {
    if (connection) {
      connection.release();
    }
  }
};

//Get topics by id controller
const getTopicByIdController = async (req,res) => {
    const idTopic = Number(req.params.id);

    let connection;

    try {
        connection = await getConnection();
        
        const [topics] = await connection.query(
            "SELECT idTopic, description FROM opinionsForumDB.Topic WHERE idTopic = ?", [idTopic]
        );

        if (topics.length === 0) {
            return res.status(404).send('Topic not found');
        }
        const topic = topics[0];
        res.send(topic);
    } finally {
        if (connection){
            connection.release();
        }
    }
};

module.exports = {
    getAllTopicsController,
    getTopicByIdController
};