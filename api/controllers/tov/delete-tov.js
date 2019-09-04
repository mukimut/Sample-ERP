module.exports = async function deleteTov(req, res) {
    await TOV.destroy({id: req.body.id});
    res.send({update: true});
}