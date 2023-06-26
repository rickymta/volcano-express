const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/VolcanoTaskManagement')

const Schema = mongoose.Schema

const AccountSchema = new Schema({
  email: String,
  password: String,
  fullname: String,
  avatar: String,
  token: String,
  refresh_token: String,
  expired_token: Date,
  gender: Int8Array,
  activation_code: String,
  birthday: Date,
  phone_number: String,
  address: String,
  comparny: String,
  position: String
}, {
    collection: 'account'
})

const AccountModel = mongoose.model('account', AccountSchema)
module.exports = AccountModel
