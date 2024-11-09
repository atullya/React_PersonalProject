require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const authRoute = require("./routes/authRoute.js");
const homeRoute = require("./routes/homeRoute.js");
const adminRoute = require("./routes/adminRoute.js");
const connectDb = require("./database/db.js");

app.use(express.json());

//db connection
connectDb();

app.use("/api/auth", authRoute);
app.use("/api/welcome", homeRoute);
app.use("/api/admin", adminRoute);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to HomePaasdfge" });
});
app.listen(PORT, function () {
  console.log(`Server Running on PORT ${PORT}`);
});
