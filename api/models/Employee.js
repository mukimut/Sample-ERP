module.exports = {
    attributes: {
        id: {type: 'number', columnName: 'employeeid', autoIncrement: true}, userid: {type: 'number', allowNull: true},
        firstname: {type: 'string'}, middlename: {type: 'string'}, lastname: {type: 'string'},
        mother: {type: 'string'}, father: {type: 'string'}, relationship: {type: 'string'},
        religion: {type: 'string'},blood: {type: 'string'},gender: {type: 'string'},
        tin: {type: 'string'},passport: {type: 'string'},license: {type: 'string'},nid: {type: 'string'},
        birthday: {type: 'string', columnType: 'date'},licensedate: {type: 'string', columnType: 'date', defaultsTo: '2000-01-01'},
        phone: {type: 'string'}, email: {type: 'string'}
    },
    tableName: 'employee'
}


/*
CREATE TABLE public.employee
(
    employeeid bigserial NOT NULL,
    userid integer,
    firstname text,middlename text,lastname text,
	father text, mother text,
	gender text, relationship text, religion text, blood text, nationality text,
	license text, passport text, tin text, nid text, phone text, email text
    birthday date, licensedate date,
    PRIMARY KEY (employeeid)
)
WITH (
    OIDS = FALSE
);

ALTER TABLE public.employee
    OWNER to samin;
*/