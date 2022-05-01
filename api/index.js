require('dotenv').config();

const express = require('express');
const morgan = require('morgan');

const { 
    getAllTopicsController,
    getTopicByIdController,
    createTopicController,
    updateTopicController
} = require('./controllers/topics');

const { 
    getAllOpinionRatingsController,
    getOpinionRatingByIdController,
    createOpinionRatingController,
    updateOpinionRatingController
} = require('./controllers/ratings');

const {
    newUserController,
    getUsersController,
    getSingleUserController,
    loginController,
    modifyUserController,
} = require('./controllers/users');

const {
    getOpinionsController,
    newOpinionController,
    getSingleOpinionController,
    deleteOpinionController,
    modifyOpinionController,
} = require('./controllers/opinions.js')

const {authUser} = require('./middlewares/auth');

const app = express();

app.use(express.json());
app.use(morgan('dev'));

//Topic routes
app.get('/api/topics', getAllTopicsController);
app.get('/api/topics/:id', getTopicByIdController);
app.post('/api/topics', createTopicController);
app.put('/api/topics/:id', updateTopicController);

//Ratings routes
app.get('/api/opinions/:idOpinion/ratings',getAllOpinionRatingsController);
app.get('/api/opinions/:idOpinion/ratings/:idUser',getOpinionRatingByIdController);
app.post('/api/opinions/:idOpinion/ratings',createOpinionRatingController);
app.patch('/api/opinions/:idOpinion/ratings',updateOpinionRatingController);

// ENDPOINTS DE USERS
app.post('/api/users', newUserController);
app.get('/api/users', getUsersController);
app.get('/api/users/:id', getSingleUserController);
app.post('/api/login', loginController);
app.patch('/api/users/:id',authUser, modifyUserController);

// ENDPOINTS DE OPINIONES
app.post('/api/opinions', authUser, newOpinionController);
app.get('/api/opinions', getOpinionsController);
app.get('/api/opinions/:id', getSingleOpinionController);
app.delete('/api/opinions/:id',authUser, deleteOpinionController);
app.patch('/api/opinions/:id',authUser, modifyOpinionController);

// Middleware de 404
app.use((req, res) => {
    res.status(404).send({
        status: 'error',
        message: 'Not found',
    });
});

// Middleware de gestión de errores
app.use((error, req, res, next) => {
    console.error(error);

    res.status(error.httpStatus || 500).send({
        status: 'error',
        message: error.message,      
    });
});

const port = process.env.PORT || 3000;
app.listen(port,() => console.log(`listening on port:${port}`));