require('dotenv').config();
const PORT = process.env.PORT;
const express = require('express');
const usersRoutes = require('./routes/users.js');
const middlewareLogRequest = require('./middleware/logs.js');
const middlewareAuth = require('./middleware/auth.js');
const app = express();
var multer = require("multer");
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
var upload = multer();

app.use(middlewareLogRequest, middlewareAuth);
app.use(express.json());
app.use(upload.array());
const openApiSpec = YAML.load('./openapi.yaml');

app.use('/docs', swaggerUi.serve, swaggerUi.setup(openApiSpec));
app.use('/users', usersRoutes);

app.listen(PORT, () => {
    console.log(`Server Berhasil di running di port ${PORT}`)
});