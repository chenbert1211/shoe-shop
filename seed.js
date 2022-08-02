const { green, red } = require("chalk");
const {
  db,
  models: { Product, User },
} = require("./server/db");

const products = [
  {
    name: "Air Jordan Bred 11s",
    size: 8.5,
    imageUrl:
      "https://media.gettyimages.com/photos/dec-1995-a-closeup-shot-of-air-jordans-as-they-appear-on-the-court-picture-id394305?s=2048x2048",
    description:
      "6 Dec 1995: A close-up shot of Air Jordans as they appear on the court during the game between the New York Knicks and the Chicago Bulls at the United Center in Chicago, Illinois. The Bulls defeated the Knicks 101-94. Mandatory Credit: Jonathan Daniel /Allsport",
    category: "M",
    brand: "Air Jordan",
  },
];

const users = [
  {
    username: "username1",
    password: "password1",
    firstName: "Watson",
    lastName: "Chen",
    email: "wc.watsonchen@gmail.com",
    creditCard: "1234567890123456",
    phoneNumber: "15006678899",
    address: "100 Lake Rd",
  },
];

const seed = async () => {
  try {
    await db.sync({ force: true });

    // seed your database here!
    await Promise.all(
      products.map((product) => {
        return Product.create(product);
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
      db.close();
    })
    .catch((err) => {
      console.error(red("Oh noes! Something went wrong!"));
      console.error(err);
      db.close();
    });
}
