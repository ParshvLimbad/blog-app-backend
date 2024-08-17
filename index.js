const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model");
const productRoutes = require("./routes/product.route");

const app = express();

app.use(express.json());

//routes
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Hello from Node API");
});

mongoose
  .connect(
    "mongodb+srv://plimbad347:crudtest123@crud-testing-db.wxwjm.mongodb.net/Node-API?retryWrites=true&w=majority&appName=CRUD-testing-db"
  )
  .then(() => {
    console.log("Connected to db");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((error) => console.log(error));
