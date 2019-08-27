module.exports = async function deleteCompany(req, res) {
    await Company.destroy({id: req.body.id});
    res.send({update: true});
}