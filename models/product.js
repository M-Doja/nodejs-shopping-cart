const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./models/user');

const schema = new Schema({
    imagePath: {type: String, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true}
    seller:[{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }]
});

module.exports = mongoose.model('Product', schema);
