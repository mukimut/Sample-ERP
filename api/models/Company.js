module.exports = {
	attributes: {
		id: {type: 'number', columnName: 'companyid', autoIncrement: true},
		name: {type: 'string', required: true},
		shortname: {type: 'string', required: true},
		phone: {type: 'string'},
		companytype: {type: 'string'},
		email: {type: 'string'},
		website: {type: 'string'},
		address: {type: 'json'},
		companytype: {type: 'string'},
		tin: {type: 'string'},
		contact: {type: 'json'}
},
tableName: 'company'
}


/*
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO www;

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

ALTER TABLE public.company DROP COLUMN address;

ALTER TABLE public.company
    ADD COLUMN address jsonb;

ALTER TABLE public.company
	ADD COLUMN contact jsonb;
ALTER TABLE public.company DROP COLUMN mobile;
ALTER TABLE public.company DROP COLUMN district;
ALTER TABLE public.company DROP COLUMN postcode;
ALTER TABLE public.company
    RENAME lca TO tin;
*/