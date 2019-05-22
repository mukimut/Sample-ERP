module.exports =async function getCompanies(req, res) {
	const allCompanies = await Company.find();
	res.send(allCompanies);
	
}