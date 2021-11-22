const userService = require("./user.service");
const authService = require("./auth.service");
const permissionService = require("./permission.service.js");
const operationService = require("./operation.service.js");
const customerService = require("./customer.service");
const remittenceService = require("./remittence.service");

module.exports = {
  userService,
  authService,
  operationService,
  customerService,
  permissionService,
  remittenceService
};
