import {NextFunction, Request, Response} from "express";
import {genPassword, issueJWT, validPassword} from "./lib.js";
import authDb from "./db.js";
import {sendRes} from "#src/utils/api-response.js";
import {validateReqSchema} from "#src/utils/validation.js";

let register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    validateReqSchema(req);

    const saltHash = genPassword(req.body.password);

    const salt = saltHash.salt;
    const hash = saltHash.hash;

    let user = await authDb.User.create({
      username: req.body.username,
      hash: hash,
      salt: salt
    });
    sendRes(req, res, {ok: true, data: user});
  } catch (err) {
    next(err);
  }
};

let login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    validateReqSchema(req);
    authDb.getUser(req.body.username).then((user: any) => {
      const isValid = validPassword(req.body.password, user.hash, user.salt);

      if (isValid) {
        const tokenObject = issueJWT(user);
        res.status(200).json({success: true, token: tokenObject.token, expiresIn: tokenObject.expires});
      } else
        throw {
          status: 401,
          message: "you entered the wrong password"
        };
    });
  } catch (err) {
    next(err);
  }
};

export default {
  register,
  login
};
