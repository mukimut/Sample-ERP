module.exports = {
  attributes: {
      id: {type: 'string', columnName: 'group', required: true},
      pages: {type: 'json'}
      
  },
  tableName: 'permissions'
}

/*
CREATE TABLE public.permissions
(
    "group" text NOT NULL,
    pages text[],
    PRIMARY KEY ("group")
)
WITH (
    OIDS = FALSE
);

ALTER TABLE public.permissions
    OWNER to samin;
*/