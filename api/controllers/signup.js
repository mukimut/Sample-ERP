module.exports = async function signup(req, res) {
	const username = req.body.username;
    const users = await User.find({username: username});
    const userid = req.body.userid;

    if(userid) {
        if(users.length === 0) {
            await updateUser(userid, req.body);
            sendUpdate(res);
        }
        else if(users[0].id === userid) {
            await updateUser(userid, req.body);
            sendUpdate(res);
        }
        else {
            sendDuplicate(res);
        }
    }
    else {
        if(users.length > 0) {
            sendDuplicate(res);
        }
        else {
            await User.create(req.body);
            res.send({unique: true});
        }
    }

	// if(users.length === 0){
    //     let userData = {username: username, password: req.body.password};
    //     if(req.body.access) userData.access = req.body.access;
    //     let update;

    //     if(req.body.userid) {
    //         await User.update({id: req.body.userid}).set(userData);
    //         update = true;
    //         res.send();
    //     }
    //     else {
    //         const token = await sails.helpers.tokenSource();
    //         userData.token = token;
    //         
    //         update = true;
    //          
    //     }
	// }
	// else {
	// 	
	// }
}

function sendUpdate(res) {
    res.send({update: true});
}

async function updateUser(userId, data) {
    await User.update({id: userId}).set(data);
}

function sendDuplicate(res) {
    res.send({unique: false, update: false, message: 'Username already exists'});
}