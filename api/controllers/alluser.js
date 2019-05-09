module.exports = async function alluser(req, res) {
	const users = await User.find();
	res.send(users);
}