-- Table: public.company

-- DROP TABLE public.company;

CREATE TABLE public.company
(
    companyid bigint NOT NULL DEFAULT nextval('company_companyid_seq'::regclass) ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 ),
    name text COLLATE pg_catalog."default",
    shortname text COLLATE pg_catalog."default",
    phone text COLLATE pg_catalog."default",
    email text COLLATE pg_catalog."default",
    website text COLLATE pg_catalog."default",
    companytype text COLLATE pg_catalog."default",
    tin text COLLATE pg_catalog."default",
    address jsonb,
    contact jsonb,
    CONSTRAINT company_pkey PRIMARY KEY (companyid)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.company
    OWNER to postgres;

GRANT ALL ON TABLE public.company TO postgres;

GRANT ALL ON TABLE public.company TO samin;