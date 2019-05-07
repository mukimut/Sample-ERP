module.exports = async function login(req, res) {
    const username = req.body.username;

    const users = await User.find({username: username});
    if(users.length != 0){
        const token = await sails.helpers.tokenSource();
        const password = req.body.password;

        if(users[0].password === password) {
            await User.update({id: users[0].id}).set({token: token});
            res.send({found: true, token: token});
        }
        else res.send({found: false, message: 'Wrong password'})
        
    }
    else {
        res.send({found: false, message: 'Wrong username'});
    }
}