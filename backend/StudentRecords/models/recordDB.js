var mongoose = require('mongoose');
var recordsSchema = mongoose.Schema(
    {
        number: Number,
        firstName: String,
        lastName: String,
        gender: Number,
        DOB: String,
        residency: Number,
    }
);

var Posts = mongoose.model('post', recordsSchema);

mongoose.connect('mongodb://localhost/assignment2');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    exports.Posts = Posts;
});