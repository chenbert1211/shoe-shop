const router = require("express").Router();
const e = require("express");
const {
  models: { Order,Product,Order_Product },
} = require("../db");

//localhost/order/
//GET
router.get("/", async (req, res, next) => {
  try {
    // console.log('hii' ,req.body)
    const orders = await Order.findAll();
    res.json(orders);
  } catch (err) {
    next(err);
  }
});

//localhost/order/
router.get("/", async (req, res, next) => {
  const id = req.params.userId;
  try {
    const singleOrder = await Order.findone({
      where: {
        id:id
      }
    });
    res.json(singleOrder);
  } catch (err) {
    next(err);
  }
});

//POST
//localhost/order/:userId
router.post("/", async(req,res,next) =>{
  try {
    // console.log(req.body)
    const newOrder = await Order.create(req.body)
    // console.log(newOrder)
    res.status(201).send(newOrder)
  } catch (err) {
    next(err);
  }
})


router.put("/", async(req,res,next) =>{
  try {
    const updateOrder = await Order.findByPk(req.body.id)
    updateOrder.update(req.body.reciept)
    res.send(updateOrder)
  } catch (err) {
    next(err);
  }
})

//DELETE
//localhost/order/delete/:orderId
router.delete("/delete/:orderId", async(req, res, next) => {
  try {
    let id= req.params.id
    const  order = await Order.findByPk(id)
    await order.destroy()
    res.send(order)
  } catch (error) {
    next(error)
  }
})



module.exports = router;


