import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"

interface UserPayload {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    groupAuthorization: string;
}

//augmentative
declare global {
    namespace Express {
        interface Request {
            currentUser?: UserPayload;
        }
    }
}

export const currentUser = (req: Request, res: Response, next: NextFunction) => {
    const bearerHeader = req.headers['authorization'];

    if (typeof bearerHeader === 'undefined') {
        return next();
    }

    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];

    try {
        req.currentUser = jwt.verify(bearerToken, process.env.JWT_KEY!) as UserPayload;
    } catch (err) {
    }
    next();
}