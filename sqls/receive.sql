CREATE TABLE public.productreceive
(
    receiveid bigserial NOT NULL,
    item text NOT NULL,
    itemid integer NOT NULL,
    date date NOT NULL default CURRENT_DATE,
    unitprice numeric(10, 2) NOT NULL,
    quantity numeric(10, 2) NOT NULL,
    batch text,
    employee text,
    employeeid integer,
    remark text,
    PRIMARY KEY (receiveid)
)
WITH (
    OIDS = FALSE
);

ALTER TABLE public.productreceive
    OWNER to samin;