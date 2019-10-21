const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const router = express.Router();
var path = require("path");
const __dirname_view = "view/";

const { signIn, welcome, refresh } = require("./handlers");

app.use(cookieParser());

app.get("/", (req, res) => {
    console.log("@ Home");
    // res.send("Home");
    res.sendFile(path.join(__dirname + "/login.html"));
});

app.post("/signin", signIn);
app.post("/refresh", refresh);

app.get("/welcome", welcome);

// ---
app.listen(8000);