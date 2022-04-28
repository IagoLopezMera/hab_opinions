const {
  getAllTopics,
  getTopicById,
  createTopic,
  getTopicByDescription,
  updateTopic,
} = require('../db/topics');

//Get all topics controller
const getAllTopicsController = async (req, res) => {
  const topics = await getAllTopics();
  res.send(topics);
};

//Get topics by id controller
const getTopicByIdController = async (req, res) => {
  const id = Number(req.params.id);

  const topic = await getTopicById(id);
  if (!topic)
    return res
      .status(404)
      .send({ message: 'The topic with the given ID was not found' });

  res.send(topic);
};

// Create a topic
const createTopicController = async (req, res) => {
  const { description } = req.body;

  const topic = await getTopicByDescription(description);
  if (topic)
    return res.send({ message: 'The topic already exists', topic: topic });

  const id = await createTopic(description);
  res.send({ message: `The topic with the ID: ${id} has been created` });
};

//Update topic
const updateTopicController = async (req, res) => {
  const id = Number(req.params.id);
  const { description: newDescription } = req.body;

  const topicById = await getTopicById(id);
  if (!topicById)
    return res
      .status(404)
      .send({ message: 'The topic with the given ID was not found' });

  const topicByDescription = await getTopicByDescription(newDescription);
  if (topicByDescription)
    return res.send({
      message: 'A topic with the new description already exists',
      topic: topicByDescription,
    });

  await updateTopic(id, newDescription);
  res.send({ message: `The topic with the ID: ${id} has been updated` });
};

module.exports = {
  getAllTopicsController,
  getTopicByIdController,
  createTopicController,
  updateTopicController,
};
