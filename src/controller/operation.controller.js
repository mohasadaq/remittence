const { operationService } = require("../service");
const ResponseApi = require("../payload/ApiResponse");
const ApiError = require("../payload/ApiError");
const { handleAsync } = require("../util/util");
const status = require("http-status"); // import http status


/**
 * @description
 * get Countries function
 */
const getCountries = handleAsync(async (req, res) => {
  let counteries = await operationService.getCountries();
  res
    .status(status.OK)
    .send(new ResponseApi(200, "successfully get countries", counteries));
});

/**
 * @description
 * registor Country function
 */
const registorCountry = handleAsync(async (req, res) => {
 let message = res.__('registerSuccess','country')
  let counteries = await operationService.registorCountry(req.body);
  if(counteries){
   return res.status(status.OK).send(new ResponseApi(200, message));
  }
  else{
    message = res.__('registerError','country')
    throw new ApiError(status.NOT_ACCEPTABLE,message)
  }
});

/**
 * @description
 * update Country function
 */
const editCountry = handleAsync(async (req, res) => {
 let message = res.__('updateSuccess','country')
  let counteries = await operationService.editCountry(req.body);
  if (counteries) {
   return res.status(200).send(new ResponseApi(200, message));
  }
  message = res.__('registerError','country')
  throw new ApiError(401, "Something Wrong");
});

/**
 * @description
 * update Country function
 */
const deleteCountry = handleAsync(async (req, res) => {
 let message = res.__('deleteSuccess','country')
  let counteries = await operationService.deleteCountry(req.params.countryId);
  if (counteries) {
    return  res.status(status.OK).send(new ResponseApi(200, message));
  }
  message = res.__('deleteError','country')
  throw new ApiError(401, message);
  
});

/**
 * @description
 * get State
 */
const getState = handleAsync(async (req, res) => {
  let state = await operationService.getState();
  res.status(200).send(new ResponseApi(200, "succesfully got data", state));
});

/**
 * @description
 * registor State
 */
const registorState = handleAsync(async (req, res) => {
  let state = await operationService.registorState(req.body);
  if (state) {
    res.status(200).send(new ResponseApi(200, "successfully registored"));
  }
  throw new ApiError(401, "Something Wrong");
});

/**
 * @description
 * edit State
 */
const editState = handleAsync(async (req, res) => {
  let state = await operationService.editState(req.body);
  if (state) {
    res.status(200).send(new ResponseApi(200, "successfully updated"));
  }
  throw new ApiError(401, "Something Wrong");
});

/**
 * @description
 * delete State
 */
const deleteState = handleAsync(async (req, res) => {
  let state = await operationService.deleteState(req.params.stateId);
  if (state) {
    res.status(200).send(new ResponseApi(200, "successfully deleted"));
  }
  throw new ApiError(401, "Something Wrong");
});

/**
 * @description
 * get city
 */
const getCity = handleAsync(async (req, res) => {
  let city = await operationService.getCity();
  res.status(200).send(new ResponseApi(200, "successfully got data", city));
});

/**
 * @description
 * registor City
 */
const registorCity = handleAsync(async (req, res) => {
  let city = await operationService.registorCity(req.body);
  if (city) {
    res.status(200).send(new ResponseApi(200, "successfully registored"));
  }
  throw new ApiError(401, "Something Wrong");
});

/**
 * @description
 * registor City
 */
const editCity = handleAsync(async (req, res) => {
  let city = await operationService.editCity(req.body);
  if (city) {
    res.status(200).send(new ResponseApi(200, "successfully updated"));
  }
  throw new ApiError(401, "Something Wrong");
});

/**
 * @description
 * delete City
 */
const deleteCity = handleAsync(async (req, res) => {
  let city = await operationService.deleteCity(req.params.cityId);
  if (city) {
    res.status(200).send(new ResponseApi(200, "successfully deleted"));
  }
  throw new ApiError(401, "Something Wrong");
});

/**
 * @description
 * get currenncy
 */
const getCurrency = handleAsync(async (req, res) => {
  let currency = await operationService.getCurrency();
  res.status(200).send(new ResponseApi(200, 'successfully got data',currency));
});

/**
 * @description
 * registor Currancy
 */
const registorCurrency = handleAsync(async (req, res) => {
  let currancy = await operationService.registorCurrency(req.body);
  if (currancy) {
    res.status(200).send(new ResponseApi(200, "successfully registored"));
  }
  throw new ApiError(401, "Something Wrong");
});

/**
 * @description
 * edit Currancy
 */
const editCurrency = handleAsync(async (req, res) => {
  let currancy = await operationService.editCurrency(req.body);
  if (currancy) {
    res.status(200).send(new ResponseApi(200, "successfully updated"));
  }
  throw new ApiError(401, "Something Wrong");
});

/**
 * @description
 * delete Currancy
 */
const deleteCurrency = handleAsync(async (req, res) => {
  let currancy = await operationService.deleteCurrency(req.params.currancyId);
  if (currancy) {
    res.status(200).send(new ResponseApi(200, "successfully deleted"));
  }
  throw new ApiError(401, "Something Wrong");
});


/**
 * @description
 * get Payment
 */
 const getPayment = handleAsync(async (req, res) => {
  let payment = await operationService.getPayment();
  res.status(200).send(new ResponseApi(200, 'successfully got data',payment));
});

/**
 * @description
 * registor Payment
 */
 const registorPayment = handleAsync(async (req, res) => {
  let payment = await operationService.registorPayment(req.body);
  if (payment) {
    res.status(200).send(new ResponseApi(200, "successfully registored"));
  }
  throw new ApiError(401, "Something Wrong");
});

/**
 * @description
 * edit Payment
 */
 const editPayment = handleAsync(async (req, res) => {
  let payment = await operationService.editPayment(req.body);
  if (payment) {
    res.status(200).send(new ResponseApi(200, "successfully updated"));
  }
  throw new ApiError(401, "Something Wrong");
});

/**
 * @description
 * delete Payment
 */
 const deletePayment = handleAsync(async (req, res) => {
  let payment = await operationService.deletePayment(req.body.params.paymentId);
  if (payment) {
    res.status(200).send(new ResponseApi(200, "successfully updated"));
  }
  throw new ApiError(401, "Something Wrong");
});

/**
 * @description
 * get Status
 */
 const getStatus = handleAsync(async (req, res) => {
  let status = await operationService.getStatus();
  res.status(200).send(new ResponseApi(200, 'successfully got data',status));
});

/**
 * @description
 * registor Status
 */
 const registorStatus = handleAsync(async (req, res) => {
  let status = await operationService.registorStatus();
  res.status(200).send(new ResponseApi(200, 'successfully registored',status));
});


module.exports = {
  getCountries,
  getState,
  registorState,
  editState,
  deleteState,
  getCity,
  registorCity,
  editCity,
  deleteCity,
  getCurrency,
  registorCountry,
  editCountry,
  deleteCountry,
  registorCurrency,
  editCurrency,
  deleteCurrency,
  getPayment,
  registorPayment,
  editPayment,
  deletePayment,
  getStatus,
  registorStatus
};
