module.exports = async function getExpenses(req, res) {
  const project = req.query.project;
  const expenses = await Expense.find({project: project});
  res.send(expenses);
}