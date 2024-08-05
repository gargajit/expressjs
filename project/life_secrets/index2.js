import express from "express";
import bodyParser from "body-parser";
import session from "express-session";

import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

function verifyPassword(req, res, next) {
    var pass = req.body["password"];
    if(pass === "abc123") {
        req.session.verifiedUser = true;
    }
    next();
}

app.use(verifyPassword);


app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post('/check', (req, res) => {
    if(req.session.verifiedUser) {
        res.sendFile(__dirname + "/public/secret.html");
    }
    else {
        res.redirect("/");
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
