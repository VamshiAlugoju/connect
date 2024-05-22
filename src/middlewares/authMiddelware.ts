import { Request, Response, NextFunction } from "express";

export async function veriifyUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const user = { id: 1 };
    if (!user) {
    }
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
  }
}
