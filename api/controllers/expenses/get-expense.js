module.exports = async function getExpenses(req, res) {
  const status = req.query.status;
  const user = req.query.user;
  if(status) {
    const searchObject = {approved: JSON.parse('[' + status + ']')};
    if(user) searchObject.createdby = user;
    const expenses = await Expense.find(searchObject);
    //const statusList = JSON.parse('[' + status + ']');
    // const expenses = await Expense.find({approved: statusList});
    res.send(expenses);
  }
  else {
    let filterList = [];
    let query = 'SELECT expense_id, type, project, amount, purpose, date, invoice, approved FROM public.expenses';
    let filter = ' WHERE 1=1 ';
    let added = 1;

    if(req.query.project) {
      filter += ` AND project = $` + added;
      added++;
      filterList.push(req.query.project)
    }
    if(req.query.invoice) {
      filter += ` AND invoice LIKE $` + added;
      added++;
      filterList.push('%' + req.query.invoice + '%');
    }
    if(req.query.from) {
      filter += ` AND date >= $` + added;
      added++;
      filterList.push(req.query.from);
    }
    if(req.query.from) {
      filter += ` AND date <= $` + added;
      added++;
      filterList.push(req.query.to);
    }


// console.log(query + filter);
// console.log(filterList);
    const rawResult = await sails.sendNativeQuery(query + filter, filterList);
    res.send(rawResult.rows);
  }
}