const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');
const Product = require('./models/product');

const userSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    city: {type: String, required: true},
    state: {type: String, required: true},
    password: {type: String, required: true},
    buys: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product'
    }],
      itemPurchasedOn: { type: Date, default: Date.now }
    }],
    sells: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product'
    }],
      itemSoldOn: { type: Date, default: Date.now }
    }],
    watchList: [{
      products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
      }]
    }]
});

userSchema.methods.encryptPassword = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);
};

userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
