module.exports = {
    attributes: {
        id: {type: 'number', columnName: 'userid', autoIncrement: true},
        access: {type: 'number', defaultsTo: 10},
        password: {type: 'string', required: true},
        username: {type: 'string', required: true},
        token: {type: 'string'},
        displayname: {type: 'string', required: true},
        email: {type: 'string'},
        employeeid: {type: 'number'}
    },
    tableName: 'users'
}
/*
CREATE TABLE public.users
(
    username text,
    userid bigserial NOT NULL,
    password text,
    access integer,
    token text,
    PRIMARY KEY (userid)
)
WITH (
    OIDS = FALSE
);

ALTER TABLE public.users
    OWNER to postgres;

ALTER TABLE public.users ADD COLUMN displayname text,
    ADD COLUMN email text;
    ALTER TABLE public.users
    ADD COLUMN employeeid integer;
    
    */