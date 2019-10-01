module.exports = async function saveEmployee(req, res) {
	const id = req.body.id;

	if(!id) {
		await Employee.create(req.body);
		res.send(true);
	}
	else {
		await Employee.update({id: id}).set(req.body);
		res.send(true);
	}
}