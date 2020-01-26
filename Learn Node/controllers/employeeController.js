const express = require('express');

var router = express.Router();

router.get('/', (req,res) =>{
    res.json('Get there very fast indeed ')
});


module.exports = router;

