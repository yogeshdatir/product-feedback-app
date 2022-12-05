-- Database: feedback_app

-- DROP DATABASE IF EXISTS feedback_app;

CREATE DATABASE feedback_app
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_India.1252'
    LC_CTYPE = 'English_India.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

-- Table: public.categories

-- DROP TABLE IF EXISTS public.categories;

CREATE TABLE IF NOT EXISTS public.categories
(
    id character varying(50)[] COLLATE pg_catalog."default" NOT NULL,
    name character varying(30)[] COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT categories_pkey PRIMARY KEY (id),
    CONSTRAINT "unique category name" UNIQUE (name)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.categories
    OWNER to postgres;


-- Table: public.status

-- DROP TABLE IF EXISTS public.status;

CREATE TABLE IF NOT EXISTS public.status
(
    id character varying(50)[] COLLATE pg_catalog."default" NOT NULL,
    name character varying(30)[] COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT status_pkey PRIMARY KEY (id),
    CONSTRAINT "unique status name" UNIQUE (name)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.status
    OWNER to postgres;


-- Table: public.feedbacks

-- DROP TABLE IF EXISTS public.feedbacks;

CREATE TABLE IF NOT EXISTS public.feedbacks
(
    id character varying(50)[] COLLATE pg_catalog."default" NOT NULL,
    title character varying(100)[] COLLATE pg_catalog."default" NOT NULL,
    detail text COLLATE pg_catalog."default" NOT NULL,
    category character varying[] COLLATE pg_catalog."default" NOT NULL,
    status character varying[] COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT feedbacks_pkey PRIMARY KEY (id),
    CONSTRAINT category FOREIGN KEY (category)
        REFERENCES public.categories (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
        NOT VALID,
    CONSTRAINT status FOREIGN KEY (status)
        REFERENCES public.status (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.feedbacks
    OWNER to postgres;