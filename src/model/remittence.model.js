const { executeQuery } = require("../config/database");

//#region get Customers
const getRemittence = () => {
return executeQuery(`select senderid,cs.name as sendername,rs.name  as recievername,
paymant.paymanttype,currancy.currancyname,sendingfrom.countryname as sendingfrom,
sendingto.countryname as sendingto,remittence.sendingamount,remittence.RECIEVINGAMOUNT,
charge,datecreated
from remittence 
left join 
(select customerid,name from customer) cs on cs.customerid=remittence.senderid
left join (
select customerid, name from customer
) rs on remittence.receiverid=rs.customerid
join paymant on remittence.paymantid = paymant.paymantid
join country on remittence.sendingfrom=country.countryid
join currancy on country.countryid= currancy.countryid
left join (
select countryid,countryname from country
) sendingfrom on sendingfrom.countryid=remittence.sendingfrom
left join(
select countryid,countryname from country
) sendingto on sendingto.countryid=remittence.sendingto
`);
}
//#endregion

registorRemittence=(remittence)=>{
return executeQuery(`insert into remittence(
remittenceid,receiverid,senderid,userid,paymantid,sendingcurrencyid,recievingcurrencyid,sendingfrom,
sendingto,sendingamount,RECIEVINGAMOUNT,charge,datecreated) values(
REMITTENCESEQ.nextval,:receiverid,:senderid,:userid,:paymantid,:sendingcurrencyid,
recievingcurrencyid,sendingfrom,:sendingto,:sendingamount,:RECIEVINGAMOUNT,:charge,SYSDATE)
`,[remittence.receiverid,remittence.senderid,remittence.userid,
remittence.paymantid,remittence.sendingcurrencyid,remittence.recievingcurrencyid,
remittence.sendingfrom,
remittence.sendingto,remittence.sendingamount,remittence.RECIEVINGAMOUNT,remittence.charge]);
}

deleteRemittence=(remittenceId)=>{
  executeQuery(`
  delete remittence where remittenceid=:remittenceid
  `,[remittenceId])
}
module.exports = {
  getRemittence,
  registorRemittence,
  deleteRemittence
};
