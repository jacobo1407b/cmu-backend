
DO $$ BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'action') THEN
        CREATE TYPE df.sexo AS ENUM (
            'Masculino',
            'Femenino'
        );
         CREATE TYPE df.rol AS ENUM (
            'Alumno',
            'Admin',
            'Enfermero'
        );
        
    END IF;
    EXCEPTION WHEN duplicate_object THEN null;
END$$;

CREATE TABLE IF NOT EXISTS df.carrera
(
    id_carrera varchar(30) NOT NULL,
    carrera varchar(50) NOT NULL,
    abreviatura varchar(10) NOT NULL,
    PRIMARY KEY (id_carrera)
);



CREATE TABLE IF NOT EXISTS df.users
(
    id_usuario varchar(30) NOT NULL,
    matricula varchar(20) NOT NULL,
    password varchar(80) NOT NULL,
    name_image varchar(40) NULL DEFAULT '',
    url varchar(60) NULL DEFAULT '',
    nombre varchar(20) NOT NULL,
    a_paterno varchar(20) NOT NULL,
    a_materno varchar(20) NOT NULL,
    correo varchar(60) NOT NULL,
    id_carrera varchar(30) NULL,
    genero df.sexo NULL,
    role df.rol NOT NULL,
    PRIMARY KEY (id_usuario),
    FOREIGN KEY (id_carrera)
        REFERENCES df.carrera(id_carrera)
);

CREATE TABLE IF NOT EXISTS df.solicitud_medica
(
    id_solicitud varchar(30) NOT NULL,
    ubicacion varchar(100) NOT NULL,
    causa varchar(400) NOT NULL,
    solicitante boolean DEFAULT false,
    nombre_solicitante varchar(50) NULL,
    estado boolean NULL DEFAULT false,
    id_medico varchar(30) NOT NULL,
    fecha TIMESTAMP NOT NULL DEFAULT NOW(),
    id_alumno varchar(30) NOT NULL,
    PRIMARY KEY (id_solicitud),
    FOREIGN KEY (id_medico)
        REFERENCES df.users(id_usuario)
);

CREATE TABLE IF NOT EXISTS df.peticion
(
    id_peticion varchar(30) NOT NULL,
    peticion varchar(500) NOT NULL,
    estado boolean NULL DEFAULT false,
    id_usuario varchar(30) NOT NULL,
    PRIMARY KEY (id_peticion),
    FOREIGN KEY (id_usuario)
        REFERENCES df.users(id_usuario)
);