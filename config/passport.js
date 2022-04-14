const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const User = require("./../Schema/UserGoogle");
const config = require("config");

module.exports = function(passport) {
    passport.use(
        new GoogleStrategy({
                clientId: config.get("GoogleClientID"),
                clientSecret: config.get("GoogleClientSecret"),
                callbackUrl: "/auth/google/callback",
            },
            async(accessToken, refreshToken, profile, done) => {
                console.log(profile);
            }
        )
    );
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => done(err, user));
    });
};