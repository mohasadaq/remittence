const { remittenceModel } = require("../model"); // import permission model

const getRemittence = () => remittenceModel.getRemittence(); // get remittence list from the model
const registorRemittence = (remittence) =>
  remittenceModel.registorRemittence(remittence); // get remittence list from the model
const deleteRemittence = (remittenceId) =>
  remittenceModel.deleteRemittence(remittenceId); // get remittence list from the model

const aproveRemittence = (remittence) => remittenceModel.aproveRemittence(remittence); // aprove remittence list from the model

module.exports = {
  getRemittence,
  registorRemittence,
  deleteRemittence,
  aproveRemittence,
};
