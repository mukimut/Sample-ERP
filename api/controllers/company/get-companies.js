module.exports =async function getCompanies(req, res) {
	const type = req.query.type;
	let allCompanies;
	if(type) allCompanies = await Company.find({companytype: type});
	else allCompanies = await Company.find();

	res.send(allCompanies);
}

//http://localhost:1337/api/companies?type=customer