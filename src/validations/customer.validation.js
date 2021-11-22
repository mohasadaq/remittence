const joi = require("joi"); // import joi

// customer schema
const customerSchema = joi.object({
  name: joi.string().required().max(10),
  email: joi.string().email().required(),
  address: joi.string().required(),
  contact: joi.string().required(),
  userid: joi.number().required(),
  password: joi.string().alphanum().required().max(10).min(8),
});

// customer edit schema
const customerEditSchema = joi.object({
  customerId: joi.number().required(),
  name: joi.string().required().max(10),
  address: joi.string().required(),
  contact: joi.string().required(),
});

module.exports = { customerSchema, customerEditSchema };
