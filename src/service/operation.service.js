const { operationModel } = require("../model"); // import operation model

const getCountries = () => operationModel.getCountries(); // get countries list from the model
const registorCountry = (country) => operationModel.registorCountry(country); // registor countries  from the model
const editCountry = (country) => operationModel.editCountry(country); // edit countries  from the model
const deleteCountry = (countryId) => operationModel.deleteCountry(countryId); // delete countries  from the model

const getState = () => operationModel.getState(); // get state list from the model
const registorState = (state) => operationModel.registorState(state); // registor state list from the model
const editState = (state) => operationModel.editState(state); // edit state list from the model
const deleteState = (stateId) => operationModel.deleteState(stateId); // delete state list from the model

const getCity = () => operationModel.getCity(); // get City list from the model
const registorCity = (city) => operationModel.registorCity(city); // registor City list from the model
const editCity = (city) => operationModel.editCity(city); // edit City list from the model
const deleteCity = (cityId) => operationModel.deleteCity(cityId); // delete City list from the model

const getCurrency = () => operationModel.getCurrency(); // get Currency list from the model
const registorCurrency = (currancy) =>
  operationModel.registorCurrency(currancy); // registor Currency list from the model
const editCurrency = (currancy) => operationModel.editCurrency(currancy); // edit Currency list from the model
const deleteCurrency = (currancyId) =>
  operationModel.deleteCurrency(currancyId); // edit Currency list from the model

const getPayment = () => operationModel.getPayment(); // get payment list from the model
const registorPayment = (payment) => operationModel.registorPayment(payment); // get payment registor from the model
const editPayment = (payment) => operationModel.editPayment(payment); // get payment edit from the model
const deletePayment = (paymentId) => operationModel.deletePayment(paymentId); // get payment delete from the model

const getStatus = () => operationModel.getStatus(); // get Status list from the model
const registorStatus = (status) => operationModel.registorStatus(status); // registor Status list from the model

module.exports = {
  getCountries,
  registorCountry,
  editCountry,
  deleteCountry,
  getState,
  registorState,
  editState,
  deleteState,
  getCity,
  registorCity,
  editCity,
  deleteCity,
  getCurrency,
  registorCurrency,
  editCurrency,
  deleteCurrency,
  getPayment,
  registorPayment,
  editPayment,
  deletePayment,
  getStatus,
  registorStatus,
};
