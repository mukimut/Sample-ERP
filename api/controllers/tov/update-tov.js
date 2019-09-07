module.exports = async function getTov(req, res) {
	const type = req.body.type;
	const values = req.body.values;
	const newType = req.body.newType;

	let mapObject = await sails.sendNativeQuery('SELECT map FROM public.tov WHERE displayname = $1', [type]);
	mapObject = mapObject.rows[0].map;
	if(!mapObject) mapObject = {};

	let stringedValues = values.map(element => {
		if(!mapObject[element]) {
			mapObject[element] = null;
		}
		return `"`+element+`"`;
	});

	let string = stringedValues.join();
	string = `'{`+string+`}'`;
	const mapString = JSON.stringify(mapObject);

	let sql = 'update tov set "values" = '+string+', map = \''+ mapString +'\' where displayname=$1';
	await sails.sendNativeQuery(sql, [type]);

	if(newType) {
		sql = `update tov set displayname = $1 where displayname=$2`;
		await sails.sendNativeQuery(sql, [newType, type]);
	}
	
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
	