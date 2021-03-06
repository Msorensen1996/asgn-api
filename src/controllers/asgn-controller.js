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
exports.showAsgn = function(req, res) {
    // res.send('Calling showOrder function');
    if(!req.query.assignmentName) {
        return res.status(400).send('Missing URL parameter.');
    }
    Order.findOne({
        assignmentName: req.query.assignmentName
    })
        .then((doc) => {
            res.json(doc);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
}

exports.changeAsgn = function(req, res) {
    // res.send('Calling changeOrder function');
    if(!req.query.assignmentName) {
        return res.status(400).send('Missing URL parameter.');
    }
    Order.findOneAndUpdate({
        assignmentName: req.query.assignmentName
    }, req.body, {new: true})
    .then((doc) => {
        res.json(doc);
    })
    .catch((err) => {
        res.status(500).json(err);
    });
}

exports.deleteAsgn = function(req, res) {
    // res.send('Calling deleteOrder function');
    if(!req.query.assignmentName) {
        return res.status(400).send('Missing URL parameter.');
    }
    Order.findOneAndRemove({
        orderId: req.query.assignmentName
    })
    .then((doc) => {
        res.json(doc);
    })
    .catch((err) => {
        res.status(500).json(err);
    });
}
