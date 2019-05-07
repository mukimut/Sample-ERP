module.exports = {
    attributes: {
        id: {type: 'number', columnName: 'userid', autoIncrement: true},
        access: {type: 'number', defaultsTo: 10},
        password: {type: 'string', required: true},
        username: {type: 'string', required: true},
        token: {type: 'string'}
    },
    tableName: 'users'
}