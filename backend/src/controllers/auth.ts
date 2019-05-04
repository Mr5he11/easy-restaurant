import { Handler } from 'express';
import passport from 'passport'
import http from 'passport-http'
import jwt from 'passport-jwt'
import User, { Roles } from '../models/user'

passport
  .use(new http.BasicStrategy(
    function (username, password, done) {
      User.findOne({ username: username }, (err, user) => {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        if (!user.validatePassword(password)) { return done(null, false); }
        return done(null, user);
      });
    }
  ))
  .use(new jwt.Strategy({
    jwtFromRequest: jwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
  }, function (payload, done) {
    return User.findById(payload.id)
      .then(user => {
        return done(null, user)
      })
      .catch(err => {
        return done(err);
      });
  }));

export const token = passport.authenticate('jwt', { session: false })
export const credentials = passport.authenticate('basic', { session: false })
export const admin: Handler = (req, res, next) => {
  let user = new User(req.user);
  if (user.role == Roles.CashDesk)
    return next()
  next({ statusCode: 401, error: true, errormessage: "Unauthorized" })
}