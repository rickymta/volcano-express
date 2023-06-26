const express = require('express')
const app = express()
const port = 5000
var bodyParser = require('body-parser')
var taskRouter = require('./routers/task.js')
var userRouter = require('./routers/user.js')
var authenticationMiddleware = require('./app/middlewares/authentication.js')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res, next) => {
  res.send('Volcano Express MongoDB - Task Management!')
})

app.use('/api/v1/task/', authenticationMiddleware, taskRouter)
app.use('/api/v1/user/', authenticationMiddleware, userRouter)

app.listen(port, () => {
  console.log(`Volcano app listening on port ${port}`)
})