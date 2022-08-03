const router = require("express").Router();
const e = require("express");
const {
  models: { Product },
} = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (err) {
    next(err);
  }
});

router.get("/:productId", async (req, res, next) => {
  const id = req.params.productId;
  try {
    const product = await Product.findOne({
      where: {
        id: id,
      },
    });
    if (product) {
      res.send(product);
    } else {
      res.status(404).send(`Shoe does not exist`);
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
