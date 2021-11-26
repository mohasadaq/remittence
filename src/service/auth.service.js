const { userModel } = require("../model/");
const { customerModel } = require("../model/");
const ApiError = require("../payload/ApiError");
const jwt = require("jsonwebtoken");

const login = async (email, password) => {
  let user = await userModel.isEmailAndPasswordExist(email, password);
  if (!user.length) {
    throw new ApiError(401, "email or password not exist");
  }
  let token = jwt.sign(
    { userId: user[0].userid, role: user[0].rolename, name: user[0].fullname },
    process.env.JWT_SECRET_KEY
  );
  return { token };
};

const customerLogin = async (email, password) => {
  let customer = await customerModel.login(email, password);
  if (!customer.length) {
    throw new ApiError(401, "email or password not exist");
  }
  let token = jwt.sign(
    {
      customerId: customer[0].customerid,
      role: customer[0].rolename,
      name: customer[0].name,
    },
    process.env.JWT_SECRET_KEY
  );
  return { token };
};

module.exports = { login, customerLogin };
