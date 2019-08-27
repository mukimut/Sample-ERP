-- Table: public.tov

-- DROP TABLE public.tov;

CREATE TABLE public.tov
(
    valuetype text COLLATE pg_catalog."default" NOT NULL,
    "values" text[] COLLATE pg_catalog."default",
    map jsonb
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.tov
    OWNER to postgres;

GRANT ALL ON TABLE public.tov TO postgres;

GRANT ALL ON TABLE public.tov TO samin;