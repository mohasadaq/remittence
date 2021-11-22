const { permissionService } = require("../service");
const ResponseApi = require("../payload/ApiResponse");
const { handleAsync } = require("../util/util");

/**
 * @description
 * permission function
 */
const permissions = handleAsync(async (req, res) => {
  let permissionList = await permissionService.getPermissions();
  res
    .status(200)
    .send(new ResponseApi(200, "successfully got data", permissionList));
});

/**
 * @description
 * getRolePermissions function
 */
const getRolePermissions = handleAsync(async (req, res) => {
  let permissionList = await permissionService.getRolePermissions(req.body.role);
  res
    .status(200)
    .send(new ResponseApi(200, "successfully got data", permissionList));
});

/**
 * @description
 * permission function
 */
const getRoles = handleAsync(async (req, res) => {
  let roles = await permissionService.getRoles();
  res.status(200).send(new ResponseApi(200, "successfully got data", roles));
});

/**
 * @description
 * registor role function
 */
const registorRole = handleAsync(async (req, res) => {
  let roles = await permissionService.registorRole(req.body);
  res.status(200).send(new ResponseApi(200, "successfully registored", roles));
});

/**
 * @description
 * edit role function
 */
const editRole = handleAsync(async (req, res) => {
  let roles = await permissionService.editRole(req.body);
  res.status(200).send(new ResponseApi(200, "successfully updated", roles));
});

/**
 * @description
 * edit role function
 */
const deleteRole = handleAsync(async (req, res) => {
  let roles = await permissionService.deleteRole(req.params.roleId);
  res.status(200).send(new ResponseApi(200, "successfully deleted", roles));
});

module.exports = {
  permissions,
  getRoles,
  registorRole,
  editRole,
  deleteRole,
  getRolePermissions,
};
