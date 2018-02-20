const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

let usersSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    }
});

module.exports = mongoose.model('Users', usersSchema);
