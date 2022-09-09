--
-- PostgreSQL database dump
--

-- Dumped from database version 14.4 (Ubuntu 14.4-1.pgdg20.04+1)
-- Dumped by pg_dump version 14.4 (Ubuntu 14.4-1.pgdg20.04+1)

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

--
-- Name: type; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.type AS ENUM (
    'debit',
    'credit',
    'debitAndCredit'
);


ALTER TYPE public.type OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO postgres;

--
-- Name: cards; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cards (
    id integer NOT NULL,
    number text NOT NULL,
    name text NOT NULL,
    cvc text NOT NULL,
    "expirationDate" text NOT NULL,
    password text NOT NULL,
    "isVirtual" boolean NOT NULL,
    type public.type NOT NULL,
    title text NOT NULL,
    "userId" integer NOT NULL
);


ALTER TABLE public.cards OWNER TO postgres;

--
-- Name: cards_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.cards_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.cards_id_seq OWNER TO postgres;

--
-- Name: cards_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.cards_id_seq OWNED BY public.cards.id;


--
-- Name: credentials; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.credentials (
    id integer NOT NULL,
    url text NOT NULL,
    username text NOT NULL,
    password text NOT NULL,
    title text NOT NULL,
    "userId" integer NOT NULL
);


ALTER TABLE public.credentials OWNER TO postgres;

--
-- Name: credentials_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.credentials_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.credentials_id_seq OWNER TO postgres;

--
-- Name: credentials_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.credentials_id_seq OWNED BY public.credentials.id;


--
-- Name: safeNotes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."safeNotes" (
    id integer NOT NULL,
    title text NOT NULL,
    note text NOT NULL,
    "userId" integer NOT NULL
);


ALTER TABLE public."safeNotes" OWNER TO postgres;

--
-- Name: safeNotes_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."safeNotes_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."safeNotes_id_seq" OWNER TO postgres;

--
-- Name: safeNotes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."safeNotes_id_seq" OWNED BY public."safeNotes".id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    email text NOT NULL,
    password text NOT NULL
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
-- Name: wifis; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.wifis (
    id integer NOT NULL,
    name text NOT NULL,
    password text NOT NULL,
    title text NOT NULL,
    "userId" integer NOT NULL
);


ALTER TABLE public.wifis OWNER TO postgres;

--
-- Name: wifis_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.wifis_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.wifis_id_seq OWNER TO postgres;

--
-- Name: wifis_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.wifis_id_seq OWNED BY public.wifis.id;


--
-- Name: cards id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cards ALTER COLUMN id SET DEFAULT nextval('public.cards_id_seq'::regclass);


--
-- Name: credentials id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.credentials ALTER COLUMN id SET DEFAULT nextval('public.credentials_id_seq'::regclass);


--
-- Name: safeNotes id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."safeNotes" ALTER COLUMN id SET DEFAULT nextval('public."safeNotes_id_seq"'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Name: wifis id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.wifis ALTER COLUMN id SET DEFAULT nextval('public.wifis_id_seq'::regclass);


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
13891922-b7a2-443d-8c45-c2a2c59fb91a	d3c295c29a2a6d1cb0d298a62f5f25292d650628327d2debd9e878408b5da398	2022-09-07 15:53:44.562198-03	20220907185344_adding_tables_for_databse	\N	\N	2022-09-07 15:53:44.458817-03	1
cc8401dd-59a3-4703-98e3-c93518f234f9	f4450d6954810183e443773213df122dac0967e7e94d444c30f4ec1bab4a9587	2022-09-07 15:55:37.850077-03	20220907185537_tables_for_database	\N	\N	2022-09-07 15:55:37.454753-03	1
\.


--
-- Data for Name: cards; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cards (id, number, name, cvc, "expirationDate", password, "isVirtual", type, title, "userId") FROM stdin;
1	6348972348654321	BIA	5d6b10f9ccfd6c780d2d101b6a352bd8604c12156f264d3be0d6f457b16db7ad6e73f8785ac4f94613ff78e4b65f2e54898adffabda7d75442f68032cf8f2c6baa060d812a12c019a78ad0c72978dc52556e474208f0abb4143e5d4e2a9e37c0178843	02/2022	f5ed90bd3bfc36de3e83eefa22f49c8e2e3382f988334cc1097455febbb6b7f2f6b15b741335c7c4701d512490b63d082066e707dc9109e7733e0d176879239a7daf47c65fbdd6b9db14283568374986990c14adc058785dcf4d3b6e77fbad23325e0271	f	credit	cartão nubank	1
\.


--
-- Data for Name: credentials; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.credentials (id, url, username, password, title, "userId") FROM stdin;
1	https://web.whatsapp.com/	bia	846e93851c785be0510de55da8eb51bf2a9669c069d5bbb0a09072670bb1b6e0990164234e739a819ebf6f2a6d2ec887baf1abaec88e3ae43723bfabd95d88f1b6bc6bb2e4f9fa32a371c5d6fdf403d96638fdd852227aa2bc085832dd06382b5429fbe6	teste	1
2	https://github.com/	bia	d97de1dc6615bd822d3ee2b3c7ae76b606e9a5daaf989d717a4c0fbb2fbad1cdd10260727750e2cc1d3b48a3500cf748db81c293be0f65e1e65c895215e7dccb5a3b5c47b1f0e563ea63a933ee63525ac0bfb84b8275abb62604b5c9a371cdf22a227cca	github	1
4	https://github.com/	bia	c5b691a13e5c1bf6169f79b3b72de8f9b93963e15bdc0705996cdb1e60a7c3b171fe778710876dda747aafef745c6a42a6757ca7d1d8e9a441d900c56d41c6c79498bcb469e98a3f57d6fa59705b3087d742bd9cee7f21bf8f4cb24245c15c5d3c99d2a1	github2	5
\.


--
-- Data for Name: safeNotes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."safeNotes" (id, title, note, "userId") FROM stdin;
1	JWT (JSON Web Tokens) Errors	Errors are the best especially when they are written in a way where you become a decipherer. I remember the good old days when all the error codes I got were only numbers and maybe letters mixed in and there wasn’t any online searching to easly get interpretations.	1
3	Notas seguras	A aplicação deve permitir que uma nota segura seja deletada (dado o seu id). Se o id não existir ou pertencer a nota segura de outras pessoas, a aplicação deve avisar.	5
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, email, password) FROM stdin;
1	beatriz@gmail.com	$2b$10$taqDRtkll.tzQY/IHSfKJuv..5ddxDz91ksctVCQju0msA/3/Gmve
2	bia@gmail.com	$2b$10$OdM0BtDAdJ6opVTUad/G3eTYj5D1gedQY0N1FgzoO/G8bY25CQdQG
3	coca@gmail.com	$2b$10$J.h3Ekrz3zngBgmbJj6kMe.i3.l3OKGAW4HodRQuWBQwdfP96SisS
4	b@gmail.com	$2b$10$5yG.2maGCN8DqhHDJHpHjefsP2pmSARXv6zX4G0v8L73ZEuJF/8Ni
5	quinta@gmail.com	$2b$10$h60BcbWaohEIzv.MVQC26O7Vt8FKTq00vooCz9RA/xMJVF7W/k9BO
6	sexta@gmail.com	$2b$10$CUvXV0zuIkQOpF7XtEUP.ecNwq5FdsUXd.DtN67Euw8RsRItWGtI.
\.


--
-- Data for Name: wifis; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.wifis (id, name, password, title, "userId") FROM stdin;
1	BIA	d5d62b963fe9d5423b69b87c54bfd443023ccf992ff5c73d41e4069eacbbcc0caa6ca5e154dbbd035cf1659a5e548c7e7945699b86d9fd813d63cb36e7d78ac5a85aa5b8bbb6bf31e8f53321e569e2c243bbad01de14d9622520e87c73de165ce1f2ab41	cartão nubank	1
3	wifi da vizinha	a218f52faf34ad9a7364d4a405d7735f3e3b78dd0343ae06b0253ae1709d14082e8eee75fe371ec8c35fb60d801e6c3657fbd04e8bb453640fddaf59ba48cd0e7a415a97aca974b7e5fbe84c58ee482c41d9aea1a477e556816a63487467b2ad20f46367	vizinha	5
4	wifi da vizinha	d4dc61d38f935c80e10aed01487c37032f3feed2d93c8f075674bfdf2f5eee7cf236f53b1e2c3a4209b777e8bf2e5e3523fcde0af879e8141e16ffce8a382bfc7b321a3bf5744365215088a6dec86b44e28422ecd2e875d3af9c2f49495ca5832051b80c	vizinha	5
5	wifi da vizinha	3a89bf7028758b8cd70f9bb87062a2451d745c3a6c433d4ad8071d926d57e683f1e64e883cbaa45401337fc7c46cbfb6fb037e2e2ab40a5a63827e444cc49083d4b487fb85afa81b394d14e51284dfcdb2c24a20ae2d4cb4129d9dabed0b1de8ea36af07	vizinha	5
\.


--
-- Name: cards_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cards_id_seq', 3, true);


--
-- Name: credentials_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.credentials_id_seq', 4, true);


--
-- Name: safeNotes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."safeNotes_id_seq"', 3, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 6, true);


--
-- Name: wifis_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.wifis_id_seq', 5, true);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: cards cards_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cards
    ADD CONSTRAINT cards_pkey PRIMARY KEY (id);


--
-- Name: credentials credentials_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.credentials
    ADD CONSTRAINT credentials_pkey PRIMARY KEY (id);


--
-- Name: safeNotes safeNotes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."safeNotes"
    ADD CONSTRAINT "safeNotes_pkey" PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: wifis wifis_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.wifis
    ADD CONSTRAINT wifis_pkey PRIMARY KEY (id);


--
-- Name: cards_title_userId_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "cards_title_userId_key" ON public.cards USING btree (title, "userId");


--
-- Name: credentials_title_userId_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "credentials_title_userId_key" ON public.credentials USING btree (title, "userId");


--
-- Name: safeNotes_title_userId_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "safeNotes_title_userId_key" ON public."safeNotes" USING btree (title, "userId");


--
-- Name: cards cards_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cards
    ADD CONSTRAINT "cards_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: credentials credentials_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.credentials
    ADD CONSTRAINT "credentials_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: safeNotes safeNotes_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."safeNotes"
    ADD CONSTRAINT "safeNotes_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: wifis wifis_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.wifis
    ADD CONSTRAINT "wifis_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- PostgreSQL database dump complete
--

