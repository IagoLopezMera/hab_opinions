const Joi = require('@hapi/joi');

const topicValidator = Joi.object().keys({
  description: Joi.string().min(5).max(32).required(),
});

module.exports = {
  topicValidator,
};