import WebSocket from 'ws';
import {ALERTA,UPDATE_ALERTA} from './events';
import {SolicitudReq,UpdateAlert} from '@types';
import solicitud from 'services/Solicitud';
import user from 'services/User/user.service';
import carrera from 'services/Carrera';


export default function createSocket(app: any, server: any) {
    const io = require("socket.io")(server, { cors: { origin: "*", methods: ["GET", "POST"] } });
    io.on("connection", function (socket: WebSocket) {
        /**
         * Funcion que los alumnos utilizaran para enviar alertas 
         */
        
        socket.on(ALERTA, async (data: SolicitudReq) => {
            var carr;
            await solicitud.createSolicitud(data);
            const alum = await user.getById(data?.id_alumno);
            if(alum.id_carrera){
                carr = await carrera.getCarreraId(alum.id_carrera);
                data.carrera = carr
                delete alum.id_carrera;
            }
            delete alum.password;
            data.alumno = alum
            //emitir a enfermeros la alerta
            socket.emit(ALERTA,data)
            //actualizar las solicitudes
            const sol = await solicitud.getAll();
            socket.emit(UPDATE_ALERTA, sol);
        })
        
        /**
         * Funcion que los enfermeros utilizaran para actualizar el estatus de la alerta
         * (y de paso actualizar quien la atendio)
         */

        socket.on(UPDATE_ALERTA, async (data: UpdateAlert) => {
            const {id_alerta,id_enfermero} = data;
            await solicitud.atendidaUpdate(id_enfermero,id_alerta);
            const sol = await solicitud.getAll();
            socket.emit(UPDATE_ALERTA, sol);
        })
    });
}

/**
 *  expressWs(app, server)
    app.ws('/echo', (ws: any, req: any) => {
        /*ws.once('connection', function connection(wss) {
            wss.on('message', (message:any)=>{
                console.log('received: %s', message);
            });

            wss.send(JSON.stringify('it works! Yeeee! :))' ));
        });
        ws.on('connection',()=>{
            console.log('connect jajaja')
        });
        ws.on('message', (mgs: any) => {
            ws.send(mgs)
        })

        ws.on('close', () => {
            console.log('WebSocket was closed')
        })
    })
 */