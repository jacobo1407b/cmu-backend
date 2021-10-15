import {Request} from 'express';
export interface RequestCustom extends Request
{
    user: Payload;
}
export enum Role {
    'Admin',
    "Alumno",
    "Enfermero"
}

export enum Sexo {
    m = "Masculino",
    f = "Femenino"
}

export type Carrera = {
    id_carrera?:string,
    carrera: string,
    abreviatura: string
}
export type User = {
    id_usuario?:string
    matricula: string,
    nombre: string,
    password: string,
    a_paterno: string,
    a_materno: string,
    genero: Sexo,
    correo: string,
    role?: Role,
    url?: string,
    name_image?: string
    id_carrera?: string
}

export type Peticion = {
    id_peticion?:string,
    peticion: string,
    estado: boolean
    id_usuario?:string
}
// solicitante referencia a "amigo" XD
export type Solicitud = {
    id_solicitud?:string,
    ubicacion: string,
    causas: string,
    solicitante: boolean,
    nombre_solicitante: string | null,
    estado: boolean,
    fecha: number | Date,
    id_medico?: string,
    id_alumno?: string
}

export type Re = {
    error: boolean,
    msg: string,
    data: User | null 
}

export type Payload = {
    sub: string,
    exp: number | Date,
    username: string,
    matricula: string,
    email:string,
    role?:Role
}