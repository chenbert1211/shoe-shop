const router = require("express").Router();
const e = require("express");
const {
  models: { Product, Order_Product },
} = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const products = await Product.findAll({include: Order_Product});
    res.json(products);
  } catch (err) {
    next(err);
  }
});

router.get("/:productId", async (req, res, next) => {
  const id = req.params.productId;
  try {
    const product = await Product.findByPk(id, {include: Order_Product});
    if (product) {
      res.send(product);
    } else {
      res.status(404).send(`Shoe does not exist`);
    }
  } catch (err) {
    next(err);
  }
});

router.delete("/delete", async(req, res, next) => {
  try {
    let id = req.body.id
    console.log(id)
    const delProduct = await Product.findByPk(id)
    await delProduct.destroy()
    res.send(delProduct)
  } catch (error) {
    next(error)
  }
})

module.exports = router;
