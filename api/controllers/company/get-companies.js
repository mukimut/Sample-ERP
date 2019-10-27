module.exports =async function getCompanies(req, res) {
	const type = req.query.type;
	const name = req.query.name;
	let allCompanies;
	if(type) allCompanies = await Company.find({companytype: type});
	else if (name) {
		const sql = `SELECT name FROM company WHERE LOWER(name) = LOWER($1)`;
		const rawResult = await sails.sendNativeQuery(sql, [name]);
		res.send(rawResult);
	}
	else allCompanies = await Company.find();

	res.send(allCompanies);
}

//http://localhost:1337/api/companies?type=customer