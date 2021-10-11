// populate this array with 2 sets of 5 unique elements, total = 10
const game = [];
let boxes = document.querySelectorAll("#flipping_boxes section");
console.log(boxes);
boxes.forEach((card) => card.addEventListener("click", flip));
document.querySelector("button").addEventListener("click", resetButton);

const positions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// creating an array to represent the pictures. 2sets of 5 diffrent pics
const pictures = [
  "pic1.jpeg",
  "pic2.jpeg",
  "pic3.jpeg",
  "pic4.jpeg",
  "pic5.jpeg",
  "pic1.jpeg",
  "pic2.jpeg",
  "pic3.jpeg",
  "pic4.jpeg",
  "pic5.jpeg",
];

function resetButton() {
  flipArray = [];
  matchedCards = [];
  pictures.sort((a, b) => 0.5 - Math.random());
  console.log("hello");
  boxes.forEach((card) => {});
}
pictures.sort((a, b) => 0.5 - Math.random());

function flip(event) {
  console.log(event);
  let box = event.target;
  console.log(box);
  let img = document.createElement("img");
  let boxPosition = box.getAttribute("data-position");
  console.log("what attributes?", boxPosition);
  img.src = pictures[boxPosition];
  box.appendChild(img);
  // flipArray thats counting/documenting the cards that we flipped.it's an empty array to document the flips.
  flipArray.push(box);
  // To check the flipArray cards only when flipArray has two cards.(documented values)
  if (flipArray.length == 2) {
    // removing the eventlistener so that the user can't click on any cards while it's being checked.
    boxes.forEach((card) => card.removeEventListener("click", flip));
    setTimeout(checkArray, 1000);
  }
}
function checkArray() {
  // if the cards aren't the same , flip them back.
  if (flipArray[0].children[0].src !== flipArray[1].children[0].src) {
    flipArray.forEach((b) => {
      b.innerHTML = "";
      console.log(b);
    });
    // otherwise add them to the matchedCards array(these are the winning/matched cards)
  } else {
    flipArray.forEach((card) => {
      matchedCards.push(card);
    });
  }
  // resetting the flipArray
  flipArray = [];
  // we're adding the eventlistener only to the cards that are not matched( not in the matchedCards array)
  boxes.forEach((card) => {
    if (matchedCards.includes(card)) {
    } else {
      card.addEventListener("click", flip);
    }
  });
}
// function resetButton() {
//   pic();
// }
// declaring the array variables.
let flipArray = [];
let matchedCards = [];
