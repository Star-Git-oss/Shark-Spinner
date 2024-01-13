const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true
    },
    password: {
      type: String
    },
    walletAmount: {
      type: String
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('user', UserSchema);
