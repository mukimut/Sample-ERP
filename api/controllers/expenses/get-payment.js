module.exports = async function getPayment(req, res) {
    const paymentType = req.query.paymenttype;
    console.log(paymentType);
    const payments = await Payment.find({paymenttype: paymentType});
    res.send(payments);
}