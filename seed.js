const { green, red } = require("chalk");
const { db,  models:{Product} }= require("./server/db");


const products = [
  {
    id:1,
    name: "Air Jordan",
    imageUrl:
      "https://media.gettyimages.com/photos/dec-1995-a-closeup-shot-of-air-jordans-as-they-appear-on-the-court-picture-id394305?s=2048x2048",
    description:
      "6 Dec 1995: A close-up shot of Air Jordans as they appear on the court during the game between the New York Knicks and the Chicago Bulls at the United Center in Chicago, Illinois. The Bulls defeated the Knicks 101-94. Mandatory Credit: Jonathan Daniel /Allsport",
    category:"men"
  },
  {
    id:2,
    name: "Michael Jordan",
    imageUrl:
      "https://media.gettyimages.com/photos/pair-of-basketball-legend-michael-jordans-famous-air-jordans-from-his-picture-id1232583562?s=2048x2048",
    description:
      "A pair of basketball legend Michael Jordan's famous Air Jordans from his rookie season are seen on April 28, 2021 in Geneva ",
      category:"men"
  },
  {
    id:3,
    name: "Nike Air Max",
    imageUrl:
      "https://media.gettyimages.com/photos/nike-air-max-running-shoe-picture-id50371660?s=2048x2048",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      category:"men"
  },

  {
    id:4,
    name: "Nike Town",
    imageUrl:
      "https://media.gettyimages.com/photos/general-view-of-the-limited-edition-what-the-dunk-shoes-at-nike-town-picture-id77349283?s=2048x2048",
    description:
    "LONDON - OCTOBER 16: A general view of the Limited Edition 'What The Dunk Shoes' at nike Town on London's Oxford Street on October 16, 2007 in London, England. Hundreds queued for 3 days to buy the Nike What The Dunk Shoes, a compilation of 31 of the most famous Nike Dunk shoes.",
    category:"men"

  },
  { id:5,
    name: "Kobe Bryant Air",
    imageUrl:
    "https://media.gettyimages.com/photos/los-angeles-lakers-kobe-bryant-during-visit-to-watts-willowbrook-boys-picture-id1203204257?s=2048x2048",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      category:"men"

  },
  {
    id:6,
    name: "Nikel Blood Red And White",
    imageUrl:
      "https://media.gettyimages.com/photos/guest-is-seen-attending-pitchfork-music-festival-wearing-matching-picture-id1004135644?s=2048x2048",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      category:"women"
  },
  {
    id:7,
    name: "Nike African Style",
    imageUrl:
      "https://media.gettyimages.com/photos/africanamerican-rapper-songwriter-actor-and-record-producer-antwan-picture-id1329737317?s=2048x2048 ",
    description:
      "African-American rapper, songwriter, actor and record producer Antwan André Patton (born 1975), known by his stage name Big Boi, is best known for being a member of the southern hip hop duo Outkast. Pair of white Nike sneakers with glitter red, blue, and yellow sections worn by Big Boi of Outkast. The low-top sneakers have white leather on the perforated top toes, the front half of the side vamps, the upper portion of the heel cap, and on the facing of the tongues. ",
      category:"women"
  },
  {
    id:8,
    name: "Nike Light Green",
    imageUrl:
      "https://media.gettyimages.com/photos/guest-poses-wearing-nike-shoes-after-the-lucio-vanotti-show-during-picture-id644981994?s=2048x2048",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      category:"women"
  },
  {
    id:9,
    name: "Nike Eyes of Nina",
    imageUrl:
      "https://media.gettyimages.com/photos/nina-sieber-poses-wearing-american-apparel-pants-and-nike-shoes-on-picture-id456154200?s=2048x2048",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      category:"women"
  },
  {
    id:10,
    name: "Nike Pinky Pink",
    imageUrl:
      "https://media.gettyimages.com/photos/renata-di-pace-poses-wearing-a-max-mara-coat-ysl-bag-and-nike-shoes-picture-id464551920?s=2048x2048",
    description:
      "African-American rapper, songwriter, actor and record producer Antwan André Patton (born 1975), known by his stage name Big Boi, is best known for being a member of the southern hip hop duo Outkast. Pair of white Nike sneakers with glitter red, blue, and yellow sections worn by Big Boi of Outkast. The low-top sneakers have white leather on the perforated top toes, the front half of the side vamps, the upper portion of the heel cap, and on the facing of the tongues. ",
      category:"women"
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
