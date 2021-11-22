const { permisionModel } = require("../model"); // import permission model

const getPermissions = () => permisionModel.getPermissions(); // get permision list from the model
const getRolePermissions = (userRole) => permisionModel.getRolePermissions(userRole); // get permision list from the model


const getRoles = () => permisionModel.getRoles(); // get Roles list from the model
const registorRole = (role) => permisionModel.registorRole(role); // registor Roles list from the model
const editRole = (role) => permisionModel.editRole(role); // edit Roles list from the model
const deleteRole = (roleId) => permisionModel.deleteRole(roleId); // delete Roles list from the model

module.exports = { getPermissions,getRolePermissions,getRoles,registorRole,
editRole,
deleteRole };
