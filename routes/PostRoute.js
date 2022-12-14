const { middleWare } = require('../controllers/middleWare/MiddleWare')
const { postController } = require('../controllers/PostController')



const postRoute = require('express').Router()
postRoute.post("/add", middleWare.verifyToken, postController.create )
postRoute.get("/get-all", middleWare.verifyToken, postController.getAll)

module.exports = {postRoute}