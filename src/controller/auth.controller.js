const { authService } = require("../service");
const ResponseApi = require("../payload/ApiResponse");
const { handleAsync } = require("../util/util");

/**
 * @description
 * login function
 */
const login = handleAsync(async (req, res) => {
  let user = await authService.login(req.body.email, req.body.password);
  res.status(200).send(new ResponseApi(200, user));
});

/**
 * @description
 * customer login function
 */
const customerLogin = handleAsync(async (req, res) => {
  let customer = await authService.customerLogin(
    req.body.email,
    req.body.password
  );
  res.status(200).send(new ResponseApi(200, customer));
});

module.exports = { login, customerLogin };
