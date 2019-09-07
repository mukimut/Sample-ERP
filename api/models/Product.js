module.exports = {
    attributes: {
        id: {type: 'number', columnName: 'productId', autoIncrement: true},
        description: {type: 'string'},
        price: {type: 'number'},
        name: {type: 'string', required: true},
        group: {type: 'string'},
        category: {type: 'string'},
        type: {type: 'string'},
        quantity: {type: 'number', defaultsTo: 0},
        
    },
    tableName: 'products'
}

/*
CREATE TABLE public.products
(
    "productId" bigserial NOT NULL,
    name text NOT NULL,
    brand text,
    description text,
    price numeric(10, 2),
    PRIMARY KEY ("productId")
)
WITH (
    OIDS = FALSE
);

ALTER TABLE public.products
    OWNER to samin;

    ALTER TABLE public.products
    RENAME brand TO "group";

ALTER TABLE public.products
    ADD COLUMN category text;

ALTER TABLE public.products
    ADD COLUMN type text;

ALTER TABLE public.products
    ADD COLUMN quantity double precision;

*/