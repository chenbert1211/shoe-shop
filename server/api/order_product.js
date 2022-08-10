const router = require('express').Router();
const e = require('express');
const {
  models: { Order_Product, Product },
} = require('../db');

router.get('/', async (req, res, next) => {
  try {
    const order_product = await Order_Product.findAll();
    res.json(order_product);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  const id = req.params.id;

  try {
    const order_product = await Order_Product.findByPk(id, {
      include: Product,
    });
    if (order_product) {
      res.send(order_product);
    } else {
      res.status(404).send(`Order does not exist`);
    }
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const order_product = res.json(order_product);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
