const { executeQuery } = require("../config/database");

//#region get Customers
const getCustomers = () => executeQuery("select * from customer");
//#endregion

//#region registor Customer
const registorCustomer = (customer) => {
  return executeQuery(
    `insert into customer (customerid,name,address,contact,email,password,userid)
     VALUES(CUSTOMERSEQ.nextval,:name,:address,:contact,:email,:password,:userid)`,
    [
      customer.name,
      customer.address,
      customer.contact,
      customer.email,
      customer.password,
      customer.userid,
    ]
  );
};

//#region registor Customer
const editCustomer = (customer) => {
  executeQuery(
    `update customer set name=:name,address=:address,contact=:contact
    where customerid=:customerId`,
    [customer.name, customer.address, customer.contact, customer.customerId]
  );
};

const deleteCustomer = async (customerId) => {
  return await executeQuery(`delete customer where customerid=:customerId`, [
    customerId,
  ]);
};

const login = async (email, password) => {
  return await executeQuery(
    `SELECT cus.customerid, cus.name, cus.EMAIL, rl.ROLENAME
    FROM customer cus,ROLES rl
   WHERE email =:email
  AND PASSWORD =:password
  and rl.ROLENAME ='customer'`,
    [email, password]
  );
};
//#endregion
module.exports = {
  getCustomers,
  registorCustomer,
  editCustomer,
  deleteCustomer,
  login,
};
