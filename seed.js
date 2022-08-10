const { green, red } = require('chalk');

const {
  db,
  models: { Product, User, Order_Product },
} = require('./server/db');

/***********************
 PRODUCTS DATA
***************************/
const products = [
  {
    name: 'Air_Jordan_11s',
    imageUrl: 'https://cdn.flightclub.com/2600/TEMPLATE/319254/1.jpg',
    description:
      '6 Dec 1995: A close-up shot of Air Jordans as they appear on the court during the game between the New York Knicks and the Chicago Bulls at the United Center in Chicago, Illinois. The Bulls defeated the Knicks 101-94. Mandatory Credit: Jonathan Daniel /Allsport',
    brand: 'Nike',
    quantity: 1,

    price: 220,
    stylecode: '100',
    gender: 'male',
  },
  {
    name: 'Air Jordan',
    imageUrl: 'https://cdn.flightclub.com/2600/TEMPLATE/320354/1.jpg',

    description:
      '6 Dec 1995: A close-up shot of Air Jordans as they appear on the court during the game between the New York Knicks and the Chicago Bulls at the United Center in Chicago, Illinois. The Bulls defeated the Knicks 101-94. Mandatory Credit: Jonathan Daniel /Allsport',
    brand: 'Nike',
    quantity: 1,

    price: 220,
    stylecode: '101',
    gender: 'male',
  },
  {
    name: 'Yeezy Boots Pro',
    imageUrl: 'https://cdn.flightclub.com/2200/TEMPLATE/317241/1.jpg',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",

    brand: 'Adidas',
    quantity: 1,
    stylecode: '102',
    gender: 'male',
  },
  {
    name: 'Yeezy Boots Sport',
    imageUrl: 'https://cdn.flightclub.com/2200/TEMPLATE/320358/1.jpg',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",

    brand: 'Adidas',
    quantity: 1,
    stylecode: '103',
    gender: 'male',
  },
  {
    name: 'Air Max Pro',
    imageUrl: 'https://cdn.flightclub.com/2600/TEMPLATE/283552/1.jpg',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

    brand: 'Nike',
    quantity: 1,

    price: 210,
    stylecode: '104',
    gender: 'male',
  },

  {
    name: 'Zoomie ',
    imageUrl: 'https://cdn.flightclub.com/2200/TEMPLATE/187925/1.jpg',
    description:
      'African-American rapper, songwriter, actor and record producer Antwan André Patton (born 1975), known by his stage name Big Boi, is best known for being a member of the southern hip hop duo Outkast. Pair of white Nike sneakers with glitter red, blue, and yellow sections worn by Big Boi of Outkast. The low-top sneakers have white leather on the perforated top toes, the front half of the side vamps, the upper portion of the heel cap, and on the facing of the tongues. ',
    brand: 'Nike',
    quantity: 1,
    stylecode: '105',
    gender: 'male',
  },
  {
    name: 'Retro Desert Style',
    imageUrl: 'https://cdn.flightclub.com/2200/TEMPLATE/299067/1.jpg',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",

    brand: 'Nike',
    quantity: 1,
    stylecode: '106',
    gender: 'male',
  },
  {
    name: 'Universty Gold',
    size: 6,
    imageUrl: 'https://cdn.flightclub.com/2200/TEMPLATE/155691/1.jpg',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",

    brand: 'Nike',
    quantity: 1,
    stylecode: '107',
    gender: 'male',
  },
  {
    name: 'Foam Sport',
    imageUrl: 'https://cdn.flightclub.com/2200/TEMPLATE/805926/1.jpg',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",

    brand: 'Nike',
    quantity: 1,
    stylecode: '108',
    gender: 'male',
  },
  {
    name: 'Soldier Green Sport',
    imageUrl: 'https://cdn.flightclub.com/2200/TEMPLATE/152361/1.jpg',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",

    brand: 'Nike',
    quantity: 1,
    stylecode: '109',
    gender: 'male',
  },
  {
    name: 'Air Max S',

    imageUrl: 'https://cdn.flightclub.com/2600/TEMPLATE/311754/1.jpg',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

    brand: 'Nike',
    quantity: 1,
    stylecode: '110',
    gender: 'male',
  },
  {
    name: 'MONO ICE',
    imageUrl: 'https://cdn.flightclub.com/2200/TEMPLATE/260879/1.jpg',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",

    brand: 'Adidas',
    quantity: 1,
    stylecode: '111',
    gender: 'women',
  },
  {
    name: 'POLY ORANGE',
    imageUrl: 'https://cdn.flightclub.com/2200/TEMPLATE/266530/1.jpg',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",

    brand: 'Adidas',
    quantity: 1,
    stylecode: '112',
    gender: 'women',
  },
  {
    name: 'NMD Pink',
    imageUrl: 'https://cdn.flightclub.com/1250/TEMPLATE/800008/1.jpg',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",

    brand: 'Adidas',
    quantity: 1,
    stylecode: '113',
    gender: 'women',
  },
  {
    name: 'Winds Dunk Rse',
    imageUrl: 'https://cdn.flightclub.com/2200/TEMPLATE/296986/1.jpg',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",

    brand: 'Nike',
    quantity: 1,
    stylecode: '114',
    gender: 'women',
  },
  {
    name: 'Foam-Sport S',
    imageUrl: 'https://cdn.flightclub.com/2200/TEMPLATE/805971/1.jpg',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",

    brand: 'Nike',
    quantity: 1,
    stylecode: '115',
    gender: 'women',
  },
  {
    name: 'Retro Desert Style',
    size: 9,
    imageUrl: 'https://cdn.flightclub.com/2200/TEMPLATE/299067/1.jpg',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",

    category: 'M',
    brand: 'Nike',
    quantity: 1,
  },
  {
    name: 'Off-white nike Black',
    size: 9,
    imageUrl: 'https://cdn.flightclub.com/2200/TEMPLATE/805926/1.jpg',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",

    category: 'M',
    brand: 'Nike',
    quantity: 1,
  },
  {
    name: 'Off-white and Black',
    size: 6,
    imageUrl: 'https://cdn.flightclub.com/2200/TEMPLATE/805971/1.jpg',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",

    category: 'W',
    brand: 'Nike',
    quantity: 1,
  },
  {
    name: 'Universty Gold',
    size: 6,
    imageUrl: 'https://cdn.flightclub.com/2200/TEMPLATE/155691/1.jpg',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",

    category: 'M',
    brand: 'Nike',
    quantity: 1,
  },
  {
    name: 'Soldier and Pine Green',
    size: 9,
    imageUrl: 'https://cdn.flightclub.com/2200/TEMPLATE/152361/1.jpg',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",

    category: 'M',
    brand: 'Nike',
    quantity: 1,
  },
  {
    name: 'Yeezy Boots Red',
    size: 8,
    imageUrl: 'https://cdn.flightclub.com/2200/TEMPLATE/317241/1.jpg',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",

    category: 'M',
    brand: 'Nike',
    quantity: 1,
  },
];

/***********************
 USERS DATA
***************************/

const users = [
  {
    username: 'watson',
    password: 'watson123',

    firstName: 'Watson',
    lastName: 'Chen',
    email: 'watson@gmail.com',
    creditCard: '1234567890123456',
    address: '200 Lake Rd',
    phoneNumber: '6504424444',
  },
  {
    username: 'Bert',
    password: 'bert123',
    firstName: 'Bert',
    lastName: 'Chen',
    email: 'bert@gmail.com',
    creditCard: '1234567890123457',
    address: '300 Lake Rd',
    phoneNumber: '6504424455',
  },
  {
    username: 'Cole',
    password: 'cole123',
    firstName: 'Cole',
    lastName: 'Berman',
    email: 'cole@gmail.com',
    creditCard: '1234567890123458',
    address: '400 Lake Rd',
    phoneNumber: '6504424466',
  },
  {
    username: 'Emre',
    password: 'emre123',
    firstName: 'Emre',
    lastName: 'Basbaydar',
    email: 'emre@gmail.com',
    creditCard: '1234567890123459',
    address: '500 Lake Rd',
    phoneNumber: '6504424477',
  },
];

/***********************
 MEN ORDER_PRODUCTS
***************************/
const menSize_orderProducts = [
  {
    quantity: 1,

    size: 7,
    category: 'M',
    price: 70000,
  },
  {
    quantity: 1,

    size: 7.5,
    category: 'M',
    price: 70000,
  },
  {
    quantity: 1,

    size: 8,
    category: 'M',
    price: 70000,
  },
  {
    quantity: 1,

    size: 8.5,
    category: 'M',
    price: 70000,
  },
  {
    quantity: 1,

    size: 9,
    category: 'M',
    price: 70000,
  },
  {
    quantity: 1,

    size: 9,
    category: 'M',
    price: 70000,
  },
  {
    quantity: 1,

    size: 10,
    category: 'M',
    price: 70000,
  },
  {
    quantity: 1,

    size: 11,
    category: 'M',
    price: 70000,
  },
  {
    quantity: 1,

    size: 11.5,
    category: 'M',
    price: 70000,
  },
  {
    quantity: 1,

    size: 12,
    category: 'M',
    price: 70000,
  },
  {
    quantity: 1,

    size: 12.5,
    category: 'M',
    price: 70000,
  },
  {
    quantity: 1,

    size: 13,
    category: 'M',
    price: 70000,
  },
  {
    quantity: 1,

    size: 13.5,
    category: 'M',
    price: 70000,
  },
  {
    quantity: 1,

    size: 14,
    category: 'M',
    price: 70000,
  },
];

/********************
 WOMEN ORDER_PRODUCTS
**********************/

const womenSize_orderProducts = [
  {
    quantity: 1,

    size: 5,
    category: 'W',
    price: 70000,
  },
  {
    quantity: 1,

    size: 5.5,
    category: 'W',
    price: 70000,
  },
  {
    quantity: 1,

    size: 6,
    category: 'W',
    price: 70000,
  },
  {
    quantity: 1,

    size: 6.5,
    category: 'W',
    price: 70000,
  },
  {
    quantity: 1,

    size: 7,
    category: 'W',
    price: 70000,
  },
  {
    quantity: 1,

    size: 7.5,
    category: 'W',
    price: 70000,
  },
  {
    quantity: 1,

    size: 8,
    category: 'W',
    price: 70000,
  },
  {
    quantity: 1,

    size: 8.5,
    category: 'W',
    price: 70000,
  },
  {
    quantity: 1,

    size: 9,
    category: 'W',
    price: 70000,
  },
  {
    quantity: 1,

    size: 9.5,
    category: 'W',
    price: 70000,
  },
  {
    quantity: 1,

    size: 10,
    category: 'W',
    price: 70000,
  },
  {
    quantity: 1,

    size: 10.5,
    category: 'W',
    price: 70000,
  },
  {
    quantity: 1,

    size: 11,
    category: 'W',
    price: 70000,
  },
  {
    quantity: 1,

    size: 11.5,
    category: 'W',
    price: 70000,
  },
  {
    quantity: 1,

    size: 12,
    category: 'W',
    price: 70000,
  },
];

const seed = async () => {
  try {
    await db.sync({ force: true });

    // seed your database here!
    await Promise.all(
      products.map((product) => {
        return Product.create({
          name: product.name,
          brand: product.brand,
          gender: product.gender,
          stylecode: product.stylecode,
          imageUrl: product.imageUrl,
          description: product.description,
        });
      })
    );

    for (let i = 1; i < products.length; i++) {
      if (products[i].gender === 'male') {
        await Promise.all(
          menSize_orderProducts.map((orderProduct) => {
            return Order_Product.create({
              productId: i,
              quantity: orderProduct.quantity,
              size: orderProduct.size,
              category: orderProduct.category,
              price: orderProduct.price,
            });
          })
        );
      } else {
        await Promise.all(
          womenSize_orderProducts.map((orderProduct) => {
            return Order_Product.create({
              productId: i,
              quantity: orderProduct.quantity,
              size: orderProduct.size,
              category: orderProduct.category,
              price: orderProduct.price,
            });
          })
        );
      }
    }

    await Promise.all(
      users.map((user) => {
        return User.create(user);
      })
    );
  } catch (err) {
    console.log(red(err));
  }
};

module.exports = seed;
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
  seed()
    .then(() => {
      console.log(green('Seeding success!'));
      console.log(`seeded total ${users.length} users`);
      console.log(`seeded total ${products.length} products `);
      console.log(`seeded successfully`);
      db.close();
    })
    .catch((err) => {
      console.error(red('Oh noes! Something went wrong!'));
      console.error(err);
      db.close();
    });
}
