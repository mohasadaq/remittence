const router = require("express").Router(); // import express router

const { authController } = require("../../controller/"); // import user controller
const { permissionController } = require("../../controller/"); // import permission controller
const { authValidation } = require("../../validations"); // import schemas validation
const { validator } = require("../../middleware"); // import validator middleware
const { auth, authrization } = require("../../middleware");

router.post("/", validator(authValidation.authSchema), authController.login); // login

router
  .post(
    "/customer",
    validator(authValidation.authSchema),
    authController.customerLogin
  ) // customerlogin

  .get("/permission", auth, permissionController.permissions) // permission List
  .post("/rolepermission", auth, permissionController.getRolePermissions) // permission List

  .get("/role", auth, permissionController.getRoles) // role List
  .post("/role", auth, permissionController.registorRole) // registor List
  .put("/role", auth, permissionController.editRole) // edit List
  .delete("/role/:roleId", auth, permissionController.deleteRole); // edit List
module.exports = router;
