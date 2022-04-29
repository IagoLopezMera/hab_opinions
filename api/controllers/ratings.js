const {
    getAllOpinionRatings
  } = require('../db/ratings');

  //get all opinion ratings
  const getAllOpinionRatingsController = async (req, res) => {
    const idOpinion = Number(req.params.idOpinion);
    const ratings = await getAllOpinionRatings(idOpinion);
    res.send(ratings);
  };

//get one opinion rating
const getOpinionRatingByIdController = async (req, res) => {
    const idOpinion = Number(req.params.idOpinion);
    const idRating = Number(req.params.idRating);
  
    const rating = await getOpinionRatingById(idOpinion, idRating);
    if (!rating)
      return res
        .status(404)
        .send({ message: 'The rating with the given ID was not found' });
  
    res.send(rating);
  };

  module.exports = {
    getAllOpinionRatingsController,
    getOpinionRatingByIdController
  };