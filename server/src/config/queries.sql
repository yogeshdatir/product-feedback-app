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
    id uuid NOT NULL,
    name character varying(30) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT categories_pkey PRIMARY KEY (id),
    CONSTRAINT "unique category name" UNIQUE (name)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.categories
    OWNER to postgres;


-- Table: public.status

-- DROP TABLE public.status;

CREATE TABLE public.status
(
    id uuid NOT NULL,
    name character varying(30) COLLATE pg_catalog."default" NOT NULL,
    description text COLLATE pg_catalog."default",
    CONSTRAINT status_pkey PRIMARY KEY (id),
    CONSTRAINT "unique status name" UNIQUE (name)
)

TABLESPACE pg_default;

ALTER TABLE public.status
    OWNER to postgres;

COMMENT ON COLUMN public.status.description
    IS 'short description of the status';


-- Table: public.feedbacks

-- DROP TABLE public.feedbacks;

CREATE TABLE public.feedbacks
(
    id uuid NOT NULL,
    title text COLLATE pg_catalog."default" NOT NULL,
    description text COLLATE pg_catalog."default" NOT NULL,
    status uuid NOT NULL,
    category uuid NOT NULL,
    upvotes integer NOT NULL DEFAULT 0,
    CONSTRAINT feedbacks_pkey PRIMARY KEY (id),
    CONSTRAINT unique_feedback_title UNIQUE (title),
    CONSTRAINT category FOREIGN KEY (category)
        REFERENCES public.categories (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    CONSTRAINT status FOREIGN KEY (status)
        REFERENCES public.status (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
)

TABLESPACE pg_default;

ALTER TABLE public.feedbacks
    OWNER to postgres;

COMMENT ON TABLE public.feedbacks
    IS 'suggestions made by users';

COMMENT ON CONSTRAINT unique_feedback_title ON public.feedbacks
    IS 'Feedback title should be unique';

-- Table: public.users

-- DROP TABLE public.users;

CREATE TABLE public.users
(
    id uuid NOT NULL,
    name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    username character varying(50) COLLATE pg_catalog."default" NOT NULL,
    image character varying(400) COLLATE pg_catalog."default",
    CONSTRAINT users_pkey PRIMARY KEY (id),
    CONSTRAINT unique_name_for_user UNIQUE (name),
    CONSTRAINT unique_username UNIQUE (username)
)

TABLESPACE pg_default;

ALTER TABLE public.users
    OWNER to postgres;

COMMENT ON TABLE public.users
    IS 'users in the system';

COMMENT ON CONSTRAINT unique_name_for_user ON public.users
    IS 'Names of the users should be unique. Duplicate users are not allowed.';
COMMENT ON CONSTRAINT unique_username ON public.users
    IS 'Usernames should be unique. Duplicate usernames are not allowed.';


-- Table: public.comments

-- DROP TABLE public.comments;

CREATE TABLE public.comments
(
    id uuid NOT NULL,
    content text COLLATE pg_catalog."default" NOT NULL,
    "user" uuid NOT NULL,
    "parentFeedback" uuid NOT NULL,
    CONSTRAINT comments_pkey PRIMARY KEY (id),
    CONSTRAINT parent_feedback FOREIGN KEY ("parentFeedback")
        REFERENCES public.feedbacks (id) MATCH SIMPLE
        ON UPDATE SET NULL
        ON DELETE SET NULL
        NOT VALID,
    CONSTRAINT "user" FOREIGN KEY ("user")
        REFERENCES public.users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE public.comments
    OWNER to postgres;

COMMENT ON TABLE public.comments
    IS 'Comments by users on feedbacks';
-- Index: fki_parent_feedback

-- DROP INDEX public.fki_parent_feedback;

CREATE INDEX fki_parent_feedback
    ON public.comments USING btree
    ("parentFeedback" ASC NULLS LAST)
    TABLESPACE pg_default;


-- Table: public.replies

-- DROP TABLE public.replies;

CREATE TABLE public.replies
(
    id uuid NOT NULL,
    content text COLLATE pg_catalog."default" NOT NULL,
    "replyingTo" uuid NOT NULL,
    "user" uuid NOT NULL,
    "parentComment" uuid NOT NULL,
    CONSTRAINT replies_pkey PRIMARY KEY (id),
    CONSTRAINT owner_user FOREIGN KEY ("user")
        REFERENCES public.users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT parent_comment FOREIGN KEY ("parentComment")
        REFERENCES public.comments (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "replyingTo_user" FOREIGN KEY ("replyingTo")
        REFERENCES public.users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE public.replies
    OWNER to postgres;

COMMENT ON TABLE public.replies
    IS 'Replies to comments';

COMMENT ON CONSTRAINT owner_user ON public.replies
    IS 'owner of this reply';
COMMENT ON CONSTRAINT parent_comment ON public.replies
    IS 'parent comment for this reply';
COMMENT ON CONSTRAINT "replyingTo_user" ON public.replies
    IS 'user this reply targets';