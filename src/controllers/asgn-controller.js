var Assignments = require('../models/asgn-model');


exports.addAsgn = function(req, res) {
    if(!req.body) {
        return res.status(400).send('Req body missing');
    } 
    var model = new Assignments(req.body);
    model.save()
        .then((doc) => {
            if(!doc || doc.length === 0) {
                return res.status(500).send('Server error.');
            }
            res.status(201).send(doc);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
}

