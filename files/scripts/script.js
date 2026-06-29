// Initialise
function initialise() {
  renderDishes();
  // renderEmptyBasket();
}
// Render dishes
function renderDishes() {
  renderBurger();
  renderPizza();
  renderSalad();
}

function renderBurger() {
  let burgerRef = document.getElementById("burgersMenus");
  for (let index = 0; index < dishes[0].burger.length; index++) {
    burgerRef.innerHTML += burgerTemplate(index);
  }
}

function renderPizza() {
  let pizzaRef = document.getElementById("pizzasMenus");
  for (let index = 0; index < dishes[0].pizza.length; index++) {
    pizzaRef.innerHTML += pizzaTemplate(index);
  }
}

function renderSalad() {
  let saladRef = document.getElementById("saladsMenus");
  for (let index = 0; index < dishes[0].salad.length; index++) {
    saladRef.innerHTML += saladTemplate(index);
  }
}

// Adding dishes
function addingBurger(index) {
  let buttonRef = document.getElementById("burgerBasket" + index);
  dishes[0].burger[index].amount++;
  buttonRef.classList.add("change_color");
  buttonRef.innerHTML = `Added ${dishes[0].burger[index].amount}`;
}

function addingPizza(index) {
  let buttonRef = document.getElementById("pizzaBasket" + index);
  dishes[0].pizza[index].amount++;
  buttonRef.classList.add("change_color");
  buttonRef.innerHTML = `Added ${dishes[0].pizza[index].amount++}`;
}

function addingSalad(index) {
  let buttonRef = document.getElementById("saladBasket" + index);
  dishes[0].salad[index].amount++;
  buttonRef.classList.add("change_color");
  buttonRef.innerHTML = `Added ${dishes[0].salad[index].amount++}`;
}

// Work with dialog
function openDialog() {
  let openRef = document.getElementById("orderConfirmed");
  openRef.showModal();
}

function closeDialog() {
  let closeRef = document.getElementById("orderConfirmed");
  closeRef.close();
}

function stopPropagation(event) {
  event.stopPropagation();
}

// Render Basket
function renderEmptyBasket() {
  let basketRef = document.getElementById("basket");
  basketRef.innerHTML = basketEmptyTemplate();
}

function renderFullBasket() {
  let basketRef = document.getElementById("basket");

}