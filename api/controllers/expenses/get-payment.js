module.exports = async function getPayment(req, res) {
    const paymentType = req.query.paymenttype;
    const payments = await Payment.find({paymenttype: paymentType});
    res.send(payments);
}