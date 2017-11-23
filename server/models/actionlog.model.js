var mongoose = require('mongoose');


var LogSchema = new mongoose.Schema({
    websiteName: String,
    websiteURL: String,
    action: String,
    date: Date,
})

const Log = mongoose.model('Log', LogSchema);

module.exports = Log;