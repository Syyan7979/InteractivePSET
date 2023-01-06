const jwt = require("jsonwebtoken");

cookieJwtAuth = (req, res, next) => {
    const token = req.cookies.token;
    try {
        jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch (error) {
        res.clearCookie('token');
        res.status(403).json(
            {
                message: error.message
            }
        )
    }
};

module.exports = cookieJwtAuth;