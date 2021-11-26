const { permissionService } = require("../service");
const ResponseApi = require("../payload/ApiResponse");
const { handleAsync } = require("../util/util");
const ApiError = require("../payload/ApiError");
const { required } = require("joi");
const status = require('http-status');

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
 * registor Permission function
 */
 const registorPermission = handleAsync(async (req, res) => {
  let permission = await permissionService.registorPermission(req.body);

  if(permission){
    res
      .status(200)
      .send(new ResponseApi(200, "successfully registored"));
  }
  else{
    throw new ApiError(status.NOT_ACCEPTABLE,'something Wrong')
  }
});



/**
 * @description
 * edit Permission function
 */
 const editPermission = handleAsync(async (req, res) => {
  let permission = await permissionService.editPermission(req.body);
  if(permission){
    res
      .status(200)
      .send(new ResponseApi(200, "successfully updated"));
  }
  else{
    throw new ApiError(status.NOT_ACCEPTABLE,'something Wrong')
  }
});


/**
 * @description
 * delete  Permission function
 */
 const deletePermission = handleAsync(async (req, res) => {
  let permission = await permissionService.deletePermission(req.params.permissionId);
  if(permission){
    res
      .status(200)
      .send(new ResponseApi(200, "successfully deleted"));
  }
  else{
    throw new ApiError(status.NOT_ACCEPTABLE,'something Wrong')
  }
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
  registorPermission,
  editPermission,
  deletePermission
};
