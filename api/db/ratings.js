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
        WHERE rating.idOpinion = ?`,
      [idOpinion]
    );
    return ratings;
  } finally {
    if (connection) {
      connection.release();
    }
  }
};

//get all opinion ratings by id

const getOpinionRatingById = async (idOpinion, idUser) => {
  let connection;

  try {
    connection = await getConnection();

    const [ratings] = await connection.query(
      `SELECT rating.idUser, user.username, rating.idOpinion, opinion.text, rating.ratingType 
        FROM Rating rating
        INNER JOIN User user ON user.idUser = rating.idUser 
        INNER JOIN Opinion opinion ON opinion.idOpinion = rating.idOpinion
        WHERE rating.idOpinion = ? AND user.idUser = ?`,
      [idOpinion, idUser]
    );
    if (ratings.length === 0) return null;
    const rating = ratings[0];
    return rating;
  } finally {
    if (connection) {
      connection.release();
    }
  }
};

//create Rating
const createRating = async (idOpinion, idUser, ratingType) => {
  let connection;

  try {
    connection = await getConnection();

    await connection.query(
      'INSERT INTO Rating (idOpinion,idUser,ratingType) VALUES (?,?,?)',
      [ idOpinion,idUser, ratingType]
    );
  } finally {
    if (connection) {
      connection.release();
    }
  }
};

module.exports = {
  getAllOpinionRatings,
  getOpinionRatingById,
  createRating,
};
