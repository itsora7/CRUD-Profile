import express from "express";
import morgan from "morgan";
import cors from "cors";
const app = express();

const PORT = 8000;

//middlewaes
app.use(express.json());
app.use(cors()); //allow cross origin access from diffferent frontend app
app.use(morgan("dev")); //log all the server requests
//db connecction
import { connectDB } from "./src/routers/config/dbConfig.js";
connectDB();
//router
import userRouter from "./src/routers/routers/userRouter.js";
app.use("/users", userRouter);

//rewuest handler
app.use("/", (req, res) => {
  res.json({
    message: "helllow world",
  });
});

// run node app in the wev server
app.listen(PORT, (err) => {
  err
    ? console.log(err)
    : console.log(`server is spinning at http://localhost:${PORT}`);
});
