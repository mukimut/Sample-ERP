module.exports = async function getPayment(req, res) {

    const fromDate = req.query.fromDate;
    const toDate = req.query.toDate;
    const paymentType = req.query.paymenttype;
	
		// const sql = `select company, bank, brunch, checkdate, created, checkno, receipt, amount from payment where 
    //     paymenttype='Party Payment' and 
    //     created between '` + fromDate + `' and '` + toDate + `'` ;
    const sql = `select company, bank, brunch, checkdate, created, checkno, receipt, amount, paymentmethod from payment where 
        paymenttype='Party Payment' order by paymentid desc offset 0 rows fetch next 20 rows only` ;
		const searchData = await sails.sendNativeQuery(sql, []);
		res.send(searchData.rows);

    //res.send(searchData);
    

}