const express = require('express');
const router = express.Router();
const {createTest} = require('./../controller/createcontroller');


router
.route('/test')
.post(createTest)

module.exports = router;