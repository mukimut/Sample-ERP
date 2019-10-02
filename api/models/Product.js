module.exports = {
    attributes: {
        id: {type: 'number', columnName: 'productId', autoIncrement: true},
        description: {type: 'string'},
        name: {type: 'string', required: true},
        group: {type: 'string'},
        category: {type: 'string'},
        type: {type: 'string'},
        
    },
    tableName: 'products'
}

/*

*/