const router = require("express").Router(); // import express router
const userRoute = require("./user.route");
const authRoute = require("./auth.route");
const operationRoute = require("./operation.route");
const customerRoute = require("./customer.route");
const remittenceRoute = require("./remittence.route");

let routes = [
  {
    path: "/user",
    route: userRoute,
  },
  {
    path: "/auth",
    route: authRoute,
  },
  {
    path: "/operation",
    route: operationRoute,
  },
  {
    path: "/customer",
    route: customerRoute,
  },
  {
    path: "/remittence",
    route: remittenceRoute,
  },
];

routes.map((route) => router.use(route.path, route.route));

module.exports = router;
