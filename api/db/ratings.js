const { getConnection } = require('../db/db');

//get all ratings from db
const getAllOpinionRatings = async (idOpinion) => {
    let connection;
  
    try {
      connection = await getConnection();
  
      const [ratings] = await connection.query(
        `SELECT rating.idUser, user.username, rating.idOpinion, opinion.text, rating.ratingType 
        FROM Rating rating
        INNER JOIN User user ON user.idUser = rating.idUser 
        INNER JOIN Opinion opinion ON opinion.idOpinion = rating.idOpinion
        WHERE rating.idOpinion = ?`, [idOpinion]
      );
      
      return ratings;
    } finally {
      if (connection) {
        connection.release();
      }
    }
  };

  module.exports = {
    getAllOpinionRatings
  };
  