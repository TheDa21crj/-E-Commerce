const jwt = require("jsonwebtoken");
const User = require("./../Schema/User");
const config = require("config");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const UserAuth = async(req, res, next) => {
    try {
        const token = req.cookies.jwt;
        const vToken = jwt.verify(token, config.get("jwtTokenAuth"));

        console.log(token);

        next();
    } catch (error) {
        res.status(401).json({ errors: error });
    }
};

module.exports = UserAuth;