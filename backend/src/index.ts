import express from 'express';
import 'express-async-errors';
import { json } from "express";
import cors from 'cors';

const connectDB = require('./config/db');
const dotenv = require('dotenv').config();

import { meRouter } from "./routes/me";
import { loginRouter } from "./routes/login";
import { logoutRouter } from "./routes/logout";
import { registerRouter } from "./routes/register";

import { errorHandler } from "./middlewares/error-handler";

const app = express();
app.use(cors());
app.use(json());

app.use(meRouter);
app.use(logoutRouter);
app.use(loginRouter);
app.use(registerRouter);
app.use(errorHandler);

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Access-Control-Allow-Origin');
    res.setHeader('Access-Control-Allow-Credentials', "true");
    next();
});

connectDB().then(() => {
    if (!process.env.JWT_KEY) {
        throw new Error('JWT_KEY not specified');
    }
    app.listen(3070, () => console.log('Listening on port 3070'));
});

