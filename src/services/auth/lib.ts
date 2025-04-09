import crypto from "crypto";
import jsonwebtoken from "jsonwebtoken";
import fs from "fs";
import path from "path";

const PRIV_KEY = fs.readFileSync(path.join(import.meta.dirname, "../../../", "priv_key.pem"), "utf8");

function validPassword(password: string, hash: string, salt: string) {
  var hashVerify = crypto.pbkdf2Sync(password, salt, 10000, 64, "sha512").toString("hex");
  return hash === hashVerify;
}

function genPassword(password: string) {
  var salt = crypto.randomBytes(32).toString("hex");
  var genHash = crypto.pbkdf2Sync(password, salt, 10000, 64, "sha512").toString("hex");

  return {
    salt: salt,
    hash: genHash
  };
}

function issueJWT(user: any) {

  const expiresIn = "1d";

  const signedToken = jsonwebtoken.sign(
    {
      sub: user.id,
      iat: Date.now()
    },
    PRIV_KEY,
    {expiresIn: expiresIn, algorithm: "RS256"}
  );

  return {
    token: "Bearer " + signedToken,
    expires: expiresIn
  };
}

export {validPassword, genPassword, issueJWT};
