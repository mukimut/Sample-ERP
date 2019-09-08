module.exports = {
	attributes: {
            id: {type: 'string', columnName: 'valuetype', required: true},
            displayname: {type: 'string'},
            values: {type: 'json', columnType: 'text[]'},
            map: {type: 'json', columnType: 'jsonb'}
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

ALTER TABLE public.tov
    ADD COLUMN displayname text;
*/