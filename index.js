const app = require('express')()
const port = 5000
const bodyParser = require('body-parser')
const {User, Post} = require('./models')



app.use(bodyParser.json())


app.post("/users", async (req,res) => {
    const newUser = await User.create({
        username: req.body.username,
        password: req.body.password
    })
    res.status(200).json(newUser)
})

app.get("/users", async (req,res) => {
    const users = await User.findAll()
    res.status(200).json(users)
})

app.listen(port, () => {
    console.log(`server running on port: ${port}`)
})