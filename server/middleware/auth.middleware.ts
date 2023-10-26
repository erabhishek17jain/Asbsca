import { Request, Response, NextFunction } from 'express';
import JWT from 'modules/jwt';


export default function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization?.split(' ')[1];
  if (token) {
    const payload = JWT.fn.verifyToken(token);
    if (payload) {
      res.locals.user = payload;
      next();
    } else {
      res.status(401).json({ message: 'Unauthorized' });
    }
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
}


