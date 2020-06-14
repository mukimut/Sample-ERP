module.exports = async function getPayment(req, res) {
    const fromDate = req.query.fromDate;
    const toDate = req.query.toDate;
    const paymentType = req.query.paymenttype;
	
    const sql = `select company, bank, brunch, checkdate, created, checkno, receipt, amount, paymentmethod, paymentid as id, narration from payment where 
        paymenttype=$1 order by paymentid desc offset 0 rows fetch next 20 rows only` ;
		const searchData = await sails.sendNativeQuery(sql, [paymentType]);
		res.send(searchData.rows);
}