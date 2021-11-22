const { executeQuery } = require("../config/database");

//#region get Countries
const getCountries = () => executeQuery("select *from country");
//#endregion

//#region get Countries
const registorCountry = (country) =>
  executeQuery(
    `insert into country (countryid,countryname) 
values(COUNTRYSEQ.nextval,:countryName)`,
    [country.name]
  );
//#endregion

//#region edit Countries
const editCountry = (country) =>
  executeQuery(
    `update  country set countryname=:countryName where countryid=:countryId 
`,
    [country.name, country.countryId]
  );
//#endregion

//#region delete Country
const deleteCountry = (countryId) =>
  executeQuery(
    `delete  country  where countryid=:countryId 
`,
    [countryId]
  );
//#endregion

//#region get city
const getCity = () =>
  executeQuery(`select cityid,cityname ,statename, countryname from city
join country on country.countryid = city.countryid
JOIN state on state.stateid = city.stateid
`);
//#endregion

//#region registor city
const registorCity = (city) =>
  executeQuery(
    `insert into city (cityid,cityname,countryid,stateid)
values(CITYSEQ.nextval,:cityName,:countryId,:stateId)`,
    [city.name, city.countryId, city.stateId]
  );
//#endregion

//#region edit city
const editCity = (city) =>
  executeQuery(
    `update  city set cityname=:cityName
where cityid=:cityId`,
    [city.name, city.cityId]
  );
//#endregion

//#region delete city
const deleteCity = (cityId) =>
  executeQuery(`delete  city where cityid=:cityId`, [cityId]);
//#endregion

//#region get state
const getState = () =>
  executeQuery(`SELECT stateid,statename,countryname from state
inner join country on country.countryid=state.countryid`);
//#endregion

//#region registor state
const registorState = (state) =>
  executeQuery(
    `insert into state (stateid,statename,countryid)
values(STATESEQ.nextval,:stateName,:countryId)`,
    [state.name, state.countryid]
  );
//#endregion

//#region edit state
const editState = (state) =>
  executeQuery(
    `update  state set statename=:stateName
where stateid=:stateId`,
    [state.name, state.stateId]
  );
//#endregion

//#region delete state
const deleteState = (stateId) =>
  executeQuery(
    `delete  state 
where stateid=:stateId`,
    [stateId]
  );
//#endregion

//#region get Currency
const getCurrency = () =>
  executeQuery(`select currancyid,currancyname,currancycode,countryname
from currancy join country on currancy.countryid = country.countryid
`);
//#endregion

//#region registor Currency
const registorCurrency = (currancy) =>
  executeQuery(
    `insert into currancy(currancyid,currancyname,currancycode,countryid)
values(CURRANCYSEQ.nextval,:currancyName,:currancyCode,:countryId)`,
    [currancy.name, currancy.code, currancy.countryId]
  );
//#endregion

//#region edit Currency
const editCurrency = (currancy) =>
  executeQuery(
    `update currancy set currancyname=:currancyName,currancycode=:currancyCode
where currancyid=:currancyId`,
    [currancy.name, currancy.code, currancy.currencyId]
  );
//#endregion

//#region edit Currency
const deleteCurrency = (currancyId) =>
  executeQuery(`delete currancy where currancyid=:currancyId`, [currancyId]);
//#endregion

module.exports = {
  getCountries,
  registorCountry,
  editCountry,
  deleteCountry,
  getCity,
  registorCity,
  editCity,
  deleteCity,
  getState,
  registorState,
  editState,
  deleteState,
  getCurrency,
  registorCurrency,
  editCurrency,
  deleteCurrency,
};
