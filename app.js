const express = require('express');

const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

const swaggerDocument = YAML.load('./swagger.yaml');

const mongodbRoutes = require('./routes/mongodbRoutes');
const postgresRoutes = require('./routes/postgresRoutes');

const app = express();
const port = 3000;

app.use(express.json());

app.use('/mongodb', mongodbRoutes);
app.use('/postgres', postgresRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    console.log(`Swagger UI available at http://localhost:${port}/api-docs`);
});
