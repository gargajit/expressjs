import express from "express";
import bodyParser from "body-parser";  // body-parser a pre-defined type middleware

import { dirname } from "path";        // import the directory name from the path module, that is bundled with NodeJS
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));   // all of the path up until the path that we want to access stored

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));    // Express use method

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");    // the stored path along with the remaning path of the file
});

app.post("/submit", (req, res) => {
  console.log(req.body);            // log the key value data of the form when submit button is pressed
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
