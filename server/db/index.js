//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/User");
const Product = require("./models/Product");
const Order = require("./models/Order");

//associations could go here!

Order.belongsTo(User);
User.hasMany(Order);

// Product.belongsToMany(Order, { through: Order_Product });
// Order.belongsToMany(Product, { through: Order_Product });

module.exports = {
  db,
  models: {
    User,
    Product,
  },
};
