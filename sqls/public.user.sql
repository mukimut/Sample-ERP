-- Table: public.users

-- DROP TABLE public.users;

CREATE TABLE public.users
(
    userid bigint NOT NULL DEFAULT nextval('users_userid_seq'::regclass) ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 ),
    username text COLLATE pg_catalog."default" NOT NULL,
    password text COLLATE pg_catalog."default" NOT NULL,
    access smallint,
    token text COLLATE pg_catalog."default",
    displayname text COLLATE pg_catalog."default",
    department text COLLATE pg_catalog."default",
    designation text COLLATE pg_catalog."default",
    phone text COLLATE pg_catalog."default",
    email text COLLATE pg_catalog."default",
    CONSTRAINT users_pkey PRIMARY KEY (userid)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.users
    OWNER to postgres;

GRANT ALL ON TABLE public.users TO postgres;

GRANT ALL ON TABLE public.users TO samin;