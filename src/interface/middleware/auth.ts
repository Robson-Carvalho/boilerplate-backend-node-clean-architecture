import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

export const authenticateToken = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) res.sendStatus(401);

  jwt.verify(token as string, process.env.JWT_SECRET as string, (err, user) => {
    if (err) return res.sendStatus(403);

    req.user = user;

    next();
  });
};
