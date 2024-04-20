const {JWT_SECRET} = require('./config')
const jwt = require('jsonwebtoken')


const authMiddleware = (req, res, next) => {
    const header = req.headers.authorization
    if(!header || !header.startsWith('Bearer ')){
        return res.status(403).json({
            msg: "Invalid header"
        })
    }

    const token = header.split(' ')[1]

    try{
        const payload = jwt.verify(token, JWT_SECRET)
        req.userId = payload.userId;
        next();
    }
    catch(err){
        return res.status(403).json({
            msg: "Invalid token"
        })
    }
}
module.exports = {
    authMiddleware 
}