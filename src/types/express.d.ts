import { Request } from "express";

type User = {
  id: number;
};

interface User extends user {}

declare global {
  namespace Express {
    export interface Request {
      user: User;
    }
  }
}
