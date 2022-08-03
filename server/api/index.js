const router = require("express").Router();

router.use("/users", require("./users"));
router.use("/products", require("./products"));
router.use("/order_product", require("./order_product"));

router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

module.exports = router;
