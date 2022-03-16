const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function(req, res, next) {
    const token = req.header("x-auth-token");
    if (!token) {
        return res.status(401).json({ message: "Authorization deined" });
    }
    try {
        const decoded = jwt.verify(token, config.get("jwtTokenAuth"));
        req.user = decoded.user;
        next();
    } catch (error) {
        res.status(401).json({ message: "Token is not valid" });
    }
};