module.exports = async function getTov(req, res) {
	const type = req.body.type;
	const values = req.body.values;

	let mapObject = await sails.sendNativeQuery('SELECT map FROM public.tov WHERE valuetype = $1', [type]);
	mapObject = mapObject.rows[0].map;

	let stringedValues = values.map(element => {
		if(!mapObject[element]) {
			mapObject[element] = null;
		}
		return `"`+element+`"`;
	});

	let string = stringedValues.join();
	string = `'{`+string+`}'`;
	const mapString = JSON.stringify(mapObject);

	const sql = 'update tov set "values" = '+string+', map = \''+ mapString +'\' where valuetype=$1';
	await sails.sendNativeQuery(sql, [type]);
	
	res.send(true);
}

/*
console.log(rawResult);
await TOV.update({id: type}).set({values: string});
for mappping all vallues to null
const sql = 'update tov set "values" = '+string+', map = \''+ mapString +'\' where valuetype=$1';
values.forEach(element => {
	mapObject[element] = null;
});
	*/
	