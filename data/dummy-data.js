import Category from "../models/category";
import Question from "../models/question";

export const CATEGORIES = [
  new Category(
    "c1",
    "MATH",
    "https://img.freepik.com/free-vector/cartoon-maths-elements-background_52683-9162.jpg?w=740&t=st=1653920335~exp=1653920935~hmac=03228c18d9e92b787798a620409bbf9525f8b2a5e9f0a96b6832a1cfc30ac130"
  ),
  new Category(
    "c2",
    "ENGLISH",
    "https://img.freepik.com/free-vector/you-speak-english-lettering-background_23-2147871119.jpg?t=st=1653920352~exp=1653920952~hmac=2634b4e64aca15dfe827ad18d632026efd75de96ba9ba372625f135089d85197&w=740"
  ),
  new Category(
    "c3",
    "FILIPINO",
    "https://img.freepik.com/free-vector/hand-drawn-philippine-independence-day-illustration_23-2148990749.jpg?t=st=1653920492~exp=1653921092~hmac=9435003cccaa5f365606f6245c9adca3f7d94aa768a9aaab92d9d57900e5673e&w=740"
  ),
  new Category(
    "c4",
    "SCIENCE",
    "https://img.freepik.com/free-vector/hand-drawn-science-background-theme_23-2148538097.jpg?t=st=1653921434~exp=1653922034~hmac=4231c36b73c344943c948c4e23abff3cb0b85c76146776b1bd2020d0f16582ee&w=1060"
  ),
  new Category(
    "c5",
    "HISTORY",
    "https://img.freepik.com/free-photo/elevated-view-magnifying-glass-burnt-paper-knife-map_23-2147837103.jpg?t=st=1653920702~exp=1653921302~hmac=aea90d701032a636ecc064ed7d9a7f5ab381a1117a2e7cf2fcc0be2bf7073208&w=1060"
  ),
  new Category(
    "c6",
    "LAW",
    "https://img.freepik.com/free-vector/law-justice-isometric-composition-with-small-people-characters-books-law-gavel-golden-weight-vector-illustration_1284-30490.jpg?t=st=1653920730~exp=1653921330~hmac=616c6363b9990fdd57f88a881399fbc8559f1359b6dfd91e363ae6e661e6b068&w=740"
  ),
];

export const QUESTIONS = [
  new Question(
    "q1",
    "c1",
    "1.27, 499 round to the nearest hundred is ?",
    ["a. 27, 400", "b. 27, 500", "c. 27, 000", "d. 28, 000"],
    0
  ),
  new Question(
    "q2",
    "c1",
    "Twenty-four weeks is how many days?",
    ["a. 140", "b. 168", "c. 176", "d. 196"],
    3
  ),
  new Question(
    "q3",
    "c1",
    "Five hundred ninety-five days is how many weeks?",
    ["a. 119", "b. 95", "c. 85", "d. 75"],
    2
  ),
  new Question(
    "q4",
    "c2",
    "If you are ambivalent with the answers, analyze the given problem.",
    ["a. confusion", "b. innocent", "c. uncertain", "d. unaware"],
    1
  ),
  new Question(
    "q5",
    "c2",
    "He left the country because of the ominous experiences he had in the past.",
    ["a. unforgettable", "b. threatening", "c. ugly", "d. remarkable"],
    2
  ),
  new Question(
    "q6",
    "c2",
    "Teenagers are easily susceptible to peer influence.",
    ["a. flexible", "b. inspired", "c. dependable", "d. inclined"],
    2
  ),
  new Question(
    "q7",
    "c3",
    "Alin sa mga sumusunod ang tumtukoy sa salitang malikhain?",
    [
      "a. Madaming ideya.",
      "b. Magaling sa sining",
      "c. Mahilig maglikha.",
      "d. Matalino sa Agham",
    ],
    0
  ),
  new Question(
    "q8",
    "c3",
    "Alin sa mga sumusunod and kasingkahulugan ng salitang bughaw?",
    ["a. Dilaw", "b. Berde", "c. Asul", "d. Lila"],
    2
  ),
  new Question(
    "q9",
    "c3",
    "Alin sa mga sumusunod and kasalungat ng salitang marangya?",
    ["a. Mayaman", "b. Magara", "c. Hikahos", "d. Pulubi"],
    3
  ),
  new Question(
    "q10",
    "c4",
    "When the chromosomes line up in mitosis this is known as which phase?",
    ["a. Telophase ", "b. Anaphase ", "c. Metaphase ", "d. Prophase"],
    3
  ),
  new Question(
    "q11",
    "c4",
    "Which cellular organelle contains enzymes that are considered digestive?",
    ["a. Golgi Apparatus  ", "b. Lysosomes  ", "c. Nucleus  ", "d. Ribosomes"],
    2
  ),
  new Question(
    "q12",
    "c4",
    "Organs repair themselves through a process of?",
    [
      "a. Meiosis",
      "b. Mitosis  ",
      "c. Cellular differentiation",
      "d. Transformation",
    ],
    2
  ),
  new Question(
    "q13",
    "c5",
    "Who named the Philippines?",
    ["a. Ruy Lopez de Villlalobos", "b. King Philip ll", "c. Magellan"],
    1
  ),
  new Question(
    "q14",
    "c5",
    "Who is the first president of the Philippines?",
    ["a. Emilio Aguinaldo", "b. Apolinario Mabini", "c. Andres Bonifacio"],
    2
  ),
  new Question(
    "q15",
    "c5",
    "Who killed Magellan?",
    ["a. Raja Solayman", "b. Meliodas", "c. Lapu-lapu"],
    2
  ),
];