import express, { Response, Request } from "express";
import { currentUser } from "../middlewares/current-user";
import { requireAuth } from "../middlewares/require-auth";

const router = express.Router();

router.get('/me', currentUser, requireAuth, (req:Request, res: Response) => {
    res.send({ ...req.currentUser || null });
});

export { router as meRouter };