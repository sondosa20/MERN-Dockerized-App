import swaggerJsdoc, { Options } from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import path from 'path';

const options: Options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Swagger Express API',
            version: '1.0.0',
            description: 'A simple Express API with Swagger documentation',
            contact: {
                name: 'Sondosa'
            }
        },
    },
    apis: [
        path.join(__dirname, '../routes/*.ts'), // Path to your API routes
    ],
};

const specs = swaggerJsdoc(options);

export { specs, swaggerUi };