import express, { Request, Response } from "express";
import { body } from "express-validator";
import { BadRequestError } from "../errors/bad-request-error";
import { validateRequest } from "../middlewares/validate-request";
import { User} from "../models/user";
import { Password } from "../services/password";
import jwt from "jsonwebtoken";


const router = express.Router();

router.post('/login', [
        body('email')
            .isEmail()
            .withMessage('Email must be valid'),
        body('password')
            .trim()
            .notEmpty()
            .withMessage('You must supply a password')
    ],
    validateRequest,
    async (req: Request, res: Response) => {
        const { email, password } = req.body;

        const existingUser = await User.findOne({ email });

        if(!existingUser) {
            throw new BadRequestError('Invalid credentials');
        }

        const passwordsMatch = await Password.compare(existingUser.password, password);

        if(!passwordsMatch) {
            throw new BadRequestError('Invalid credentials');
        }

        // generate JWP
        const userJwt = jwt.sign({
                id: existingUser.id,
                email: existingUser.email,
                firstName: existingUser.firstName,
                lastName: existingUser.lastName,
                phoneNumber: existingUser.phoneNumber,
                groupAuthorization: existingUser.groupAuthorization
            },
            process.env.JWT_KEY!
        );

        res.status(200).send({ token: userJwt });
    });

export { router as loginRouter };