const Sequelize = require("sequelize");
const db = require("../db");

const Order = db.define("order", {
  type: Sequelize.STRING,
  status: {
    // type: Sequelize.ENUM("open", "closed"),
    type:Sequelize.STRING,
    defaultValue: "open",
    validate: {
      notEmpty: false,
    },
  },
},
{timestamps:false}

);
module.exports = Order;
