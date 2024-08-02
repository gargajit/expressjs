import express from "express";
const app = express();    // object
const port = 3000;

// accesssing localhost index page
app.get("/", (req, res) => {
    res.send("Hello World!");    // sends response as "Hello World!" back to the browser 
});

// app.listen(port, callback);    //listen method
app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});
