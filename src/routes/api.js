const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello, world!');
});

router.get('/teste', (req, res) => {
    res.status(200).json('Parabéns pela requisição!');
});

module.exports = router;