const { createOpinion, getAllOpinions, getOpinionById, deleteOpinionById, modifyOpinionById } = require('../db/opinions');
const {generateError} = require('../helpers');



const getOpinionsController = async (req, res, next) => {

    try {
        const opinions = await getAllOpinions();
        res.send({
            status: 'ok',
            message: opinions,
        })
    } catch(error) {
        next(error);
    }
};


const newOpinionController = async (req, res, next) => {
    
    
    try {
        const { text, topic } =req.body;
        
        if (!text) {
            throw generateError(
                'El texto no puede estar vacío', 400
            );
        }
    
        const id = await createOpinion(topic, req.idUser, text);
        res.send({
            status: 'ok',
            message: `Opinión con id: ${id} creada correctamente`,
        })
    } catch(error) {
        next(error);
    }

};

const getSingleOpinionController = async (req, res, next) => {
    try {

        const { id } = req.params

        const opinion = await getOpinionById(id)
        res.send({
            status: 'ok',
            message: opinion,
        })
    } catch(error) {
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
                'No es posible eliminar una opinión de otro usuario'
            )
        }

        // Eliminar la opinión
        await deleteOpinionById(id);

        res.send({
            status: 'ok',
            message: 'La opinión con id: ${id} ha sido eliminada.',
        })
    } catch(error) {
        next(error);
    }
};

const modifyOpinionController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { text } = req.body;
        const opinion = await getOpinionById(id);

        if (req.idUser !== opinion.idUser) {
            throw generateError(
                'No es posible modificar una opinión de otro usuario'
            )
        }

        // Modificar la opinión
        await modifyOpinionById(id, text);

        res.send({
            status: 'ok',
            message: 'El texto se ha modificado',
        })
    } catch(error) {
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