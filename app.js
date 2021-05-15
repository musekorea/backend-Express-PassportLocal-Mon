import express from 'express';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import dotenv from 'dotenv';
import router from './router';
dotenv.config();
export const app = express();

//body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//session
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: process.env.SESSION_URL }),
  })
);
//router
app.use(router);

export default app;
