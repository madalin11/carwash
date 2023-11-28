import express, { Request, Response } from "express";
import { body } from "express-validator"
import { User } from "../models/user";
import { BadRequestError } from "../errors/bad-request-error";
import { validateRequest } from "../middlewares/validate-request";
import jwt from "jsonwebtoken";
import { GroupAuthorization } from "../models/group-authorization";

const router = express.Router();

router.post('/register',
    [
        body('email')
            .isEmail()
            .withMessage('Email must be provided'),
        body('password')
            .trim()
            .isLength({ min: 6, max: 20 })
            .withMessage('Password must be at least 6 and 20 characters'),
        body('firstName')
            .trim()
            .isLength({ min: 2, max: 20 })
            .matches('^[\\w\'\\-,.][^0-9_!¡?÷?¿/\\\\+=@#$%ˆ&*(){}|~<>;:[\\]]{2,}$')
            .withMessage('Invalid first name'),
        body('lastName')
            .trim()
            .isLength({ min: 2, max: 20 })
            .matches('^[\\w\'\\-,.][^0-9_!¡?÷?¿/\\\\+=@#$%ˆ&*(){}|~<>;:[\\]]{2,}$')
            .withMessage('Invalid last name'),
        body('phoneNumber')
            .trim()
            .matches('^(\\+4|)?(07[0-8]{1}[0-9]{1}|02[0-9]{2}|03[0-9]{2}){1}?(\\s|\\.|\\-)?([0-9]{3}(\\s|\\.|\\-|)){2}$')
            .withMessage('Invalid phone number'),
    ],
    validateRequest,
    async (req: Request, res: Response) => {
        const { email, password, firstName, lastName, phoneNumber } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            throw new BadRequestError('Email in use');
        }

        const user = User.build({
            email,
            password,
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            groupAuthorization: new GroupAuthorization('USER').name
        })
        await user.save();

        // generate JWP
        const userJwt = jwt.sign({
                id: user.id,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                phoneNumber: user.phoneNumber,
                groupAuthorization: user.groupAuthorization
            },
            process.env.JWT_KEY!
        );

        res.status(201).send({ token: userJwt });
    });

export { router as registerRouter };