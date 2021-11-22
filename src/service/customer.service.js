const ApiError = require("../payload/ApiError");
const { customerModel } = require("../model"); // import Customer model

const getCustomers = () => customerModel.getCustomers(); // get Customer list from the model
const registorCustomer = async(customer) => {
  let customers = await getCustomers()
  if(!(customers.length && customers.filter(cust => customer.email==cust.email).length)){
    return customerModel.registorCustomer(customer); // registor Customer  from the model
  }
  throw new ApiError(401, 'Email in used');
}
const editCustomer = (customer) => customerModel.editCustomer(customer); // edit Customer  from the model
const deleteCustomer = (customerId) => customerModel.deleteCustomer(customerId); // delete Customer  from the model

module.exports = {
  getCustomers,
  registorCustomer,
  editCustomer,
  deleteCustomer,
};
