module.exports = {
    attributes: {
        id: {type: 'number', columnName: 'productId', autoIncrement: true},
        description: {type: 'string'},
        price: {type: 'number'},
        name: {type: 'string', required: true},
        brand: {type: 'string'},
        
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

*/