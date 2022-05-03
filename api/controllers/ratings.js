const {
  getAllOpinionRatings,
  getOpinionRatingById,
  createRating,
  updateOpinionRating,
} = require('../db/ratings');

//get all opinion ratings
const getAllOpinionRatingsController = async (req, res) => {
  const idOpinion = Number(req.params.idOpinion);
  const ratings = await getAllOpinionRatings(idOpinion);
  res.send({ status: 'ok', ratings });
};

//get one opinion rating
const getOpinionRatingByIdController = async (req, res) => {
  const idOpinion = Number(req.params.idOpinion);
  const idUser = Number(req.params.idUser);

  const rating = await getOpinionRatingById(idOpinion, idUser);
  if (!rating)
    return res.status(404).send({
      status: 'error',
      message: 'The rating with the given ID was not found',
    });

  res.send({ status: 'ok', rating });
};

//create an opinion rating
const createOpinionRatingController = async (req, res) => {
  const idOpinion = Number(req.params.idOpinion);
  const { ratingType } = req.body;

  //must be authenticated
  const idUser = req.idUser;

  //to improve: check if the opinion exists

  const rating = await getOpinionRatingById(idOpinion, idUser);
  if (rating)
    return res.send({ status: 'error', message: 'The rating already exists' });

  await createRating(idOpinion, idUser, ratingType);
  res.send({ status: 'ok', message: 'The rating has been created' });
};

//update opinion rating
const updateOpinionRatingController = async (req, res) => {
  const idOpinion = Number(req.params.idOpinion);

  const { ratingType: newRatingType } = req.body;

  //must be authenticated
  const idUser = req.idUser;

  const rating = await getOpinionRatingById(idOpinion, idUser);
  if (!rating)
    return res.status(404).send({
      status: 'error',
      message: 'The rating with the given ID was not found',
    });

  //check if the rating owner equals to te authenticated user
  if (idUser !== opinion.idUser) {
    res.status(401).send({ status: 'error', message: 'Forbidden' });
  }

  await updateOpinionRating(idOpinion, idUser, newRatingType);
  res.send({ status: 'ok', message: 'The rating has been updated' });
};

module.exports = {
  getAllOpinionRatingsController,
  getOpinionRatingByIdController,
  createOpinionRatingController,
  updateOpinionRatingController,
};
