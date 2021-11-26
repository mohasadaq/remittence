const router = require("express").Router(); // import express router

const { operationController } = require("../../controller/"); // import user controller
const { authValidation } = require("../../validations"); // import schemas validation
const { validator } = require("../../middleware"); // import validator middleware
const { auth, authrization } = require("../../middleware");

router
  .get("/countries", auth, operationController.getCountries) // countries
  .post("/countries", auth, operationController.registorCountry) // registor countries
  .put("/countries", auth, operationController.editCountry) // edit countries
  .delete("/countries/:countryId", auth, operationController.deleteCountry) // delete countries

  .get("/state", auth, operationController.getState) // state
  .post("/state", auth, operationController.registorState) // state
  .put("/state", auth, operationController.editState) // state
  .delete("/state/:stateId", auth, operationController.deleteState) // state

  .get("/city", auth, operationController.getCity)// city
  .post("/city", auth, operationController.registorCity)// city
  .put("/city", auth, operationController.editCity)// city
  .delete("/city/:cityId", auth, operationController.deleteCity)// city

  .get("/currency", auth, operationController.getCurrency) // getCurrency
  .post("/currency", auth, operationController.registorCurrency) // registor Currency
  .put("/currency", auth, operationController.editCurrency) // edit Currency
  .delete("/currency/:currancyId", auth, operationController.deleteCurrency) //delete Currency

  .get("/payment", auth, operationController.getPayment) // get Payment
  .post("/payment", auth, operationController.registorPayment) // registor Payment
  .put("/payment", auth, operationController.editPayment) // edit Payment
  .delete("/payment/:currancyId", auth, operationController.deletePayment) //delete Payment


  .get("/status", auth, operationController.getStatus) // get Status
  .post("/status", auth, operationController.registorStatus) // registor Status

module.exports = router;
