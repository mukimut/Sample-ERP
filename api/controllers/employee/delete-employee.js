module.exports = async function deleteEmployee(req, res) {
    await Employee.destroy({id: req.body.id});
    res.send({update: true});
}