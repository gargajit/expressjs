import express from "express";

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("<h1>Hey! I am Ajit.</h1> <p>This page is sent back from the local server created using <b>expressjs</b>.<br/>Find more <a href=\"http://localhost:3000/about\">About Me.</a><br/>You can always <a href=\"http://localhost:3000/contact\">Contact</a> me.</p>");
});

app.get('/contact', (rwq, res) => {
    res.send("<h1>Contact</h1><p>Why do you even want to contact me! :P <br/> I ain't telling you my contact number, I have nothing to talk :P. <br/>Go back to <a href=\"http://localhost:3000/\">Home.</a></p>");
});

app.get('/about', (req, res) => {
    res.send("<h1>About Ajit</h1><p>There is not much about me anyway :D . <br/>Go back to <a href=\"http://localhost:3000/\">Home.</a></p>");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
