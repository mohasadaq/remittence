const { customerService } = require("../service");
const ResponseApi = require("../payload/ApiResponse");
const ApiError = require("../payload/ApiError");
const { handleAsync } = require("../util/util");

/**
 * @description
 * get Customers function
 */
const getCustomers = handleAsync(async (req, res) => {
  let customers = await customerService.getCustomers();
  let successmessage = res.__("message");
  res.status(200).send(new ResponseApi(200, successmessage, customers));
});

/**
 * @description
 * registor Customers function
 */
const registorCustomer = handleAsync(async (req, res) => {
  let customer = await customerService.registorCustomer(req.body);
  if(customer){
    res.status(200).send(new ResponseApi(200, 'successfully registored'));
  }

    throw new ApiError(401,'something Wrong')
});

/**
 * @description
 * edit Customers function
 */
const editCustomer = handleAsync(async (req, res) => {
  let customer = await customerService.editCustomer(req.body);
  res.status(200).send(new ResponseApi(200, customer));
});

/**
 * @description
 * get Customers function
 */
const deleteCustomer = handleAsync(async (req, res) => {
  let customer = await customerService.deleteCustomer(req.params.customerId);
  res.status(200).send(new ResponseApi(200, "deleted successfully"));
});

module.exports = {
  getCustomers,
  registorCustomer,
  editCustomer,
  deleteCustomer,
};
