module.exports = async function getGroups(req, res) {
    const groups = req.query.groups;
    const groupList = groups.split();
    let groupMap = []
    const length = groupList.length;

    for(let i=0; i < length; i++) {
        const group = groupList[i];
        const query = `SELECT MAP FROM public.tov where $1= ANY (values) AND valuetype = 'Product Group'`;
        const groups = await sails.sendNativeQuery(query, [group]);
        groupMap = groupMap.concat(groups);
    }

    res.send(groupMap);
}