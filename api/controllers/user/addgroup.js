module.exports = async function addGroup(req, res) {
  const group = req.body.group;
  const pages = req.body.pages;
  const user = req.body.user

  if(!pages) {
    await Permission.create({id: group});
    res.send({status: true});
  }
  else if(group){
    const sql = `update permissions set pages = '{` + pages.join() + `}' where permissions.group = $1`
    const rawResult = await sails.sendNativeQuery(sql, [group]);

    res.send({status: true});
  }
  else {
    const sql = `update users set pages = '{` + pages.join() + `}' where userid = $1`
    const rawResult = await sails.sendNativeQuery(sql, [user]);

    res.send({status: true});
  }
}