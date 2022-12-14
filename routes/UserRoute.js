const { userController } = require('../controllers/UserController')



const userRoute = require('express').Router()
userRoute.get('/login', userController.login)
userRoute.post('/register', userController.register)

module.exports = {userRoute}