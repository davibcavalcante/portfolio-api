const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const port = require('./config.json').port

const app = express();

app.use(bodyParser.json());
app.use(cors());

const routes = require('./src/routes/api')

app.use(('/', routes));

app.listen(port, () => {
    console.log(`Servidor escutanto em: ${port}`)
})