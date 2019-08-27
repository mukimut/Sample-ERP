module.exports = async function updateProduct(req, res) {
	const id = req.body.id;

	if(!id) {
		await Product.create(req.body);
		res.send({success: true});
	}
	else {
		await Product.update({id: id}).set(req.body);
		res.send({update: true});
	}
}