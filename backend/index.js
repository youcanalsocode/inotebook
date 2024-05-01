const connectToMongo = require("./db");
connectToMongo();

const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
//Available routing
app.use("/api/auth", require("./routes/auth"));
app.use("/api/auth", require("./routes/auth"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
