const jwt = require("jsonwebtoken");
const User = require("./../Schema/Admin");
const config = require("config");

const Auth = async(req, res, next) => {
    try {
        const token = req.cookies.jwtUser;
        const vToken = jwt.verify(token, config.get("jwtTokenAuth"));
        const dataUser = await User.findOne({
            _id: vToken._id,
            "tokens.token": token,
        });
        console.log(dataUser);
        if (!dataUser) {
            throw new Error("Couldn't find");
        }
        req.token = token;
        req.dataUser = dataUser;
        req.userId = dataUser._id;

        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({ errors: error });
    }
};
module.exports = Auth;