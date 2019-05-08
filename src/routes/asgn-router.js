var express = require('express');
var router = express.Router();

var asgncontroller = require('../controllers/asgn-controller');

// POST
router.post('/asgn', asgncontroller.addAsgn);

// GET
router.get('/asgn', asgncontroller.showAsgn);

// PUT
router.put('/asgn', asgncontroller.changeAsgn);

// DELETE
router.delete('/asgn', asgncontroller.deleteAsgn);

module.exports = router;