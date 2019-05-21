module.exports = {
	attributes: {
		id: {type: 'number', columnName: 'companyid', autoIncrement: true},
		name: {type: 'string', required: true},
		shortname: {type: 'string', required: true},
		phone: {type: 'string'},
		mobile: {type: 'string'},
		email: {type: 'string'},
		website: {type: 'string'},
		address: {type: 'string'},
		district: {type: 'string'},
		companytype: {type: 'string'},
		postcode: {type: 'number'},
		lca: {type: 'string'},
},
tableName: 'company'
}


/*
CREATE TABLE public.company
(
    companyid bigserial,
    name text,
    shortname text,
	phone text,
	mobile text,
	email text,
	website text,
	address text,
	district text,
	companytype text,
	postcode int,
	lca text,
    PRIMARY KEY (companyid)
)
WITH (
    OIDS = FALSE
);

ALTER TABLE public.company
    OWNER to postgres;

GRANT ALL ON TABLE public.company TO samin;
*/