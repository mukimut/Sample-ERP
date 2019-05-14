module.exports = {
	attributes: {
			id: {type: 'string', columnName: 'valuetype', required: true},
			values: {type: 'json', columnType: 'text[]'}
	},
	tableName: 'tov'
}