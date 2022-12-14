const {Post} = require('../models')


const postController = {
    create: async (req, res) => {
        try {
            const newPost = await Post.create({
                content: req.body.content,
                user_id: req.data
            })
            res.status(200).json(newPost)
        } catch (error) {
            res.status(500).json("error")
        }
    },
    getAll: async (req, res) => {
        try {
            const posts = await Post.findAll({where: {user_id: req.data}})
            res.status(200).json(posts)
        } catch (error) {
            res.status(500).json("error")
        }
    }
}

module.exports = {postController}