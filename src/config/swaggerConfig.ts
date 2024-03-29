import swaggerJsdoc from 'swagger-jsdoc';

const options: swaggerJsdoc.Options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: "API de masques et d'entrées",
            version: '1.0.0',
            description: 'Une simple API Express pour gérer les masques et les entrées',
        },
    },
    apis: ['./src/routes/*.ts'], // Ajustez le chemin selon l'organisation de votre projet
};

const specs = swaggerJsdoc(options);

export default specs;
