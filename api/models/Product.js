module.exports = {
    attributes: {
        id: {type: 'number', columnName: 'productId', autoIncrement: true},
        quantity: {type: 'number'},
        price: {type: 'number'},
        name: {type: 'string', required: true},
        unit: {type: 'string', required: true},
        
    },
    tableName: 'product'
}

/*
CREATE TABLE public.product
(
    "productId" bigint NOT NULL DEFAULT nextval('"product_productId_seq"'::regclass),
    name text COLLATE pg_catalog."default",
    unit text COLLATE pg_catalog."default",
    quantity numeric,
    price money,
    CONSTRAINT product_pkey PRIMARY KEY ("productId")
)
WITH (
    OIDS = FALSE
)

ALTER TABLE public.product
    ALTER COLUMN price TYPE numeric (10, 2);

*/