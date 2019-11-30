module.exports = async function saveExpense(req, res) {
  const id = req.body.id;

  if(!id) {
    await Expense.create(req.body);
    res.send({update: true});
  }
}