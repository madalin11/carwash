import express from "express";

const router = express.Router();

router.post('/logout', (req, res) => {
    res.send({ logout: true });
});

export { router as logoutRouter };