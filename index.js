const express = require("express");
const mongoose = require("mongoose");
const Blog = require("./models/blog.model");
const blogRoutes = require("./routes/blog.route");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
//routes
app.use("/api/blogs", blogRoutes);

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
