const Sequelize = require("sequelize");
const db = require("../db");

const Order_Product = db.define("order_product", {
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  size: {
    type: Sequelize.DECIMAL,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isIn: [["W", "M", "U"]],
      notEmpty: true,
    },
  },
  price: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = Order_Product;
