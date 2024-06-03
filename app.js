const express = require('express');
const app = express();
const userRoutes = require('./routes/user');
const locationRoutes = require('./routes/location');
const bodyParser = require('body-parser');

// Swagger
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Express API with Swagger',
            version: '1.0.0',
        },
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                }
            }
        },
        security: [{
            bearerAuth: []
        }]
    },
    apis: ['./routes/*.js'],
};
const openapiSpecification = swaggerJsdoc(options);


app.use(express.json());
app.use(bodyParser.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification));
app.use('/user', userRoutes);
app.use('/location', locationRoutes);

app.listen(3000, () => console.log('Server running on port 3000'));
