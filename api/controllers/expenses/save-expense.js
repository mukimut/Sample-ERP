module.exports = async function saveExpense(req, res) {
  const id = req.body.id;
  const data = req.body.data;

  if(!id) {
    let serial;
    const year = new Date().getFullYear();
    const sql = `SELECT invoice FROM expenses where invoice like '%` + year + `' ORDER BY expense_id DESC LIMIT 1`;
    const rawResult = await sails.sendNativeQuery(sql, []);
    
    if(rawResult.rowCount === 0) serial = 1;
    else {
        const batch = rawResult.rows[0].invoice;
        serial = Number.parseInt(batch.substring(4, 8)) + 1;
    }

    let serialString = serial + '';
    let length = 4 - serialString.length;
    for(let i=0; i < length; i++) {
        serialString = '0' + serialString;
    }

    length = data.length;
    for(let i=0; i < length; i++) {
        const element = data[i];          
        element.invoice = 'EXP-' + serialString + '/' + year;
        await Expense.create(element);
    };
    res.send({update: true});
  }
  else {
    await Expense.update({id: id}).set(req.body.data);
    res.send({update: true});
  }
}