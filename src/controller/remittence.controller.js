const status = require("http-status"); // import http status
const { remittenceService } = require("../service"); // import remittence service
const ApiError = require("../payload/ApiError"); // import api error
const ApiResponse = require("../payload/ApiResponse"); // import api error
const logger = require("../config/logger");
const { handleAsync } = require("../util/util");
let error, response;

//#region get remittences
// remittences List conroller
const getRemittence = handleAsync(async (req, res, next) => {
  let remittences = await remittenceService.getRemittence();
  let successmessage = res.__('message');
  response = new ApiResponse(status.OK, successmessage, remittences); // prepare response
  logger.info(response); //  log as info
  res.status(status.OK).send(response)
});

//#endregion

//#region create remittence
const registorRemittence = handleAsync(async (req, res) => {
  let remittence = await remittenceService.registorRemittence(req.body);
  let message = res.__('registerSuccess')
  if (remittence) {
    response = new ApiResponse(status.OK, message); // prepare response
  }
  else{
    message = res.__('registerError')
    throw new ApiError(status.NOT_ACCEPTABLE,message)
  }
  logger.info(response); // log response as info
  res.status(status.OK).send(response)
});
//#endregion

//#region delete remittence ...
const deleteRemittence = handleAsync(async (req, res) => {
  let remittence = await remittenceService.deleteRemittence(req.params.remittenceId);
  if (remittence) {
    response = new ApiResponse(res.statusCode, "successfuly deleted the remittence");
  } else {
    throw new ApiError(status.NOT_ACCEPTABLE, "Id not exists ..");
  }
  logger.info(response);
  res.send(response);
});

//#endregion

module.exports = { getRemittence,registorRemittence,deleteRemittence };
