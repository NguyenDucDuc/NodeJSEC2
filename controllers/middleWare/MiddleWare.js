const jwt = require('jsonwebtoken')


const middleWare = {
    verifyToken: (req, res, next) => {
        const accessToken = req.headers.token.split(" ")[1]
        jwt.verify(accessToken, "ducnd", (err, result) => {
            if (err) {
                console.log(err)
            } else {
                // console.log(result.userId)
                req.data = result.userId
                console.log(req.data)
                next()
            }
        })
    }
}

module.exports = {middleWare}