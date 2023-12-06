import CONFIG from "config";
import { Request, Response, NextFunction } from "express";
import JWT from "modules/jwt";

export default class Auth {
  private static instance = new this();
  private constructor() {}
  public static get isadmin() {
    return this.instance.isadmin;
  }

  public static get isuser() {
    return this.instance.isuser;
  }

  private isadmin = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (token) {
      const payload = JWT.fn.verifyToken(token);
      if (payload) {
        if (payload.role !== CONFIG.ADMIN_ROLE_ID) {
          return res.status(409).json({ message: "Forbidden" });
        }
        res.locals.user = payload;
        next();
      } else {
        res.status(401).json({ message: "Unauthorized" });
      }
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  };

  private isuser = (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization?.split(" ")[1];
      if (token) {
        const payload = JWT.fn.verifyToken(token);
        console.log(payload);
        if (payload) {
          res.locals.user = payload;
          next();
        } else {
          res.status(401).json({ message: "Unauthorized" });
        }
      } else {
        res.status(401).json({ message: "Unauthorized" });
      }
    } catch (error) {
      res.status(401).json({ message: "Unauthorized" });
    }
  };
}
