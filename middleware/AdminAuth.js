const jwt = require("jsonwebtoken");
const Admin = require("./../Schema/Admin");
const config = require("config");

const auth = async(req, res, next) => {
    try {
        const token = req.cookies.jwtTokenAuth;
        const verToken = jwt.verify(token, config.get("jwtTokenAuth"));

        const user = await Admin.findOne({
            _id: verToken._id,
            "tokens.token": token,
        });
        if (!user) {
            throw new Error("Token not valid");
        }
        req.token = token;
        req.user_data = user;
        req.userID = user._id;
        next();
    } catch (error) {
        res.status(401).send("Token not valid");
        console.log(error);
    }
};

module.exports = auth;