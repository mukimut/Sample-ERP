module.exports = async function getExpenses(req, res) {
  const expenses = await Expense.find();
  res.send(expenses);
}