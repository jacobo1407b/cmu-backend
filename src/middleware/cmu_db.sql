--
-- PostgreSQL database dump
--

-- Dumped from database version 13.4
-- Dumped by pg_dump version 13.4

-- Started on 2021-10-13 13:07:07

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
-- TOC entry 209 (class 1259 OID 24626)
-- Name: administrador; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.administrador (
    id_admin integer NOT NULL,
    id_usuario integer NOT NULL
);


ALTER TABLE public.administrador OWNER TO postgres;

--
-- TOC entry 208 (class 1259 OID 24624)
-- Name: administrador_id_admin_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.administrador_id_admin_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.administrador_id_admin_seq OWNER TO postgres;

--
-- TOC entry 3067 (class 0 OID 0)
-- Dependencies: 208
-- Name: administrador_id_admin_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.administrador_id_admin_seq OWNED BY public.administrador.id_admin;


--
-- TOC entry 205 (class 1259 OID 24595)
-- Name: alumno; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.alumno (
    id_alumno integer NOT NULL,
    id_usuario integer NOT NULL,
    id_carrera integer NOT NULL
);


ALTER TABLE public.alumno OWNER TO postgres;

--
-- TOC entry 204 (class 1259 OID 24593)
-- Name: alumno_id_alumno_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.alumno_id_alumno_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.alumno_id_alumno_seq OWNER TO postgres;

--
-- TOC entry 3068 (class 0 OID 0)
-- Dependencies: 204
-- Name: alumno_id_alumno_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.alumno_id_alumno_seq OWNED BY public.alumno.id_alumno;


--
-- TOC entry 203 (class 1259 OID 24587)
-- Name: carrera; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.carrera (
    id_carrera integer NOT NULL,
    carrera character varying(40) NOT NULL,
    abreviatura character varying(7) NOT NULL
);


ALTER TABLE public.carrera OWNER TO postgres;

--
-- TOC entry 202 (class 1259 OID 24585)
-- Name: carrera_id_carrera_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.carrera_id_carrera_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.carrera_id_carrera_seq OWNER TO postgres;

--
-- TOC entry 3069 (class 0 OID 0)
-- Dependencies: 202
-- Name: carrera_id_carrera_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.carrera_id_carrera_seq OWNED BY public.carrera.id_carrera;


--
-- TOC entry 207 (class 1259 OID 24613)
-- Name: personal_medico; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.personal_medico (
    id_per_medico integer NOT NULL,
    id_usuario integer NOT NULL
);


ALTER TABLE public.personal_medico OWNER TO postgres;

--
-- TOC entry 206 (class 1259 OID 24611)
-- Name: personal_medico_id_per_medico_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.personal_medico_id_per_medico_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.personal_medico_id_per_medico_seq OWNER TO postgres;

--
-- TOC entry 3070 (class 0 OID 0)
-- Dependencies: 206
-- Name: personal_medico_id_per_medico_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.personal_medico_id_per_medico_seq OWNED BY public.personal_medico.id_per_medico;


--
-- TOC entry 213 (class 1259 OID 24677)
-- Name: peticion; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.peticion (
    id_peticion integer NOT NULL,
    peticion text NOT NULL,
    estado character varying(3),
    id_usuario integer NOT NULL,
    id_admin integer NOT NULL
);


ALTER TABLE public.peticion OWNER TO postgres;

--
-- TOC entry 212 (class 1259 OID 24675)
-- Name: peticion_id_peticion_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.peticion_id_peticion_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.peticion_id_peticion_seq OWNER TO postgres;

--
-- TOC entry 3071 (class 0 OID 0)
-- Dependencies: 212
-- Name: peticion_id_peticion_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.peticion_id_peticion_seq OWNED BY public.peticion.id_peticion;


--
-- TOC entry 211 (class 1259 OID 24639)
-- Name: solicitud_medica; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.solicitud_medica (
    id_solicitud integer NOT NULL,
    ubicacion character varying(40) NOT NULL,
    causa text NOT NULL,
    solicitante boolean DEFAULT true NOT NULL,
    nombre_solicitante character varying(40),
    estado character varying(3),
    fecha date NOT NULL,
    id_usuario integer NOT NULL,
    id_per_medico integer NOT NULL
);


ALTER TABLE public.solicitud_medica OWNER TO postgres;

--
-- TOC entry 210 (class 1259 OID 24637)
-- Name: solicitud_medica_id_solicitud_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.solicitud_medica_id_solicitud_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.solicitud_medica_id_solicitud_seq OWNER TO postgres;

--
-- TOC entry 3072 (class 0 OID 0)
-- Dependencies: 210
-- Name: solicitud_medica_id_solicitud_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.solicitud_medica_id_solicitud_seq OWNED BY public.solicitud_medica.id_solicitud;


--
-- TOC entry 201 (class 1259 OID 24579)
-- Name: usuario; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.usuario (
    id_usuario integer NOT NULL,
    matricula character varying(11) NOT NULL,
    password character varying(11) NOT NULL,
    nombre character varying(20) NOT NULL,
    a_paterno character varying(15) NOT NULL,
    a_materno character varying(15) NOT NULL,
    sexo character varying(9) NOT NULL,
    correo character varying(35) NOT NULL,
    role character varying(13) NOT NULL,
    url character varying(45) NOT NULL,
    name_image character varying(30) NOT NULL
);


ALTER TABLE public.usuario OWNER TO postgres;

--
-- TOC entry 200 (class 1259 OID 24577)
-- Name: usuario_id_usuario_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.usuario_id_usuario_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.usuario_id_usuario_seq OWNER TO postgres;

--
-- TOC entry 3073 (class 0 OID 0)
-- Dependencies: 200
-- Name: usuario_id_usuario_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.usuario_id_usuario_seq OWNED BY public.usuario.id_usuario;


--
-- TOC entry 2892 (class 2604 OID 24629)
-- Name: administrador id_admin; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.administrador ALTER COLUMN id_admin SET DEFAULT nextval('public.administrador_id_admin_seq'::regclass);


--
-- TOC entry 2890 (class 2604 OID 24598)
-- Name: alumno id_alumno; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.alumno ALTER COLUMN id_alumno SET DEFAULT nextval('public.alumno_id_alumno_seq'::regclass);


--
-- TOC entry 2889 (class 2604 OID 24590)
-- Name: carrera id_carrera; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.carrera ALTER COLUMN id_carrera SET DEFAULT nextval('public.carrera_id_carrera_seq'::regclass);


--
-- TOC entry 2891 (class 2604 OID 24616)
-- Name: personal_medico id_per_medico; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.personal_medico ALTER COLUMN id_per_medico SET DEFAULT nextval('public.personal_medico_id_per_medico_seq'::regclass);


--
-- TOC entry 2895 (class 2604 OID 24680)
-- Name: peticion id_peticion; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.peticion ALTER COLUMN id_peticion SET DEFAULT nextval('public.peticion_id_peticion_seq'::regclass);


--
-- TOC entry 2893 (class 2604 OID 24642)
-- Name: solicitud_medica id_solicitud; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.solicitud_medica ALTER COLUMN id_solicitud SET DEFAULT nextval('public.solicitud_medica_id_solicitud_seq'::regclass);


--
-- TOC entry 2888 (class 2604 OID 24582)
-- Name: usuario id_usuario; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario ALTER COLUMN id_usuario SET DEFAULT nextval('public.usuario_id_usuario_seq'::regclass);


--
-- TOC entry 3057 (class 0 OID 24626)
-- Dependencies: 209
-- Data for Name: administrador; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.administrador (id_admin, id_usuario) FROM stdin;
\.


--
-- TOC entry 3053 (class 0 OID 24595)
-- Dependencies: 205
-- Data for Name: alumno; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.alumno (id_alumno, id_usuario, id_carrera) FROM stdin;
\.


--
-- TOC entry 3051 (class 0 OID 24587)
-- Dependencies: 203
-- Data for Name: carrera; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.carrera (id_carrera, carrera, abreviatura) FROM stdin;
\.


--
-- TOC entry 3055 (class 0 OID 24613)
-- Dependencies: 207
-- Data for Name: personal_medico; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.personal_medico (id_per_medico, id_usuario) FROM stdin;
\.


--
-- TOC entry 3061 (class 0 OID 24677)
-- Dependencies: 213
-- Data for Name: peticion; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.peticion (id_peticion, peticion, estado, id_usuario, id_admin) FROM stdin;
\.


--
-- TOC entry 3059 (class 0 OID 24639)
-- Dependencies: 211
-- Data for Name: solicitud_medica; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.solicitud_medica (id_solicitud, ubicacion, causa, solicitante, nombre_solicitante, estado, fecha, id_usuario, id_per_medico) FROM stdin;
\.


--
-- TOC entry 3049 (class 0 OID 24579)
-- Dependencies: 201
-- Data for Name: usuario; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.usuario (id_usuario, matricula, password, nombre, a_paterno, a_materno, sexo, correo, role, url, name_image) FROM stdin;
\.


--
-- TOC entry 3074 (class 0 OID 0)
-- Dependencies: 208
-- Name: administrador_id_admin_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.administrador_id_admin_seq', 1, false);


--
-- TOC entry 3075 (class 0 OID 0)
-- Dependencies: 204
-- Name: alumno_id_alumno_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.alumno_id_alumno_seq', 1, false);


--
-- TOC entry 3076 (class 0 OID 0)
-- Dependencies: 202
-- Name: carrera_id_carrera_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.carrera_id_carrera_seq', 1, false);


--
-- TOC entry 3077 (class 0 OID 0)
-- Dependencies: 206
-- Name: personal_medico_id_per_medico_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.personal_medico_id_per_medico_seq', 1, false);


--
-- TOC entry 3078 (class 0 OID 0)
-- Dependencies: 212
-- Name: peticion_id_peticion_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.peticion_id_peticion_seq', 1, false);


--
-- TOC entry 3079 (class 0 OID 0)
-- Dependencies: 210
-- Name: solicitud_medica_id_solicitud_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.solicitud_medica_id_solicitud_seq', 1, false);


--
-- TOC entry 3080 (class 0 OID 0)
-- Dependencies: 200
-- Name: usuario_id_usuario_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.usuario_id_usuario_seq', 1, false);


--
-- TOC entry 2905 (class 2606 OID 24631)
-- Name: administrador administrador_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.administrador
    ADD CONSTRAINT administrador_pkey PRIMARY KEY (id_admin);


--
-- TOC entry 2901 (class 2606 OID 24600)
-- Name: alumno alumno_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.alumno
    ADD CONSTRAINT alumno_pkey PRIMARY KEY (id_alumno);


--
-- TOC entry 2899 (class 2606 OID 24592)
-- Name: carrera carrera_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.carrera
    ADD CONSTRAINT carrera_pkey PRIMARY KEY (id_carrera);


--
-- TOC entry 2903 (class 2606 OID 24618)
-- Name: personal_medico personal_medico_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.personal_medico
    ADD CONSTRAINT personal_medico_pkey PRIMARY KEY (id_per_medico);


--
-- TOC entry 2909 (class 2606 OID 24685)
-- Name: peticion peticion_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.peticion
    ADD CONSTRAINT peticion_pkey PRIMARY KEY (id_peticion);


--
-- TOC entry 2907 (class 2606 OID 24648)
-- Name: solicitud_medica solicitud_medica_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.solicitud_medica
    ADD CONSTRAINT solicitud_medica_pkey PRIMARY KEY (id_solicitud);


--
-- TOC entry 2897 (class 2606 OID 24584)
-- Name: usuario usuario_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_pkey PRIMARY KEY (id_usuario);


--
-- TOC entry 2913 (class 2606 OID 24632)
-- Name: administrador administrador_id_usuario_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.administrador
    ADD CONSTRAINT administrador_id_usuario_fkey FOREIGN KEY (id_usuario) REFERENCES public.usuario(id_usuario);


--
-- TOC entry 2910 (class 2606 OID 24601)
-- Name: alumno alumno_fkey1; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.alumno
    ADD CONSTRAINT alumno_fkey1 FOREIGN KEY (id_usuario) REFERENCES public.usuario(id_usuario);


--
-- TOC entry 2911 (class 2606 OID 24606)
-- Name: alumno alumno_fkey2; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.alumno
    ADD CONSTRAINT alumno_fkey2 FOREIGN KEY (id_carrera) REFERENCES public.carrera(id_carrera);


--
-- TOC entry 2912 (class 2606 OID 24619)
-- Name: personal_medico personal_medico_id_usuario_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.personal_medico
    ADD CONSTRAINT personal_medico_id_usuario_fkey FOREIGN KEY (id_usuario) REFERENCES public.usuario(id_usuario);


--
-- TOC entry 2917 (class 2606 OID 24691)
-- Name: peticion peticion_id_admin_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.peticion
    ADD CONSTRAINT peticion_id_admin_fkey FOREIGN KEY (id_admin) REFERENCES public.administrador(id_admin);


--
-- TOC entry 2916 (class 2606 OID 24686)
-- Name: peticion peticion_id_usuario_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.peticion
    ADD CONSTRAINT peticion_id_usuario_fkey FOREIGN KEY (id_usuario) REFERENCES public.usuario(id_usuario);


--
-- TOC entry 2915 (class 2606 OID 24654)
-- Name: solicitud_medica solicitud_medica_id_per_medico_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.solicitud_medica
    ADD CONSTRAINT solicitud_medica_id_per_medico_fkey FOREIGN KEY (id_per_medico) REFERENCES public.personal_medico(id_per_medico);


--
-- TOC entry 2914 (class 2606 OID 24649)
-- Name: solicitud_medica solicitud_medica_id_usuario_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.solicitud_medica
    ADD CONSTRAINT solicitud_medica_id_usuario_fkey FOREIGN KEY (id_usuario) REFERENCES public.usuario(id_usuario);


-- Completed on 2021-10-13 13:07:09

--
-- PostgreSQL database dump complete
--

