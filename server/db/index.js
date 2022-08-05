//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/User");
const Product = require("./models/Product");
const Order = require("./models/Order");
const Order_Product = require("./models/Order_Product");

//associations could go here!

Order.belongsTo(User);
User.hasMany(Order);


///chek to test
Order_Product.belongsTo(Product);
Product.hasMany(Order_Product);

Order_Product.hasOne(Order);
Order.hasMany(Order_Product);

// Product.belongsToMany(Order, { through: Order_Product });
// Order.belongsToMany(Product, { through: Order_Product });
module.exports = {
  db,
  models: {
    User,
    Product,
    Order,
    Order_Product,
  },
};
