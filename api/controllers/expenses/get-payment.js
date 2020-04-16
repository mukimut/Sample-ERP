module.exports = async function getPayment(req, res) {
    // const paymentType = req.query.paymenttype;
    // console.log(paymentType);
    // const payments = await Payment.find({paymenttype: paymentType});
    // res.send(payments);




    const fromDate = req.query.fromDate;
    const toDate = req.query.toDate;
    const paymentType = req.query.paymenttype;
	
		const sql = `select company, bank, brunch, checkdate, created, checkno, receipt, amount from payment where 
        paymenttype='Party Payment' and 
        created between '` + fromDate + `' and '` + toDate + `'` ;
		const searchData = await sails.sendNativeQuery(sql, []);
		res.send(searchData);


    //res.send(searchData);
    

}