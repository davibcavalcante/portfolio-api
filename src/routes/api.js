const express = require('express');
const router = express.Router();

const mailController = require('../controllers/mailController');

router.get('/', (req, res) => {
    res.send('Hello, world!');
});

router.post('/sendmail', mailController.sendMail);

module.exports = router;