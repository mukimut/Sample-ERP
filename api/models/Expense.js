module.exports = {
    attributes: {
        id: {type: 'number', columnName: 'expense_id', autoIncrement: true}, invoice: {type: 'string'},
        type: {type: 'string', required: true}, project: {type: 'string', required: true},
        purpose: {type: 'string'},
        customer: {type: 'string'}, customerid: {type: 'number'},
        supplier: {type: 'string'}, supplierid: {type: 'number'},
        amount: {type: 'number'},
        date: {type: 'string', allowNull: true, columnType: 'date'}
    },
    tableName: 'expenses'
}

/*
CREATE TABLE public.expenses
(
    expense_id bigserial NOT NULL,
    type text,
    project text,
    customer text,
    purpose text,
    customerid integer,
    supplier text,
    supplierid text,
    amount numeric(8, 2),
    date date,
    PRIMARY KEY (expense_id)
)
WITH (
    OIDS = FALSE
);

ALTER TABLE public.expenses
    OWNER to samin;
    */