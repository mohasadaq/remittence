const joi = require("joi"); // import joi

// auth edit schema
const remittenceSchema = joi.object({
  receiverid: joi.number().required(),
  senderid: joi.number().required(),
  userid: joi.number().required(),
  paymantid: joi.number().required(),
  sendingcurrencyid: joi.number().required(),
  recievingcurrencyid: joi.number().required(),
  sendingfrom: joi.number().required(),
  sendingto: joi.number().required(),
  sendingamount: joi.number().required(),
  receivingamount: joi.number().required(),
  charge: joi.number().required(),
});

module.exports = { remittenceSchema };
