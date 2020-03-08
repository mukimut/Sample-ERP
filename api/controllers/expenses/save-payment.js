module.exports = async function savePayment(req, res) {
    const paymentId =  req.body.id;
    if(!paymentId) {
        await Payment.create(req.body);
    }
    else {
        await Payment.update({id: paymentId}).set(req.body.data);
    }
    res.send({update: true});
}