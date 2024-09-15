import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Welcome to the Homepage!</h1><p>This website is created using Node and ExpressJS.</p>");
});

app.get("/", (req, res) => {
    res.send("<h1>About Us</h1><p>We are learning backend.</p>");
});
        
app.use((req, res) => {
    res.status(404).send("<h1>Page Not Found</h1>");
}); 

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);    
});
