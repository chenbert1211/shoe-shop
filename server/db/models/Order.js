const Sequelize = require("sequelize");
const { SequelizeMethod } = require("sequelize/types/utils");
const db = require("../db");

const Order = db.define("order", {
  type: Sequelize.STRING,
  status: {
    // type: Sequelize.ENUM("open", "closed"),
    defaultValue: "open",
    validate: {
      notEmpty: false,
    },
  },
});
module.exports = Order;
