module.exports = async function deleteEmployee(req, res) {
    await Product.destroy({id: req.body.id});
    res.send({update: true});
}