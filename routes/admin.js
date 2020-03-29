const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index/admin')
})


module.exports = router;