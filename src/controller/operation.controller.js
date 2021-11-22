const { operationService } = require("../service");
const ResponseApi = require("../payload/ApiResponse");
const ApiError = require("../payload/ApiError");
const { handleAsync } = require("../util/util");

/**
 * @description
 * get Countries function
 */
const getCountries = handleAsync(async (req, res) => {
  let counteries = await operationService.getCountries();
  res
    .status(200)
    .send(new ResponseApi(200, "successfully get countries", counteries));
});

/**
 * @description
 * registor Country function
 */
const registorCountry = handleAsync(async (req, res) => {
  let counteries = await operationService.registorCountry(req.body);
  res.status(200).send(new ResponseApi(200, "successfully registored"));
});

/**
 * @description
 * update Country function
 */
const editCountry = handleAsync(async (req, res) => {
  let counteries = await operationService.editCountry(req.body);
  if (counteries) {
    res.status(200).send(new ResponseApi(200, "successfully updated"));
  }
  throw new ApiError(401, "Something Wrong");
});

/**
 * @description
 * update Country function
 */
const deleteCountry = handleAsync(async (req, res) => {
  let counteries = await operationService.deleteCountry(req.params.countryId);
  res.status(200).send(new ResponseApi(200, "successfully delted"));
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
};
