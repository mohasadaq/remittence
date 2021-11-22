const { executeQuery } = require("../config/database");

//#region get Roles
const getRoles = async () => {
  return await executeQuery("select *from roles"); // return all Roles
};

//#region registor Roles
const registorRole = async (role) => {
  return await executeQuery(`insert into roles(roleid,rolename)
VALUES(ROLESEQ.nextval,:roleName)`,[role.name]); // registor Role
};

//#region edit Roles
const editRole = async (role) => {
  return await executeQuery(`update  roles set rolename=:roleName
where roleid=:roleId`,[role.name,role.roleId]); // registor Role
};

//#region delete Roles
const deleteRole = async (roleId) => {
  return await executeQuery(`delete  roles 
where roleid=:roleId`,[roleId]); // delete Role
};
//#region get permissions
const getPermissions = async () => {
  return await executeQuery("select *from permissions"); // return all permission
};
//#endregion

//#region get role permissions
const getRolePermissions = async (roleName) => {
  return await executeQuery(`select rl.roleid,rl.rolename,pr.permissionname from rolepermissions rp
  inner join roles rl on rl.roleid=rp.roleid
  inner join permissions pr on pr.permissionid= rp.permissionid
  where rolename=:roleName`,[roleName]); // return all role permission
};
//#endregion

module.exports = { getPermissions, getRolePermissions,getRoles,registorRole,editRole,deleteRole };
