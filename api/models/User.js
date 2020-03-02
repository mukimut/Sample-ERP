module.exports = {
    attributes: {
        id: {type: 'number', columnName: 'userid', autoIncrement: true},
        department: {type: 'string'}, designation: {type: 'string'},
        password: {type: 'string', required: true},
        username: {type: 'string', required: true},
        token: {type: 'string'},
        displayname: {type: 'string', required: true},
        email: {type: 'string'},
        employeeid: {type: 'number'}, pages: {type: 'json'}
    },
    tableName: 'users'
}
/*
CREATE TABLE public.users
(
    username text,
    userid bigserial NOT NULL,
    password text,
    token text,
    department text,
    designation text,
    pages text[],
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