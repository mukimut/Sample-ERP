module.exports = async function tokendata(req, res) {
    const token = req.body.token;
    const user = await User.find({token: token});

    if(user.length === 0) res.send({found: false});
    res.send({user: user[0], found: true});
}