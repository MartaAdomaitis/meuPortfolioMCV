const express = require('express');
const rotaHome = express.Router();

router.get('/home', (req,res) => {
    const home = require("./views/home")
    res.send(home)
});

module.exports = router;