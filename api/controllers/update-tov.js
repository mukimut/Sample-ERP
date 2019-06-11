module.exports = async function getTov(req, res) {
	const type = req.body.type;
	const values = req.body.values;

	let stringedValues = values.map(element => `"`+element+`"`);
	let string = stringedValues.join();

	string = `'{`+string+`}'`
	
	const sql = 'update tov set "values" = '+string+' where valuetype=$1';
	var rawResult = await sails.sendNativeQuery(sql, [type]);
	
	//console.log(rawResult);
	//await TOV.update({id: type}).set({values: string});
	res.send(true);
}