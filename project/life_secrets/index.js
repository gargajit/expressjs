import express from "express";
import bodyParser from "body-parser";

import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();
const port = 3000;

var verifiedUser = false;

app.use(bodyParser.urlencoded({ extended: true }));


function verifyPassword(req, res, next) {
    var pass = req.body["password"];
    if(pass === "abc123") {
        verifiedUser = true;
    }
    next();
}

app.use(verifyPassword);


app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post('/check', (req, res) => {
    if(verifiedUser) {
        res.sendFile(__dirname + "/public/secret.html");
    }
    else {
        res.redirect("/");
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
