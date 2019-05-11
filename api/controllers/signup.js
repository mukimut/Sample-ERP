module.exports = async function signup(req, res) {
	const username = req.body.username;

	const users = await User.find({username: username});

	if(users.length === 0){
        let userData = {username: username, password: req.body.password};
        if(req.body.access) userData.access = req.body.access;
        let update;

        if(req.body.userid) {
            await User.update({id: req.body.userid}).set(userData);
            update = true;
            res.send({update: true});
        }
        else {
            userData.token = await sails.helpers.tokenSource();
            await User.create(userData);
            update = true;
            res.send({unique: true, token: token}); 
        }
	}
	else {
		res.send({unique: false, update: false, message: 'Username already exists'});
	}
}