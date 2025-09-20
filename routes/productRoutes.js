const express = require("express");
const router = express.Router();
const productController = require("../controllers/ProductController");

// Danh sách sản phẩm
router.get("/", productController.index);

// Form tạo sản phẩm mới
router.get("/new", productController.createForm);

// Xử lý lưu sản phẩm mới
router.post("/new", productController.create);

// Form sửa sản phẩm
router.get("/edit/:id", productController.editForm);

// Xử lý update sản phẩm
router.post("/edit/:id", productController.update);

// Xóa sản phẩm
router.get("/delete/:id", productController.delete);

module.exports = router;
