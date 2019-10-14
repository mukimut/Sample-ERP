module.exports =async function getEmployees(req, res) {
	const id = req.query.id;
	let allEmployees;
    let sql = 'SELECT * FROM employee'
    if(id) sql += ' WHERE employeeid = ' + id;
    allEmployees = await sails.sendNativeQuery(sql, []);
	res.send(allEmployees.rows);
}