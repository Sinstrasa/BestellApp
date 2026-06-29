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
function changeAmountBurger(index, isPositive) {
  let buttonRef = document.getElementById("burgerBasket" + index);
  if (isPositive) {
    dishes[0].burger[index].amount++;
    buttonRef.classList.add("change_color");
    buttonRef.innerHTML = `Added ${dishes[0].burger[index].amount}`;
  } else
    switch (dishes[0].burger[index].amount) {
      case 0:
        break;
      case 1:
        dishes[0].burger[index].amount--;
        buttonRef.classList.add("change_color");
        buttonRef.innerHTML = `Add to basket`;
        break;
      default:
        dishes[0].burger[index].amount--;
        buttonRef.classList.add("change_color");
        buttonRef.innerHTML = `Added ${dishes[0].burger[index].amount}`;
        break;
    }
}

function changeAmountPizza(index, isPositive) {
  let buttonRef = document.getElementById("pizzaBasket" + index);
  if (isPositive == "+") {
    dishes[0].pizza[index].amount++;
    buttonRef.classList.add("change_color");
    buttonRef.innerHTML = `Added ${dishes[0].pizza[index].amount++}`;
  } else
    switch (dishes[0].pizza[index].amount) {
      case 0:
        break;
      case 1:
        dishes[0].pizza[index].amount--;
        buttonRef.classList.add("change_color");
        buttonRef.innerHTML = `Add to basket`;
        break;
      default:
        dishes[0].pizza[index].amount--;
        buttonRef.classList.add("change_color");
        buttonRef.innerHTML = `Added ${dishes[0].pizza[index].amount}`;
        break;
    }
}

function changeAmountSalad(index, isPositive) {
  let buttonRef = document.getElementById("saladBasket" + index);
  if (isPositive == "+") {
    dishes[0].salad[index].amount++;
    buttonRef.classList.add("change_color");
    buttonRef.innerHTML = `Added ${dishes[0].salad[index].amount++}`;
  } else
    switch (dishes[0].salad[index].amount) {
      case 0:
        break;
      case 1:
        dishes[0].salad[index].amount--;
        buttonRef.classList.add("change_color");
        buttonRef.innerHTML = `Add to basket`;
        break;
      default:
        dishes[0].salad[index].amount--;
        buttonRef.classList.add("change_color");
        buttonRef.innerHTML = `Added ${dishes[0].salad[index].amount}`;
        break;
    }
}

function reduce(category, index) {
  switch (category) {
    case burger:
      changeAmountBurger(index, false);
      break;
    case pizza:
      changeAmountPizza(index, false);
      break;
    case salad:
      changeAmountSalad(index, false);
      break;
    default:
      break;
  }
}

function increase(category, index) {
  switch (category) {
    case burger:
      changeAmountBurger(index, true);
      break;
    case pizza:
      changeAmountPizza(index, true);
      break;
    case salad:
      changeAmountSalad(index, true);
      break;
    default:
      break;
  }
}

function erase() {}

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
