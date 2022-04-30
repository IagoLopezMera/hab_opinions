require('dotenv').config();

const express = require('express');

const { 
    getAllTopicsController,
    getTopicByIdController,
    createTopicController,
    updateTopicController
} = require('./controllers/topics');
const { 
    getAllOpinionRatingsController,
    getOpinionRatingByIdController,
    createOpinionRatingController
} = require('./controllers/ratings');

const app = express();

app.use(express.json());

//Topic routes
app.get('/api/topics', getAllTopicsController);
app.get('/api/topics/:id', getTopicByIdController);
app.post('/api/topics', createTopicController);
app.put('/api/topics/:id', updateTopicController);

//Ratings routes
app.get('/api/opinions/:idOpinion/ratings',getAllOpinionRatingsController);
app.get('/api/opinions/:idOpinion/ratings/:idUser',getOpinionRatingByIdController);
app.post('/api/opinions/:idOpinion/ratings',createOpinionRatingController);

const port = process.env.PORT || 3000;
app.listen(port,() => console.log(`listening on port:${port}`));