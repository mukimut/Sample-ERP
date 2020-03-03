module.exports = {
  attributes: {
      id: {type: 'string', columnName: 'paymentid', required: true},
      paymenttype: {type: 'string'},
      amount: {type: 'number'},
      paymentmethod:  {type: 'string'},
      narration:  {type: 'string'},
      created:  {type: 'string'},
      bank:  {type: 'string'},
      brunch:  {type: 'string'},
      checkno:  {type: 'string'},
      checktype:  {type: 'string'},
      checkdate:  {type: 'string'}
      
  },
  tableName: 'payment'
}