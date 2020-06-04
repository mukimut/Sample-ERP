module.exports = async function paymentReport(req, res) {
  const fromDate = req.query.fromDate;
  const toDate = req.query.toDate;

  const sql = `select * from public.payment_report($1,$2, 0);` ;
// console.log(sql)
  const searchData = await sails.sendNativeQuery(sql, [fromDate, toDate]);
  res.send(searchData.rows);
}