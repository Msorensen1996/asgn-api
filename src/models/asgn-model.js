var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var asgnSchema = new Schema({
    courseName: String,
    assignmentName: {
        type: String,
        required: true,

    },
    dueDate: Date
});

module.exports = mongoose.model('Assignments', asgnSchema)