module.exports = async function getTov(req, res) {
	const type = req.query.type;
	let allValues;
	if(type) allValues = await TOV.find({id: type});
	else allValues = await TOV.find();
	res.send(allValues);
}

///tov?type=religion