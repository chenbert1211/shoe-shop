const router = require("express").Router();
const {
  models: { User, Order },
} = require("../db");


router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ["id", "username"],
    });
    res.send(users);
  } catch (err) {
    next(err);
  }
});

router.get("/:userId", async (req, res, next) => {
  const id = req.params.userId;
  try {
    const user = await User.findByPk(
        id, {include: Order});
    

    if (user) {
      res.send(user);
    } else {
      res.status(404).send(`User does not exist`);
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;