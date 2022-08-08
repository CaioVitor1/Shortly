--
-- PostgreSQL database dump
--

-- Dumped from database version 12.11 (Ubuntu 12.11-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.11 (Ubuntu 12.11-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: sessions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sessions (
    id integer NOT NULL,
    token text NOT NULL,
    "userId" integer NOT NULL
);


ALTER TABLE public.sessions OWNER TO postgres;

--
-- Name: sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.sessions_id_seq OWNER TO postgres;

--
-- Name: sessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.sessions_id_seq OWNED BY public.sessions.id;


--
-- Name: urls; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.urls (
    id integer NOT NULL,
    "shortUrl" text NOT NULL,
    url text NOT NULL,
    "userId" integer NOT NULL,
    visits integer DEFAULT 0,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.urls OWNER TO postgres;

--
-- Name: urls_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.urls_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.urls_id_seq OWNER TO postgres;

--
-- Name: urls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.urls_id_seq OWNED BY public.urls.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: sessions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sessions ALTER COLUMN id SET DEFAULT nextval('public.sessions_id_seq'::regclass);


--
-- Name: urls id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.urls ALTER COLUMN id SET DEFAULT nextval('public.urls_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sessions (id, token, "userId") FROM stdin;
1	eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1OTcxNjE0MCwiZXhwIjoxNjYyMzA4MTQwfQ.P23I72uAKLWryHlxYD3tECHoPujb2Hm8lXQTNVkrrqU	1
2	eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTY1OTgxMzk5NCwiZXhwIjoxNjYyNDA1OTk0fQ.BG2VWqqqObkRESqpJiAw6eso9zYmh4z2jSnxx_YFngk	2
3	eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImlhdCI6MTY1OTgxNzAxNSwiZXhwIjoxNjYyNDA5MDE1fQ.GoarHUWQu4ZCm3_9GYJjh1UjaGb6HnY9SlNukm_61eI	3
\.


--
-- Data for Name: urls; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.urls (id, "shortUrl", url, "userId", visits, "createdAt") FROM stdin;
3	H8RoiS345h	https://www.google.com/	1	2	2022-08-05 16:19:20.073422
2	PdwAtk7uRa	https://vasco.com.br/	1	1	2022-08-05 16:18:59.24426
4	T6nkZ3l3Pi	https://www.paramore.com.br/	2	0	2022-08-06 16:50:36.541861
5	C9DsT501ut	https://www.tuasaude.com/	3	1	2022-08-06 17:17:50.998295
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, name, email, password, "createdAt") FROM stdin;
1	Caio Vitor	caiovitor@hotmail.com	$2b$10$DPnTGd.ISU4p95.7Rc0U2u.lfcj3WzXAjUL1yo9cMB2UoAA4YUHJq	2022-08-05 13:15:28.859988
2	Marina	marina@hotmail.com	$2b$10$.s9zPLgaR05AtS90zFQMpeK728E6LToaHylYmURbuSJsBKO2w8Chi	2022-08-06 16:26:17.479963
3	Marly	marly@hotmail.com	$2b$10$.g4cweMcplORwkUeAk4D/ekGJpIY4fDC1/6Iqu3m9Rn4mEkFmMNPC	2022-08-06 17:16:32.582457
4	Marly4	marly4@hotmail.com	$2b$10$uHvb8Kp0CtsqcL0vJQydcuIkXdJLslG2Uic.z/ySNtQQUhmR9TySy	2022-08-06 17:21:30.773616
5	Marly4	marly5@hotmail.com	$2b$10$bgH7fP5wTHPUqn/a1UZJK.nYnHu7qCCZlXKOEnipo.XSDGs9M/ZDK	2022-08-06 17:21:34.331457
6	Marly4	marly6@hotmail.com	$2b$10$AAVnrWjomaMfmIUiTEFZeOLJGqBNexs5/d5TtLM7NrSx9FlLKK2FO	2022-08-06 17:21:37.447928
7	Marly4	marly7@hotmail.com	$2b$10$u30N7ogu/KT1sJEHbB.QjOaj69cj0839PN6SBly8pXU42zPOruBAS	2022-08-06 17:21:40.358805
8	Marly4	marly8@hotmail.com	$2b$10$ScM51VCXqTAMu2wToSLTGONMNYMMryP9HNwU0xPC9VBAO7OAigHzu	2022-08-06 17:21:44.204334
9	Marly4	marly9@hotmail.com	$2b$10$oMNtyaEwxvHlNhRmckxJgu9cxH7/GtdgGSD9TMjgse6reYLKXI5pu	2022-08-06 17:21:48.510291
10	Marly4	marly10@hotmail.com	$2b$10$9bTa38x5l62HEDafof8zkOuFKJPnLU.RuuC1thTic9A3j6obzE5/K	2022-08-06 17:21:52.133909
11	Marly4	marly11@hotmail.com	$2b$10$GPMYPDqbsHbtduUO.gUnkOp/tKmBj7S0KKdUPWPVsgfAzbffxVyW2	2022-08-06 17:21:55.74315
\.


--
-- Name: sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.sessions_id_seq', 3, true);


--
-- Name: urls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.urls_id_seq', 5, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 11, true);


--
-- Name: sessions sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);


--
-- Name: urls urls_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: sessions sessions_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT "sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: urls urls_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT "urls_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

