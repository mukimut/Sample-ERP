module.exports = async function setValues(req, res) {
    const type = req.body.type;
    const value = req.body.value;
    const data = JSON.stringify(req.body.data);
    const sql = `update public.tov set map = jsonb_set(map, '{`+value+`}', '`+data+`', false) where valuetype = $1;`;
    await sails.sendNativeQuery(sql, [type]);
    res.send(true);
}

/*
update public.tov set map = jsonb_set(map, '{Admin}', '[{"designations": "Assistant"}, {"designations": "Worker"}]', false) 
where valuetype = 'departments'; 
*/