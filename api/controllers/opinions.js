const {
  createOpinion,
  getAllOpinions,
  getOpinionById,
  deleteOpinionById,
  modifyOpinionById,
} = require('../db/opinions');
const { generateError } = require('../helpers');

const getOpinionsController = async (req, res, next) => {
  try {
    const opinions = await getAllOpinions();
    res.send({
      status: 'ok',
      data: opinions,
    });
  } catch (error) {
    next(error);
  }
};

const newOpinionController = async (req, res, next) => {
  try {
    const { text, topic } = req.body;

    if (!text) {
      throw generateError("Text can't be empty ", 400);
    }

    const id = await createOpinion(topic, req.idUser, text);
    res.send({
      status: 'ok',
      data: `Opinion with ID: ${id} has been correctly created`,
    });
  } catch (error) {
    next(error);
  }
};

const getSingleOpinionController = async (req, res, next) => {
  try {
    const { id } = req.params;

    const opinion = await getOpinionById(id);
    console.log(opinion);
    res.send({
      status: 'ok',
      data: opinion,
    });
  } catch (error) {
    next(error);
  }
};

const deleteOpinionController = async (req, res, next) => {
  try {
    // req.OpinionId
    const { id } = req.params;

    // Conseguir la información de la opinión que se quiere eliminar
    const opinion = await getOpinionById(id);

    // Comprobar que el usario del token es el mismo que creó la opinión
    if (req.idUser !== opinion.idUser) {
      throw generateError(
        "It's not possible to delete other user's opinion",
        401
      );
    }

    // Eliminar la opinión
    await deleteOpinionById(id);

    res.send({
      status: 'ok',
      data: `Opinion with ID: ${id} has been deleted.`,
    });
  } catch (error) {
    next(error);
  }
};

const modifyOpinionController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { text } = req.body;
    const opinion = await getOpinionById(id);

    if (req.idUser !== opinion.idUser) {
      throw generateError("It's not possible to change other user's opinion");
    }

    // Modificar la opinión
    await modifyOpinionById(id, text);

    res.send({
      status: 'ok',
      data: `Text with ID: ${id} has been modified`,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getOpinionsController,
  newOpinionController,
  getSingleOpinionController,
  deleteOpinionController,
  modifyOpinionController,
};
