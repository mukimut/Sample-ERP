module.exports = async function deleteProduct(req, res) {
    await Product.destroy({id: req.body.id});
    res.send({update: true});
}