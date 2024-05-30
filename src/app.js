import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

//app.use is for adding middlewares
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.json({ limit: "16kb" })); //accepting json data of 16kb limit. (body-parser is an alternate, which is not required anymore)
app.use(express.urlencoded({ extended: true })); //with extended we can use objects inside objects as well
app.use(express.static("public")); //configuration for adding publically available assets inside public folder
app.use(cookieParser()); //config for cookies

// routes import
import userRouter from "./routes/user.routes.js";

//routes declaration
app.use("/api/v1/users", userRouter);


export { app };
