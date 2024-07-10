const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const routes = require('./src/routes/api')

app.use(('/', routes));

app.listen(5000, () => {
    console.log('Servidor escutanto em http://localhost:5000')
})