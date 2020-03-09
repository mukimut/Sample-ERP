module.exports = {
  attributes: {
      id: {type: 'string', columnName: 'paymentid', autoIncrement: true},
      paymenttype: {type: 'string'},
      company: {type: 'string'},
      amount: {type: 'number'},
      paymentmethod:  {type: 'string'},
      narration:  {type: 'string'},
      created:  {type: 'string'},
      bank:  {type: 'string', allowNull: true},
      brunch:  {type: 'string', allowNull: true},
      checkno:  {type: 'string', allowNull: true},
      checktype:  {type: 'string', allowNull: true},
      checkdate:  {type: 'string', allowNull: true}
      
  },
  tableName: 'payment'
}

/*
CREATE TABLE public.payment
(
    paymentid bigserial NOT NULL,
    company text,
    paymenttype text COLLATE pg_catalog."default",
    amount numeric(10,2),
    paymentmethod text COLLATE pg_catalog."default",
    narration text COLLATE pg_catalog."default",
    created date,
    bank text COLLATE pg_catalog."default",
    brunch text COLLATE pg_catalog."default",
    checkno text COLLATE pg_catalog."default",
    checktype text COLLATE pg_catalog."default",
    checkdate date,
    CONSTRAINT payment_pkey PRIMARY KEY (paymentid)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.payment
    OWNER to samin;
*/