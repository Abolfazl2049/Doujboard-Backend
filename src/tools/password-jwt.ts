import {Strategy as JwtStrategy} from "passport-jwt";
import {ExtractJwt} from "passport-jwt";
import fs from "fs";
import path from "path";
import authDb from "#src/services/auth/db.js";
import {PassportStatic} from "passport";

const PUB_KEY = fs.readFileSync(path.resolve("pub_key.pem"), "utf8");

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: PUB_KEY,
  algorithms: ["RS256"]
};

let configJwtPassport = (passport: PassportStatic) => {
  passport.use(
    new JwtStrategy(options as any, function (payload: any, done: Function) {
      authDb.User.findOne({where: {id: payload.sub}})
        .then(user => {
          if (user) return done(null, user);
          else return done(null, false);
        })
        .catch(err => {
          done(err, false);
        });
    })
  );
};
export default configJwtPassport;
