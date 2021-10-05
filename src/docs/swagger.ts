import { Options } from 'swagger-jsdoc';
const swaggerAutogen = require('swagger-autogen')()

export function swaggerOptions(port: number): Options {
    return {
        swaggerDefinition: {
            info: {
                version: "1.0.0",
                title: "API CMU",
                description: "API Documentation for use",
                contact: {
                    name: "Jacobo Hernandez",
                    url: "https://github.com/jacobo1407b/cmu-backend/"
                },
                server: [`http://localhost:${port}`]
            }
        },
        basePath: "/",
        apis: ['../routes/index.js']
    }
}
export function init() {
    const outputFile = swaggerOptions(3000)
    const endpointsFiles = ['../routes/index.js']
    swaggerAutogen(outputFile, endpointsFiles)
}
