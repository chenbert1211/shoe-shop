const Sequelize = require('sequelize');
const db = require('../db');

const Order = db.define(
  'order',
  {
    status: {
      type: Sequelize.STRING,
      defaultValue: 'open',
      validate: {
        notEmpty: false,
      },
    },
    orderPrducts: {
      type: Sequelize.ARRAY(Sequelize.JSON),
      defaultValue: [],
    },
    recieptNumer: {
      type: Sequelize.STRING,
    },
  },

  { timestamps: false }
);
module.exports = Order;
