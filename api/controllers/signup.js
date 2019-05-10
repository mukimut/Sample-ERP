module.exports = async function signup(req, res) {
	const username = req.body.username;

	const users = await User.find({username: username});

	if(req.body.userid) {
		await User.update({id: req.body.userid}).set({username: req.body.username, password: req.body.password});
		res.send({update: true});
	}
	else if(users.length === 0){
		const token = await sails.helpers.tokenSource();
		let userData = {username: username, password: req.body.password, token: token}
		if(req.body.access) userData.access = req.body.access;
		await User.create(userData);
		res.send({unique: true, token: token});
	}
	else {
		res.send({unique: false});
	}
}