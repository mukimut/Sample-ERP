module.exports = async function getExpenses(req, res) {
  const status = req.query.status;
  const statusList = JSON.parse('[' + status + ']');
  const expenses = await Expense.find({approved: statusList});
  res.send(expenses);
}