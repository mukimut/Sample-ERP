module.exports = async function getTov(req, res) {
	const allValue = await TOV.find();
	res.send(allValue);
}