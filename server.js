const express = require('express')
const app = express()
const port = 5000
var taskRouter = require('./routers/task.js')
var userRouter = require('./routers/user.js'))
var authenticationMiddleware = require('./app/middlewares/authentication.js')

app.get('/', (req, res, next) => {
  res.send('Hello World!')
})

app.use('/api/v1/task/', authenticationMiddleware, taskRouter)
app.use('/api/v1/user/', authenticationMiddleware, userRouter)

app.listen(port, () => {
  console.log(`Volcano app listening on port ${port}`)
})