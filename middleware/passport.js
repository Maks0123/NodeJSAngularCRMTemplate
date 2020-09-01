const keys = require('../config/keys')

const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const mogoose = require('mongoose')
const User = require('../models/User')

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: keys.jwt
}

module.exports = passport => {
    passport.use(
        new JwtStrategy(options, async (payload, done) => {
            try {
            const user = await User.findById(payload.userId).select('email id')
             if (user) {
                 done(null, user)
             } else {
                 done(null, false)
             }
            } catch(e) {
                console.log(e)
            }
        })
    )
}