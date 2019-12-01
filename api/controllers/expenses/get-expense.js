module.exports = async function getExpenses(req, res) {
  console.log(req.query);
  const expenses = await Expense.find();
  res.send(expenses);
}