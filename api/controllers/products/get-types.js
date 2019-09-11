module.exports = async function getTypes(req, res) {
    const types = req.query.types;
    const typeList = groups.split();
    let typeMap = []
    const length = typeList.length;

    for(let i=0; i < length; i++) {
        const type = typeList[i];
        const query = `SELECT MAP FROM public.tov where $1= ANY (values) AND valuetype = 'Product Type'`;
        const types = await sails.sendNativeQuery(query, [type]);
        typeMap = typeMap.concat(types);
    }

    res.send(typeMap);
}