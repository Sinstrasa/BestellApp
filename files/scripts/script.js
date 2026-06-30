// Initialise
function initialise() {
  renderDishes();
  isBasketFull();
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

// Adding dishes from menu
function addingBurger(index) {
  let buttonRef = document.getElementById("burgerBasket" + index);
  if (dishes[0].burger[index].amount == 0) {
    dishesInBasket.push(dishes[0].burger[index]);
  }
  dishes[0].burger[index].amount++;
  buttonRef.classList.add("change_color");
  buttonRef.innerHTML = `Added ${dishes[0].burger[index].amount}`;
  console.log(dishesInBasket);
  isBasketFull();
}

function addingPizza(index) {
  let buttonRef = document.getElementById("pizzaBasket" + index);
  if (dishes[0].pizza[index].amount == 0) {
    dishesInBasket.push(dishes[0].pizza[index]);
  }
  dishes[0].pizza[index].amount++;
  buttonRef.classList.add("change_color");
  buttonRef.innerHTML = `Added ${dishes[0].pizza[index].amount}`;
  console.log(dishesInBasket);
  isBasketFull();
}

function addingSalad(index) {
  let buttonRef = document.getElementById("saladBasket" + index);
  if (dishes[0].salad[index].amount == 0) {
    dishesInBasket.push(dishes[0].salad[index]);
  }
  dishes[0].salad[index].amount++;
  buttonRef.classList.add("change_color");
  buttonRef.innerHTML = `Added ${dishes[0].salad[index].amount}`;
  console.log(dishesInBasket);
  isBasketFull();
}

// Change amount of dishes in basket
function increase() {
  renderFullBasket();
}

function reduce() {
  isBasketFull();
}

function erase() {
  isBasketFull();
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

// Check state of dishesInBasket
function isBasketFull() {
  if (dishesInBasket.length == 0) {
    renderEmptyBasket();
  } else {
    renderFullBasket();
  }
}

// Render Basket
function renderEmptyBasket() {
  let basketRef = document.getElementById("basket");
  basketRef.innerHTML = basketEmptyTemplate();
}

function renderFullBasket() {
  let basketRef = document.getElementById("basket");
  basketRef.innerHTML = basketFullTemplate();
  renderContentBasket();
}

function renderContentBasket() {
  let basketRef = document.getElementById("orderedDishes");
  basketRef.innerHTML = "";
  for (let index = 0; index < dishesInBasket.length; index++) {
    basketRef.innerHTML += basketWithDishes(index);
  }
}
