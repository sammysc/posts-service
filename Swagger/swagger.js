const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Tech Challenge FIAP 2ª Fase- Plataforma Educacional",
      version: "1.0.0",
      description: "API para gerenciamento de postagens, professores e alunos",
    },
    servers: [
      {
        url: "http://localhost:3001",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./Swagger/swaggerDocs.js"], // Caminho para o arquivo de documentação
};

const specs = swaggerJsdoc(options);

module.exports = {
  swaggerUi,
  specs,
};
