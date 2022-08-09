const { green, red } = require("chalk");



const {
  db,
  models: { Product, User, Order_Product },
} = require("./server/db");

const products = [

  {
    name: "Air_Jordan_11s",
    imageUrl:
      "https://cdn.flightclub.com/2600/TEMPLATE/319254/1.jpg",
    description:
      "6 Dec 1995: A close-up shot of Air Jordans as they appear on the court during the game between the New York Knicks and the Chicago Bulls at the United Center in Chicago, Illinois. The Bulls defeated the Knicks 101-94. Mandatory Credit: Jonathan Daniel /Allsport",
    brand: "Adidas",
    quantity: 10,
    price: 220,
    stylecode: "378037061",
  },
  {
    name: "Air Jordan",
    imageUrl:"https://cdn.flightclub.com/2600/TEMPLATE/320354/1.jpg",
    description:
      "6 Dec 1995: A close-up shot of Air Jordans as they appear on the court during the game between the New York Knicks and the Chicago Bulls at the United Center in Chicago, Illinois. The Bulls defeated the Knicks 101-94. Mandatory Credit: Jonathan Daniel /Allsport",
    brand: "Adidas",
    quantity: 10,
    price: 220,
  },
  {
    name: "Yeezy Boots Pro",
    imageUrl:
      "https://cdn.flightclub.com/2200/TEMPLATE/317241/1.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    brand: "Adidas",
    quantity: 10,
  },
  {
    name: "Yeezy_Boots_Sport",
    imageUrl:
      "https://cdn.flightclub.com/2200/TEMPLATE/320358/1.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    brand: "Adidas",
    quantity: 10,
  },
  {
    name: "Air Max Pro",
    imageUrl:
      "https://cdn.flightclub.com/2600/TEMPLATE/283552/1.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    brand: "Nike",
    quantity: 10,
    price: 210,
  },

  {
    name: "Zoomie ",
    imageUrl:
      "https://cdn.flightclub.com/2200/TEMPLATE/187925/1.jpg",
    description:
      "African-American rapper, songwriter, actor and record producer Antwan André Patton (born 1975), known by his stage name Big Boi, is best known for being a member of the southern hip hop duo Outkast. Pair of white Nike sneakers with glitter red, blue, and yellow sections worn by Big Boi of Outkast. The low-top sneakers have white leather on the perforated top toes, the front half of the side vamps, the upper portion of the heel cap, and on the facing of the tongues. ",
    brand: "Nike",
    quantity: 10,
  },
  {
    name: "Retro Desert Style",
    imageUrl:
      "https://cdn.flightclub.com/2200/TEMPLATE/299067/1.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    brand: "Nike",
    quantity: 10,
  },
  {
    name: "Universty Gold",
    size: 6,
    imageUrl:
      "https://cdn.flightclub.com/2200/TEMPLATE/155691/1.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    brand: "Nike",
    quantity: 10,
  },
  {
    name: "Foam Sport",
    imageUrl:
      "https://cdn.flightclub.com/2200/TEMPLATE/805926/1.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    brand: "Nike",
    quantity: 10,
  },
  {
    name: "Soldier Green Sport",
    imageUrl:
      "https://cdn.flightclub.com/2200/TEMPLATE/152361/1.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    brand: "Nike",
    quantity: 10,
  },
  {
    name: "Foam-Sport S",
    imageUrl:
      "https://cdn.flightclub.com/2200/TEMPLATE/805971/1.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    brand: "Nike",
    quantity: 10,
  },
  {
    name: "Air Max S",
    imageUrl:"https://cdn.flightclub.com/2600/TEMPLATE/311754/1.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    brand: "Nike",
    quantity: 10,
  },
  {
    name: "MONO ICE",
    imageUrl:"https://cdn.flightclub.com/2200/TEMPLATE/260879/1.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    brand: "Adidas",
    quantity: 10,
  },
  {
    name: "MONO ICE",
    imageUrl:"https://cdn.flightclub.com/2200/TEMPLATE/266530/1.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    brand: "Adidas",
    quantity: 10,
  },
  {
    name: "NMD Pink",
    imageUrl:"https://images.dickssportinggoods.com/is/image/GolfGalaxy/18ADIWNMDR1MNTXXXFTW_Ash_Pearl_White?qlt=70&wid=1100&fmt=webp",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    brand: "Adidas",
    quantity: 10,
  },


];

const users = [

  {
    username: "watson",
    password: "watson123",
    firstName: "Watson",
    lastName: "Chen",
    email: "watson@gmail.com",
    creditCard: "1234567890123456",
    address: "200 Lake Rd",
    phoneNumber: "6504424444",
  },
  {
    username: "Bert",
    password: "bert123",
    firstName: "Bert",
    lastName: "Chen",
    email: "bert@gmail.com",
    creditCard: "1234567890123457",
    address: "300 Lake Rd",
    phoneNumber: "6504424455",
  },
  {
    username: "Cole",
    password: "cole123",
    firstName: "Cole",
    lastName: "Berman",
    email: "cole@gmail.com",
    creditCard: "1234567890123458",
    address: "400 Lake Rd",
    phoneNumber: "6504424466",
  },
  {
    username: "Emre",
    password: "emre123",
    firstName: "Emre",
    lastName: "Basbaydar",
    email: "emre@gmail.com",
    creditCard: "1234567890123459",
    address: "500 Lake Rd",
    phoneNumber: "6504424477",
  },
];


/**********
 ORDER_PRODUCTS
**********/
const order_products = [

  {
    productId: 1,
    quantity: 10,
    size: 1,
    category: "W",
    price: 70000,
  },
  {
    productId: 1,
    quantity: 10,
    size: 2,
    category: "W",
    price: 70000,
  },
  {
    productId: 1,
    quantity: 10,
    size: 3,
    category: "W",
    price: 70000,
  },
  {
    productId: 1,
    quantity: 10,
    size: 4,
    category: "W",
    price: 70000,
  },
  {
    productId: 1,
    quantity: 10,
    size: 5,
    category: "W",
    price: 70000,
  },
  {
    productId: 1,
    quantity: 10,
    size: 6,
    category: "W",
    price: 70000,
  },
  {
    productId: 1,
    quantity: 10,
    size: 7,
    category: "W",
    price: 70000,
  },
  {
    productId: 1,
    quantity: 10,
    size: 8,
    category: "W",
    price: 70000,
  },
  {
    productId: 1,
    quantity: 10,
    size: 9,
    category: "M",
    price: 70000,
  },
  {
    productId: 1,
    quantity: 10,
    size: 10,
    category: "M",
    price: 70000,
  },
  {
    productId: 1,
    quantity: 10,
    size: 11,
    category: "M",
    price: 70000,
  },
  {
    productId: 1,
    quantity: 10,
    size: 12,
    category: "M",
    price: 70000,
  },
  {
    productId: 1,
    quantity: 10,
    size: 13,
    category: "M",
    price: 70000,
  },
  {
    productId: 1,
    quantity: 10,
    size: 14,
    category: "M",
    price: 70000,
  },
  {
    productId: 1,
    quantity: 10,
    size: 15,
    category: "M",
    price: 70000,
  },
  {
    productId: 1,
    quantity: 10,
    size: 16,
    category: "M",
    price: 70000,
  },
  {
    productId: 1,
    quantity: 10,
    size: 17,
    category: "M",
    price: 70000,
  },
  {
    productId: 1,
    quantity: 10,
    size: 17,
    category: "M",
    price: 70000,
  },
  {
    productId: 1,
    quantity: 10,
    size: 18,
    category: "M",
    price: 70000,
  },
  {
    productId: 1,
    quantity: 10,
    size: 19,
    category: "M",
    price: 70000,
  },
  {
    productId: 2,
    quantity: 10,
    size: 1,
    category: "W",
    price: 70000,
  },
  {
    productId: 2,
    quantity: 10,
    size: 2,
    category: "W",
    price: 70000,
  },
  {
    productId: 2,
    quantity: 10,
    size: 3,
    category: "W",
    price: 70000,
  },
  {
    productId: 2,
    quantity: 10,
    size: 4,
    category: "W",
    price: 70000,
  },
  {
    productId: 2,
    quantity: 10,
    size: 5,
    category: "W",
    price: 70000,
  },
  {
    productId: 2,
    quantity: 10,
    size: 6,
    category: "W",
    price: 70000,
  },
  {
    productId: 2,
    quantity: 10,
    size: 7,
    category: "W",
    price: 70000,
  },
  {
    productId: 2,
    quantity: 10,
    size: 8,
    category: "W",
    price: 70000,
  },
  {
    productId: 2,
    quantity: 10,
    size: 9,
    category: "M",
    price: 70000,
  },
  {
    productId: 2,
    quantity: 10,
    size: 10,
    category: "M",
    price: 70000,
  },
  {
    productId: 2,
    quantity: 10,
    size: 11,
    category: "M",
    price: 70000,
  },
  {
    productId: 2,
    quantity: 10,
    size: 12,
    category: "M",
    price: 70000,
  },
  {
    productId: 2,
    quantity: 10,
    size: 13,
    category: "M",
    price: 70000,
  },
  {
    productId: 2,
    quantity: 10,
    size: 14,
    category: "M",
    price: 70000,
  },
  {
    productId: 2,
    quantity: 10,
    size: 15,
    category: "M",
    price: 70000,
  },
  {
    productId: 2,
    quantity: 10,
    size: 16,
    category: "M",
    price: 70000,
  },
  {
    productId: 2,
    quantity: 10,
    size: 17,
    category: "M",
    price: 70000,
  },
  {
    productId: 2,
    quantity: 10,
    size: 17,
    category: "M",
    price: 70000,
  },
  {
    productId: 2,
    quantity: 10,
    size: 18,
    category: "M",
    price: 70000,
  },
  {
    productId: 2,
    quantity: 10,
    size: 19,
    category: "M",
    price: 70000,
  },
  {
    productId: 3,
    quantity: 10,
    size: 1,
    category: "W",
    price: 70000,
  },
  {
    productId: 3,
    quantity: 10,
    size: 2,
    category: "W",
    price: 70000,
  },
  {
    productId: 3,
    quantity: 10,
    size: 3,
    category: "W",
    price: 70000,
  },
  {
    productId: 3,
    quantity: 10,
    size: 4,
    category: "W",
    price: 70000,
  },
  {
    productId: 3,
    quantity: 10,
    size: 5,
    category: "W",
    price: 70000,
  },
  {
    productId: 3,
    quantity: 10,
    size: 6,
    category: "W",
    price: 70000,
  },
  {
    productId: 3,
    quantity: 10,
    size: 7,
    category: "W",
    price: 70000,
  },
  {
    productId: 3,
    quantity: 10,
    size: 8,
    category: "W",
    price: 70000,
  },
  {
    productId: 3,
    quantity: 10,
    size: 9,
    category: "M",
    price: 70000,
  },
  {
    productId: 3,
    quantity: 10,
    size: 10,
    category: "M",
    price: 70000,
  },
  {
    productId: 3,
    quantity: 10,
    size: 11,
    category: "M",
    price: 70000,
  },
  {
    productId: 3,
    quantity: 10,
    size: 12,
    category: "M",
    price: 70000,
  },
  {
    productId: 3,
    quantity: 10,
    size: 13,
    category: "M",
    price: 70000,
  },
  {
    productId: 3,
    quantity: 10,
    size: 14,
    category: "M",
    price: 70000,
  },
  {
    productId: 3,
    quantity: 10,
    size: 15,
    category: "M",
    price: 70000,
  },
  {
    productId: 3,
    quantity: 10,
    size: 16,
    category: "M",
    price: 70000,
  },
  {
    productId: 3,
    quantity: 10,
    size: 17,
    category: "M",
    price: 70000,
  },
  {
    productId: 3,
    quantity: 10,
    size: 17,
    category: "M",
    price: 70000,
  },
  {
    productId: 3,
    quantity: 10,
    size: 18,
    category: "M",
    price: 70000,
  },
  {
    productId: 3,
    quantity: 10,
    size: 19,
    category: "M",
    price: 70000,
  },
  {
    productId: 4,
    quantity: 10,
    size: 1,
    category: "W",
    price: 70000,
  },
  {
    productId: 4,
    quantity: 10,
    size: 2,
    category: "W",
    price: 70000,
  },
  {
    productId: 4,
    quantity: 10,
    size: 3,
    category: "W",
    price: 70000,
  },
  {
    productId: 4,
    quantity: 10,
    size: 4,
    category: "W",
    price: 70000,
  },
  {
    productId: 4,
    quantity: 10,
    size: 5,
    category: "W",
    price: 70000,
  },
  {
    productId: 4,
    quantity: 10,
    size: 6,
    category: "W",
    price: 70000,
  },
  {
    productId: 4,
    quantity: 10,
    size: 7,
    category: "W",
    price: 70000,
  },
  {
    productId: 4,
    quantity: 10,
    size: 8,
    category: "W",
    price: 70000,
  },
  {
    productId: 4,
    quantity: 10,
    size: 9,
    category: "M",
    price: 70000,
  },
  {
    productId: 4,
    quantity: 10,
    size: 10,
    category: "M",
    price: 70000,
  },
  {
    productId: 4,
    quantity: 10,
    size: 11,
    category: "M",
    price: 70000,
  },
  {
    productId: 4,
    quantity: 10,
    size: 12,
    category: "M",
    price: 70000,
  },
  {
    productId: 4,
    quantity: 10,
    size: 13,
    category: "M",
    price: 70000,
  },
  {
    productId: 4,
    quantity: 10,
    size: 14,
    category: "M",
    price: 70000,
  },
  {
    productId: 4,
    quantity: 10,
    size: 15,
    category: "M",
    price: 70000,
  },
  {
    productId: 4,
    quantity: 10,
    size: 16,
    category: "M",
    price: 70000,
  },
  {
    productId: 4,
    quantity: 10,
    size: 17,
    category: "M",
    price: 70000,
  },
  {
    productId: 4,
    quantity: 10,
    size: 17,
    category: "M",
    price: 70000,
  },
  {
    productId: 4,
    quantity: 10,
    size: 18,
    category: "M",
    price: 70000,
  },
  {
    productId: 4,
    quantity: 10,
    size: 19,
    category: "M",
    price: 70000,
  },
  {
    productId: 5,
    quantity: 10,
    size: 1,
    category: "W",
    price: 70000,
  },
  {
    productId: 5,
    quantity: 10,
    size: 2,
    category: "W",
    price: 70000,
  },
  {
    productId: 5,
    quantity: 10,
    size: 3,
    category: "W",
    price: 70000,
  },
  {
    productId: 5,
    quantity: 10,
    size: 4,
    category: "W",
    price: 70000,
  },
  {
    productId: 5,
    quantity: 10,
    size: 5,
    category: "W",
    price: 70000,
  },
  {
    productId: 5,
    quantity: 10,
    size: 6,
    category: "W",
    price: 70000,
  },
  {
    productId: 5,
    quantity: 10,
    size: 7,
    category: "W",
    price: 70000,
  },
  {
    productId: 5,
    quantity: 10,
    size: 8,
    category: "W",
    price: 70000,
  },
  {
    productId: 5,
    quantity: 10,
    size: 9,
    category: "M",
    price: 70000,
  },
  {
    productId: 5,
    quantity: 10,
    size: 10,
    category: "M",
    price: 70000,
  },
  {
    productId: 5,
    quantity: 10,
    size: 11,
    category: "M",
    price: 70000,
  },
  {
    productId: 5,
    quantity: 10,
    size: 12,
    category: "M",
    price: 70000,
  },
  {
    productId: 5,
    quantity: 10,
    size: 13,
    category: "M",
    price: 70000,
  },
  {
    productId: 5,
    quantity: 10,
    size: 14,
    category: "M",
    price: 70000,
  },
  {
    productId: 5,
    quantity: 10,
    size: 15,
    category: "M",
    price: 70000,
  },
  {
    productId: 5,
    quantity: 10,
    size: 16,
    category: "M",
    price: 70000,
  },
  {
    productId: 5,
    quantity: 10,
    size: 17,
    category: "M",
    price: 70000,
  },
  {
    productId: 5,
    quantity: 10,
    size: 17,
    category: "M",
    price: 70000,
  },
  {
    productId: 5,
    quantity: 10,
    size: 18,
    category: "M",
    price: 70000,
  },
  {
    productId: 5,
    quantity: 10,
    size: 19,
    category: "M",
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
          imageUrl: product.imageUrl,
          brand: product.brand,
        });
      })
    );


    await Promise.all(
      order_products.map((orderProduct) => {
        return Order_Product.create(orderProduct);
      })
    );

    await Promise.all(
      users.map((user) => {
        return User.create(user);
      })
    );


  } catch (err) {
    // console.log("SEEDING ERROR !")
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
      console.log(green("Seeding success!"));
      console.log(`seeded total ${users.length} users`)
      console.log(`seeded total ${products.length} products `)
      console.log(`seeded successfully`)
      db.close();
    })
    .catch((err) => {
      console.error(red("Oh noes! Something went wrong!"));
      console.error(err);
      db.close();
    });
}
