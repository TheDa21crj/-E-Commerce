const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const User = require("./../Schema/Users");

//Private | Account | /myaccount