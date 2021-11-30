const connectionString  = require('./settings');
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const mongoose = require("mongoose");
const userRouter = require("./routes/users");
const authRouter = require("./routes/auth");
const dotenv = require( "dotenv")
//dotenv.config();
const app = express();

mongoose.connect(connectionString, { useNewUrlParser: true }, () => {
  console.log(" connected to MongoDB");
})

//middleware 
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users", userRouter);
app.use( "/api/auth", authRouter )

app.listen(3000, () => {
  console.log("backend server is running");
});
