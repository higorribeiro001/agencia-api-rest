const swaggerAutogen = require('swagger-autogen')({ openapi: '3.0.0' });

const doc = {
  info: {
    version: "1.0.0",
    title: "AGENCIA REST API",
    description: "API Rest para agência de viagens."
  },
  servers: [
    {
      url: 'http://localhost:3001'
    }
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer'
      }
    }
  },
  tags: [
    { name: 'Viagens', description: 'Operações relacionadas às viagens' },
    { name: 'Fotos de Viagens', description: 'Upload de imagens das viagens' }
  ]
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./app.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);