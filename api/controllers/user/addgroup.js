module.exports = async function addGroup(req, res) {
  const group = req.body.group;
  const pages = req.body.pages;
  const user = req.body.user;
  const newGroupName = req.body.newName;

  if(!pages && !newGroupName) {
    await Permission.create({id: group});
    res.send({status: true});
  }
  else if(group){
    const sql = `update permissions set pages = '{` + pages.join() + `}', "group" = $2 where permissions.group = $1`;
    const rawResult = await sails.sendNativeQuery(sql, [group, newGroupName]);

    res.send({status: true});
  }
  else if(user){
    const sql = `update users set pages = '{` + pages.join() + `}' where userid = $1`
    const rawResult = await sails.sendNativeQuery(sql, [user]);

    res.send({status: true});
  }
  else {
    await Permission.destroy({id: newGroupName});
    res.send({update: true});
  }
}