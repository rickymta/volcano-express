'use strict'
const AccountModel = require('../../models/account')

exports.registerUser = (req, res) => {
    var email = req.body.email
    var password = req.body.password
    var gender = req.body.gender
    var birthday = req.body.birthday
    var phone_number = req.body.phone_number

    AccountModel.findOne({
        email: email
    })
    .then(data => {
        if (data) {
            res.json({errorCode: -1, message: "Username is existed!"})
        } else {
            return AccountModel.create({
                email: email,
                password: password,
                gender: gender,
                birthday: birthday,
                phone_number: phone_number
            })


        }
    })
    .then(data => {
        res.json({errorCode: 0, message: "Account is created successfully!", data: data})
    })
    .catch(err => {
        res.status(500).json({errorCode: -1, message: "Create account failed!", data: err})
    })
}