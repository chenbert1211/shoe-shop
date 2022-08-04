const router = require("express").Router();
const e = require("express");
const {
  models: { Order,Product },
} = require("../db");

//localhost/order/
//GET
router.get("/", async (req, res, next) => {
  try {
    const orders = await Order.findAll();
    res.json(orders);
  } catch (err) {
    next(err);
  }
});

//

//POST
//localhost/order/:userId
router.post("/:userId", async(req,res,next) =>{
  try {
    console.log("id", req.params.id)
    const newOrder = await Order.create(req.params)
    res.status(201).send(newOrder)
  } catch (err) {
    next(err);
  }
})


module.exports = router;

/*
router.post("/", async(req, res, next) => {
  try {
    // console.log("req.body campuses create:", req.body)
    const newCampus = await Campus.create(req.body)
    res.status(201).send(newCampus)
  } catch (error) {
    next(error)
  }
})

*/
