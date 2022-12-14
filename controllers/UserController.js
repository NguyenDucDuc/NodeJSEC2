const jwt = require('jsonwebtoken')
const {User} = require('../models')
const bcrypt = require('bcrypt')

const userController = {
    login: async (req, res) => {
        try {
            const user = await User.findOne({where: {username: req.body.username}})
            
            const validPassword = await bcrypt.compare(req.body.password, user.password)
            console.log(validPassword)
            if(user && validPassword){
                const accessToken = await jwt.sign({
                    userId: user.id
                }, 'ducnd')
                res.status(200).json({user, accessToken})
            }
        } catch (error) {
            res.status(500).json("error")
        }
    },
    register: async (req,res) => {
        try {
            const salt = await bcrypt.genSalt(10)
            const hashed = await bcrypt.hash(req.body.password, salt)
            const newUser = await User.create({
                username: req.body.username,
                password: hashed
            })
            res.status(200).json(newUser)
        } catch (error) {
            res.status(500).json("error")
        }
    }
}

module.exports = {userController}