const express = require('express')
var router = express.Router()

router.get('/', (req, res, next) => {
    res.json('user main')
})

router.post('/create', (req, res, next) => {
    res.json('create user')
})

router.put('/update/:id', (req, res, next) => {
    res.json('update user id: ' + req.params.id)
})

router.delete('/delete/:id', (req, res, next) => {
    res.json('delete user id: ' + req.params.id)
})

router.get('/:id', (req, res, next) => {
    res.json('get user id: ' + req.params.id)
})

module.exports = router
