const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    featured: {
        type: Boolean,
        default: false
    }
},{
    timestamps: true
});

var Users = mongoose.model('User', userSchema);
module.exports = Users;


