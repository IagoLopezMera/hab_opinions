const { getAllOpinionRatings, getOpinionRatingById,
createRating} = require('../db/ratings');

//get all opinion ratings
const getAllOpinionRatingsController = async (req, res) => {
  const idOpinion = Number(req.params.idOpinion);
  const ratings = await getAllOpinionRatings(idOpinion);
  res.send(ratings);
};

//get one opinion rating
const getOpinionRatingByIdController = async (req, res) => {
  const idOpinion = Number(req.params.idOpinion);
  const idUser = Number(req.params.idUser);

  const rating = await getOpinionRatingById(idOpinion, idUser);
  if (!rating)
    return res
      .status(404)
      .send({ message: 'The rating with the given ID was not found' });

  res.send(rating);
};

//create an opinion rating

const createOpinionRatingController = async (req, res) => {
  const idOpinion = Number(req.params.idOpinion);
  const { ratingType } = req.body;

  //I am coming up with this because of lack of authentication
  const idUser = 1;

  //to improve: check if the opinion exists

  const rating = await getOpinionRatingById(idOpinion, idUser);
  if (rating)
    return res
      .send({ message: 'The rating already exists' });

  await createRating(idOpinion, idUser, ratingType);
  res.send({ message: 'The rating has been created' });
};

module.exports = {
  getAllOpinionRatingsController,
  getOpinionRatingByIdController,
  createOpinionRatingController,
};
