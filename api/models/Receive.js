module.exports = {
    attributes: {
        id: {type: 'number', columnName: 'receiveid', autoIncrement: true}, 
        item: {type: 'string', allowNull: false}, itemid: {type: 'string', allowNull: false},
        date: {type: 'string'}, batch: {type: 'string'}, brand: {type: 'string'},
        unitprice: {type: 'string', allowNull: false}, quantity: {type: 'string', allowNull: false}, unit: {type: 'string', allowNull: false},
        employee: {type: 'string'}, employeeid: {type: 'number'},
        remark: {type: 'string'}
    },
    tableName: 'productreceive'
}


/*
CREATE TABLE public.productreceive
(
    receiveid bigserial NOT NULL,
    item text NOT NULL,
    itemid integer NOT NULL,
    date date NOT NULL default CURRENT_DATE,
    unitprice numeric(10, 2) NOT NULL,
    quantity numeric(10, 2) NOT NULL,
    batch text,
    brand text,
    employee text,
    employeeid integer,
    remark text,
    unit text,
    PRIMARY KEY (receiveid)
)
WITH (
    OIDS = FALSE
);

ALTER TABLE public.productreceive
    OWNER to samin;
*/