export enum Role {
    'admin',
    "alumno",
    "enfermero"
}

export enum Sexo {
    "M",
    "F"
}

export type Carrera = {
    carrera: string,
    abreviatura: string
}
export type User = {
    matricula: string,
    nombre: string,
    password: string,
    a_paterno: string,
    a_materno: string,
    sexo: Sexo,
    correo: string,
    role: Role,
    url?: string,
    name_image?: string
    carrera?: number
}

export type Peticion = {
    peticion: string,
    estado: boolean
}
// solicitante referencia a "amigo" XD
export type SOlicitud = {
    ubicacion: string,
    causas: string,
    solicitante: boolean,
    nombre_solicitante: string | null,
    estado: boolean,
    fecha: number | Date,
    id_per_medico: number,
    id_usuario: number
}