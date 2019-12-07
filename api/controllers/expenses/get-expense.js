module.exports = async function getExpenses(req, res) {
  const status = req.query.status;
  const expenses = await Expense.find({approved: status});
  res.send(expenses);
}