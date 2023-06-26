const express = require('express')
var router = express.Router()

router.get('/', (req, res, next) => {
    res.json('task main')
})

router.post('/create', (req, res, next) => {
    res.json('create task')
})

router.put('/update/:id', (req, res, next) => {
    res.json('update task id: ' + req.params.id)
})

router.delete('/delete/:id', (req, res, next) => {
    res.json('delete task id: ' + req.params.id)
})

router.get('/:id', (req, res, next) => {
    res.json('get task id: ' + req.params.id)
})

module.exports = router
