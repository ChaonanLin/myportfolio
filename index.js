const projectInfo = [
  {
    id: 0,
    title: "Bank Account UI",
    techStack: "React/Redux",
    details:
      "This Project is a simple bank account user interface built on top of SynapseFI API in its Sandbox environment. SynapseFI APIs help companies build and launch best-in-class financial products on top of our banking infrastructure. This demo project has the basic functions of 1. rendering transaction history 2.transfer money between bank accounts/cards of the same user. And the rest part of the UI are static UI.",
    img1: "img/BankAccountUi.png",
    img2: "img/BankAccountUi-2.png",
    url: "https://bank-account-ui.herokuapp.com//"
  },
  {
    id: 1,
    title: "React Neighborhood Map",
    techStack: "React/GoogleMap API",
    details: "In this neighborhood Map project, I develop a single page application featuring a map of my neighborhood. You can easily find Boba Tea and Fried Chicken Shops around my home on this map. Google Map API and Foursquare API are used to display restaurants' info. ",
    img1: "img/Boba&FriedChicken.png",
    img2: "img/Boba&FriedChicken-2.png",
    url: "https://boba-friedchicken.herokuapp.com/"
  },
  {
    id: 2,
    title: "EMI calculator",
    techStack: "React",
    details: "This is an EMI calculator that calculate Equated Monthly Installment (EMI) for Home Loan (in a fixed interest rate). ",
    img1: "img/EMI-calc-2.png",
    img2: "img/EMI-calc-3.png",
    url: "https://emi-calculator.herokuapp.com/"
  },
  {
    id: 3,
    title: "Memory Game",
    techStack: "Pure JavaScript",
    details:
      "The deck is made up of eight different pairs of cards, each with different symbols on one side. The cards are arranged randomly on the grid with the symbol face down. The gameplay rules are very simple: flip over two hidden cards at a time to locate the ones that match! When all the cards match, you win! The least moves you take, more stars you will gain.",
    img1: "img/memorygame.png",
    img2: "img/memorygame-2.png",
    url: "https://chaonanlin.github.io/Memory-game/"
  },
  {
    id: 4,
    title: "My Reads",
    techStack: "React",
    details: "In this project, I used React to create a bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read. The main page shows 3 shelves for books. Each book is shown on the correct shelf, along with its title and all of its authors. You can select and categorize books you have read, are currently reading, or want to read.",
    img1: "img/myReads.png",
    img2: "img/myReads-2.png",
    url: "https://myreads-reactproject.herokuapp.com/"
  },
  {
    id: 5,
    title: "Arcade Game",
    techStack: "Pure JavaScript",
    details: "Frogger Arcade is a variation of the classic Frogger arcade game. Use your keyboard to play!",
    img1: "img/arcgame.png",
    img2: "img/arcgame-2.png",
    url: "https://chaonanlin.github.io/Arcade-game/"
  }
];

let buttons = document.getElementsByClassName("card__overlay__button");
let popup = document.querySelector(".popup");
let popup_content = popup.querySelector(".popup__content");
let close = document.querySelector(".popup__close");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", togglePopup);
}

close.addEventListener("click", closePopup);
window.addEventListener("click", windowOnClick);

function togglePopup(event) {
  let id = event.target.id;
  let popup_right = document.querySelector(".popup__right");

  let title = popup_right.querySelector(".heading-secondary");
  let techStack = popup_right.querySelector(".heading-tertiary");
  let details = popup_right.querySelector(".popup__text");
  let url = popup_right.querySelector("a");

  let popup_left = document.querySelector(".popup__left");
  let img1 = popup_left.firstElementChild;
  let img2 = popup_left.lastElementChild;

  for (let project of projectInfo) {
    if (project.id == id) {
      title.innerHTML = project.title;
      techStack.innerHTML = project.techStack;
      details.innerHTML = project.details;
      img1.src = project.img1;
      img2.src = project.img2;
      url.href = project.url;

      popup_content.classList.add("popup__content__scaleUp");
      popup.style.opacity = 1;
      popup.style.visibility = "visible";
    }
  }
}

function closePopup() {
  popup_content.classList.remove("popup__content__scaleUp");
  popup.style.opacity = 0;
  popup.style.visibility = "hidden";
}

function windowOnClick(event) {
  if (event.target === popup) {
    popup_content.classList.remove("popup__content__scaleUp");
    popup.style.opacity = 0;
    popup.style.visibility = "hidden";
  }
}
