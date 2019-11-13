module.exports = {
    attributes: {
        id: {type: 'number', columnName: 'productId', autoIncrement: true},
        description: {type: 'string'},
        name: {type: 'string', required: true},
        group: {type: 'string'},
        category: {type: 'string'},
        type: {type: 'string'},
        unit: {type: 'string'}
        
    },
    tableName: 'products'
}

/*
CREATE TABLE public.products
(
    "productId" bigint NOT NULL DEFAULT nextval('"product_productId_seq"'::regclass) ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 ),
    name text COLLATE pg_catalog."default" NOT NULL,
    description text COLLATE pg_catalog."default",
    "group" text COLLATE pg_catalog."default",
    category text COLLATE pg_catalog."default",
    type text COLLATE pg_catalog."default",
    unit text
    CONSTRAINT product_pkey PRIMARY KEY ("productId")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.products
    OWNER to samin;
*/