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
    inventory: 10,
    price: 220,
  },
  {
    name: "Air Jordan 1",
    size: 10,
    imageUrl:
      "https://media.gettyimages.com/photos/pair-of-basketball-legend-michael-jordans-famous-air-jordans-from-his-picture-id1232583562?s=2048x2048",
    description:
      "6 Dec 1995: A close-up shot of Air Jordans as they appear on the court during the game between the New York Knicks and the Chicago Bulls at the United Center in Chicago, Illinois. The Bulls defeated the Knicks 101-94. Mandatory Credit: Jonathan Daniel /Allsport",
    category: "M",
    brand: "Air Jordan",
    inventory: 10,
    price: 180,
  },
  {
    name: "Nike Air Max",
    size: 7,
    imageUrl:
      "https://media.gettyimages.com/photos/nike-air-max-running-shoe-picture-id50371660?s=2048x2048",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    category: "M",
    brand: "Nike",
    inventory: 10,
    price: 210,
  },
  {
    name: "Air Jordan Bred 11s",
    size: 9,
    imageUrl:
      "https://media.gettyimages.com/photos/dec-1995-a-closeup-shot-of-air-jordans-as-they-appear-on-the-court-picture-id394305?s=2048x2048",
    description:
      "6 Dec 1995: A close-up shot of Air Jordans as they appear on the court during the game between the New York Knicks and the Chicago Bulls at the United Center in Chicago, Illinois. The Bulls defeated the Knicks 101-94. Mandatory Credit: Jonathan Daniel /Allsport",
    category: "M",
    brand: "Air Jordan",
    inventory: 10,
    price: 220,
  },
  {
    name: "Kobe Bryant Air Women",
    size: 7,
    imageUrl:
      "https://media.gettyimages.com/photos/los-angeles-lakers-kobe-bryant-during-visit-to-watts-willowbrook-boys-picture-id1203204257?s=2048x2048",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    category: "W",
    brand: "Nike",
    inventory: 10,
  },
  {
    name: "Nike African Style",
    size: 12,
    imageUrl:
      "https://media.gettyimages.com/photos/africanamerican-rapper-songwriter-actor-and-record-producer-antwan-picture-id1329737317?s=2048x2048",
    description:
      "African-American rapper, songwriter, actor and record producer Antwan André Patton (born 1975), known by his stage name Big Boi, is best known for being a member of the southern hip hop duo Outkast. Pair of white Nike sneakers with glitter red, blue, and yellow sections worn by Big Boi of Outkast. The low-top sneakers have white leather on the perforated top toes, the front half of the side vamps, the upper portion of the heel cap, and on the facing of the tongues. ",
    category: "U",
    brand: "Nike",
    inventory: 10,
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
