const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const supplierRoutes = require("./routes/supplierRoutes");
const productRoutes = require("./routes/productRoutes");

const app = express();

// Kết nối MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/crudMVC");

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// Serve static files
app.use(express.static('public'));

// Route cho trang chủ
app.get("/", (req, res) => {
  res.render("index");
});

// Routes
app.use("/suppliers", supplierRoutes);
app.use("/products", productRoutes);

app.listen(3000, () => console.log("✅ Server chạy tại http://localhost:3000"));
