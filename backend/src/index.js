import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/users.js";


const app = express();

app.use(express.json());
app.use(cors());
app.use("/", userRouter);

mongoose.connect("mongodb+srv://vasudxt:vasu123@logindetails.eqblbjl.mongodb.net/loginDetails?retryWrites=true&w=majority");

app.listen(8080, () => console.log("Server Started"));
