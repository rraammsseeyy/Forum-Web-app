const express = require("express");
const app = require("express")();
const dotenv = require("dotenv");
const cors = require("cors");
const helmet = require("helmet");
const mongoose = require("mongoose");
const http = require("http").Server(app);

const userRoute = require("./apis/api");

dotenv.config();

const port = process.env.PORT || 5023;

const ConnectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const db = `${process.env.MONGODB}`;

const nigeriaTimeZone = "Africa/Lagos";
process.env.TZ = nigeriaTimeZone;
Intl.DateTimeFormat().resolvedOptions().timeZone;

// app.use(helmet({ dnsPrefetchControl: false }));
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

// parse application/json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

 

// var allowlist = [, "http://localhost:5173"];
// const corsOption = function (req, callback) {
//   var corsOptionsDelegate;
//   if (allowlist.indexOf(req.header("Origin")) !== -1) {
//     corsOptionsDelegate = {
//       credentials: true,
//       origin: true,
//       methods: ["GET", "POST", "DELETE"],
//       optionSuccessStatus: 200,
//     };
//   } else {
//     corsOptionsDelegate = { origin: false };
//   }
//   callback(null, corsOptionsDelegate);
// };

const corsOption = {
    origin: "*" ,
    methods: ["GET", "POST"],
    credentials: true,
    optionSuccessStatus:200,
}

app.use(cors(corsOption));

 

app.get("/", (req, res) => {
  return res.status(404).sendFile(__dirname + "/index.html");
});
app.use("/api/user", cors(corsOption), userRoute);


 
 

mongoose
  .connect(db, ConnectionParams)
  .then((result) => {
    console.log("Successfully connected to server!");
  })
  .catch((error) => {
    console.log("Error connecting", error);
  });

http.listen(port, () => console.log(`Server started at ${port}`));
