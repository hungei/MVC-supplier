const express = require("express");
const router = express.Router();
const supplierController = require("../controllers/SupplierController");

// Danh sách nhà cung cấp
router.get("/", supplierController.index);

// Form tạo nhà cung cấp mới
router.get("/new", supplierController.createForm);

// Xử lý lưu nhà cung cấp mới
router.post("/new", supplierController.create);

// Form sửa nhà cung cấp
router.get("/edit/:id", supplierController.editForm);

// Xử lý cập nhật nhà cung cấp
router.post("/edit/:id", supplierController.update);

// Xóa nhà cung cấp
router.get("/delete/:id", supplierController.delete);

module.exports = router;
