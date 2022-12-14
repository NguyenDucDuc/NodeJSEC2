const app = require('express')()
const port = 5000
const bodyParser = require('body-parser')
const {User, Post} = require('./models')
const { postRoute } = require('./routes/PostRoute')
const { userRoute } = require('./routes/UserRoute')



app.use(bodyParser.json())



app.use('/users', userRoute)
app.use('/posts', postRoute)


app.listen(port, () => {
    console.log(`server running on port: ${port}`)
})