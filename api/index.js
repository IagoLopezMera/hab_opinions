require('dotenv').config();

const express = require('express');

const { 
    getAllTopicsController,
    getTopicByIdController
} = require('./controllers/topics');

const app = express();

//Topic routes
app.get('/api/topics', getAllTopicsController);
app.get('/api/topics/:id', getTopicByIdController);

const port = process.env.PORT || 3000;
app.listen(port,() => console.log(`listening on port:${port}`));