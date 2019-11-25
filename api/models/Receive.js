module.exports = {
    attributes: {
        id: {type: 'number', columnName: 'receiveid', autoIncrement: true}, 
        item: {type: 'string', allowNull: false}, itemid: {type: 'string', allowNull: false}, serial: {type: 'string'},
        date: {type: 'string', allowNull: true, columnType: 'date'}, batch: {type: 'string'}, brand: {type: 'string'}, warrenty: {type: 'string'},
        unitprice: {type: 'string', allowNull: false}, quantity: {type: 'string', allowNull: false}, unit: {type: 'string', allowNull: false},
        employee: {type: 'string'}, employeeid: {type: 'number'},
        supplier: {type: 'string'}, supplierid: {type: 'number'},
        remark: {type: 'string'}, madein: {type: 'string'}, origin: {type: 'string'}
    },
    tableName: 'productreceive'
}


/*
CREATE TABLE public.productreceive
(
    receiveid bigserial NOT NULL,
    item text NOT NULL,
    itemid integer NOT NULL,
    date date default CURRENT_DATE,
    unitprice numeric(10, 2) NOT NULL,
    quantity numeric(10, 2) NOT NULL,
    batch text,
    brand text,
    employee text,
    employeeid integer,
    serial text,
    warrenty text,
    madein text,
    origin text,
    remark text,
    unit text,
    supplier text,
    supplierid integer,
    PRIMARY KEY (receiveid)
)
WITH (
    OIDS = FALSE
);

ALTER TABLE public.productreceive
    OWNER to samin;
*/