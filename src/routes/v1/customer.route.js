const router = require("express").Router(); // import express router

const { customerController } = require("../../controller/"); // import user controller
const { customerValidation } = require("../../validations"); // import schemas validation
const { validator } = require("../../middleware"); // import validator middleware
const { auth, authrization } = require("../../middleware");

router
  .get("/", auth, customerController.getCustomers) // customers
  .post("/", auth, validator(customerValidation.customerSchema), customerController.registorCustomer) // registor customer
  .put("/", auth, validator(customerValidation.customerEditSchema), customerController.editCustomer) // edit customer
  .delete("/:customerId", auth, customerController.deleteCustomer) // registor customer

module.exports = router;
