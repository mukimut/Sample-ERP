module.exports = async function deleteuser(req, res) {
    await User.destroy({id: req.body.userid});
    res.send({update: true});
}