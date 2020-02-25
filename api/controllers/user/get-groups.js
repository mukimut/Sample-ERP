module.exports = async function getGroups(req, res) {
  const groups = await Permission.find();
  res.send(groups);

}