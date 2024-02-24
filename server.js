const express = require("express");
const app = express();
const cors = require("cors");

const dotenv = require("dotenv");
dotenv.config("./.env");

const PORT = process.env.BUDGET_PORT || 5000;

app.use(cors());
app.use(express.json());

app.use(require("./router/route.js"));

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
