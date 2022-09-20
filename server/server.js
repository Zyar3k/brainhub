require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server init");
});

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server is listening on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
