const mongoose = require('mongoose'); 

const URI = 'mongodb://localhost/mern-tasks';

mongoose.connect(URI)
    .then(db => console.log('DB esta conectada'))
    .catch(err => console.err(err));

module.exports = mongoose;