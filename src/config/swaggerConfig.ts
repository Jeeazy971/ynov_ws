import swaggerJsdoc from 'swagger-jsdoc';

const options: swaggerJsdoc.Options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: "API de masques et d'entrées",
            version: '1.0.0',
            description: 'Une simple API Express pour gérer les masques et les entrées',
        },
        components: {
            schemas: {
                Entry: {
                    type: 'object',
                    properties: {
                        idMask: {
                            type: 'integer',
                            description: "ID du masque associé à l'entrée",
                            example: 1,
                        },
                        entryJson: {
                            type: 'object',
                            description: "Les données JSON de l'entrée",
                            example: { usage: 'hospital', quantity: 100 },
                        },
                    },
                },
                Mask: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'integer',
                            example: 1,
                        },
                        name: {
                            type: 'string',
                            example: 'Masque N95',
                        },
                        description: {
                            type: 'string',
                            example:
                                'Un masque très efficace pour filtrer les particules.',
                        },
                        maskJson: {
                            type: 'object',
                            properties: {
                                type: {
                                    type: 'string',
                                    example: 'N95',
                                },
                                filterEfficiency: {
                                    type: 'string',
                                    example: '95%',
                                },
                            },
                        },
                    },
                },
            },
        },
    },
    apis: ['./src/routes/*.ts'],
};

const specs = swaggerJsdoc(options);

export default specs;
