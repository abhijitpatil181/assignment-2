const express = require("express");
const products = require("./db/products_db.json");
const employees = require("./db/employees_db.json");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Express server is running on port 5000");
});

app.get("/data", (req, res) => {
  console.log("Fetching data...");
  res.status(200).json({
    message: "Data Fetched Successfully",
    data: [{ employees: employees }, { products: products }],
  });
  res.send("Response sent");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
