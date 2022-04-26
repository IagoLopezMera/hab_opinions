const { getAllTopics, getTopicById } = require('../db/topics');

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

module.exports = {
  getAllTopicsController,
  getTopicByIdController,
};