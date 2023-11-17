import express from "express";
import authRoutes from "./routes/auth.js";

import cors from "cors";
const app = express();
// app.use(jsonParser);
const corsOrigin = {
  origin: "http://localhost:3004", //or whatever port your frontend is using
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOrigin));
app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(4000, () => {
  console.log("running on 4000");
});
