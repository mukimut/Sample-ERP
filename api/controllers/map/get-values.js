module.exports = async function getValues(req, res) {
    const type = req.query.type;
    const value = req.query.value;

    const sql = `select map -> $2 as valueList from public.tov where valuetype = $1;`;
    const rawResult = await sails.sendNativeQuery(sql, [type, value]);
    if(rawResult.rows[0].valuelist) res.send(rawResult.rows[0].valuelist);
    else res.send(false);
}

/*
--update public.tov set map = '{"Admin": [{"designations": "Manager"}]}' where valuetype = 'departments';
--select map -> 'Admin' as valueList from public.tov where valuetype = 'departments';
update public.tov set map = jsonb_set(map, '{Admin}', '[{"designations": "Assistant"}, {"designations": "Worker"}]', false) where valuetype = 'departments'; 

--jsonb_set('[{"f1":1,"f2":null},2,null,3]', '{0,f1}','[2,3,4]', false)
*/