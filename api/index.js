require('dotenv').config();

const express = require('express');
const { getConnection } = require('./db/db');
const app = express();

app.get('/', (req,res) => {
    res.send("hello world!!!");
});

app.get('/api/topics', async (req, res) => {
    let connection;

    try{
        connection = await getConnection();
        
        const [topics] = await connection.query(
            "SELECT idTopic, description FROM opinionsForumDB.Topic"
        );

        res.send(topics);
    }
    finally {
        if (connection){
            connection.release();
        }
    }
});

app.get('/api/topics/:id', async (req,res) => {
    const idTopic = Number(req.params.id);

    let connection;

    try {
        connection = await getConnection();
        
        const [topics] = await connection.query(
            "SELECT idTopic, description FROM opinionsForumDB.Topic WHERE idTopic = ?", [idTopic]
        );

        if (topics.length === 0) {
            return res.status(404).send('Topic not found');
        }
        const topic = topics[0];
        res.send(topic);
    } finally {
        if (connection){
            connection.release();
        }
    }
});

const port = process.env.PORT || 3000;
app.listen(port,() => console.log(`listening on port:${port}`));