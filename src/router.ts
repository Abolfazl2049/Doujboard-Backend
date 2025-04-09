import express from "express";
import authRouter from "./services/auth/router.js";
const appRouter = express.Router();
appRouter.get("/", (req, res) => {
  res.status(200).send(`<pre> Doujboard API Server.

     <a href='/admin'>admin panel </a> 
     
     <a href='/docs'>docs </a></pre>`);
});
appRouter.use("/auth", authRouter);
export {appRouter};
