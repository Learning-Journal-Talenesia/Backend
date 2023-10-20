import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import postroutes from "./routes/questions.route.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT;
const CONNECTION_URL = process.env.CONNECTION_URL;

app.use(bodyParser.json({ limit: "30mb", extended: true })); //This is because we are gonna send images so we limit it to 30mb
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/", postroutes);

mongoose
  .connect(`${CONNECTION_URL}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));

// mongoose.set('useFindAndModify', false); // to avoid warnings
