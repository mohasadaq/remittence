const router = require("express").Router(); // import express router

const { remittenceController } = require("../../controller/"); // import user controller
const { remittenceValidation } = require("../../validations"); // import schemas validation
const { validator } = require("../../middleware"); // import validator middleware
const { auth, authrization } = require("../../middleware");

router
  .get("/", auth, remittenceController.getRemittence) // remittences
  .post("/", auth, validator(remittenceValidation.remittenceSchema), 
       remittenceController.registorRemittence) // registor remittence
  .delete("/:remittenceId", auth, remittenceController.deleteRemittence) // registor remittence

module.exports = router;
