module.exports = async function updateCompany(req, res) {
	const id = req.body.id;

	if(!id) {
		await Company.create(req.body);
		res.send(true);
	}
	else {
		await Company.update({id: id}).set(req.body);
		res.send(true);
	}
}