import express from "express";
import morgan from "morgan";    // morgan is a logger middleware

const app = express();
const port = 3000;

// morgan(format, options)
app.use(morgan('tiny'));    // 'combined', 'dev', 'tiny' etc are pre-defined formats

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
