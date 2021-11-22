const userController = require("./user.controler");
const authController = require("./auth.controller");
const permissionController = require("./permission.controller.js");
const operationController = require("./operation.controller");
const customerController = require("./customer.controller");
const remittenceController = require("./remittence.controller");

module.exports = {
  userController,
  authController,
  permissionController,
  operationController,
  customerController,
  remittenceController
};
