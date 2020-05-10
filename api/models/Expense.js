module.exports = {
    attributes: {
        id: {type: 'number', columnName: 'expense_id', autoIncrement: true}, invoice: {type: 'string'},
        type: {type: 'string', required: true}, project: {type: 'string', required: true},
        purpose: {type: 'string'},
        customer: {type: 'string'}, customerid: {type: 'number'},
        supplier: {type: 'string'}, supplierid: {type: 'number'},
        amount: {type: 'number'},
        date: {type: 'string', allowNull: true, columnType: 'date'},
        createdby: {type: 'number'}, department: {type: 'string'},
        approved: {type: 'number', defaultsTo: 0}
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
    approved smallint,
    createdby integer,
    department text,
    PRIMARY KEY (expense_id)
)
WITH (
    OIDS = FALSE
);

ALTER TABLE public.expenses
    OWNER to samin;


---------------------------------------------

statuses

switch(element.approved) {
					case 0: addCell(row, 'Waiting for Approval');
						break;
					case 1: addCell(row, 'Approved By Department Head');
						break;
					case 2: addCell(row, 'Rejected by Department Head');
						break;
					case 3: addCell(row, 'Approved by Management');
						break;
					case 4: addCell(row, 'Rejected by Management');
						break;
					case 5: const cell = row.insertCell();
						cell.innerHTML = '<button onclick="varifyExpense(' + index + ', 6)">Varify</button>';
						break;
				}
    */