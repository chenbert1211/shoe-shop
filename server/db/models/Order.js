const Sequelize = require("sequelize");
const db = require("../db");

const Order = db.define("order", {
  status: {
    type: Sequelize.ENUM("open", "closed"),
    defaultValue: "open",
    validate: {
      notEmpty: true
  }
  },
});
module.exports = Order;
