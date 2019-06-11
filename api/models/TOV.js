module.exports = {
	attributes: {
			id: {type: 'string', columnName: 'valuetype', required: true},
			values: {type: 'json', columnType: 'text[]'}
	},
	tableName: 'tov'
}

/*
CREATE TABLE public.tov
(
    valuetype text NOT NULL,
    "values" text[],
    "map" jsonb,
    PRIMARY KEY (valuetype)
)
WITH (
    OIDS = FALSE
);

ALTER TABLE public.tov
    OWNER to postgres;

GRANT ALL ON TABLE public.tov TO samin;
*/