require('dotenv').config();

const express = require('express');

const { 
    getAllTopicsController,
    getTopicByIdController,
    createTopicController,
    updateTopicController
} = require('./controllers/topics');

const app = express();

app.use(express.json())

//Topic routes
app.get('/api/topics', getAllTopicsController);
app.get('/api/topics/:id', getTopicByIdController);
app.post('/api/topics', createTopicController);
app.put('/api/topics/:id', updateTopicController);

const port = process.env.PORT || 3000;
app.listen(port,() => console.log(`listening on port:${port}`));