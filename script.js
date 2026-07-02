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
  for (let index = 0; index <= 3; index++) {
    burgerRef.innerHTML += burgerTemplate(index);
  }
}

function renderPizza() {
  let pizzaRef = document.getElementById("pizzasMenus");
  for (let index = 4; index <= 7; index++) {
    pizzaRef.innerHTML += pizzaTemplate(index);
  }
}

function renderSalad() {
  let saladRef = document.getElementById("saladsMenus");
  for (let index = 8; index <= 11; index++) {
    saladRef.innerHTML += saladTemplate(index);
  }
}

// Adding dishes from menu
function addDish(index, kindOfDish) {
  let buttonRef = document.getElementById(kindOfDish + "Basket" + index);
  if (dishes[index].amount == 0) {
    dishesInBasket.push(dishes[index]);
  }
  dishes[index].amount++;
  buttonRef.classList.add("change_color");
  buttonRef.innerHTML = `Added ${dishes[index].amount}`;
  isBasketFull();
}

// Change amount of dishes in basket
function increase(index, kindOfDish) {
  if (dishesInBasket.length != 0) {
    subindex = dishes.findIndex(
      (dish) => dish.name == dishesInBasket[index].name,
    );
  }
  addDish(subindex, kindOfDish);
}

function reduce(index) {
  switch (dishesInBasket[index].amount) {
    case 1:
      erase(index);
      break;
    default:
      dishesInBasket[index].amount--;
      let subindex = dishes.findIndex(
        (dish) => dish.name == dishesInBasket[index].name,
      );
      let buttonRef = document.getElementById(
        dishes[subindex].category + "Basket" + subindex,
      );
      buttonRef.innerHTML = `Added ${dishes[subindex].amount}`;
      isBasketFull();
      break;
  }
}

function erase(index) {
  let subindex = dishes.findIndex(
    (dish) => dish.name == dishesInBasket[index].name,
  );
  dishes[subindex].amount = 0;
  let buttonRef = document.getElementById(
    dishes[subindex].category + "Basket" + subindex,
  );
  buttonRef.classList.remove("change_color");
  buttonRef.innerHTML = `Add to basket`;
  dishesInBasket.splice(index, 1);
  isBasketFull();
}

// The "Buy now" Dialog
function openDialog() {
  orderSent();
  let openRef = document.getElementById("orderConfirmed");
  let closeRespRef = document.getElementById("basketDialog");
  openRef.showModal();
  closeRespRef.close();
  document.body.classList.toggle("dialog_offen");
}

function closeDialog() {
  let closeRef = document.getElementById("orderConfirmed");
  closeRef.close();
}

function stopPropagation(event) {
  event.stopPropagation();
}

// The "Basket" Dialog for Responsiveness
function openBasket() {
  let openRef = document.getElementById("basketDialog");
  openRef.showModal();
  document.body.classList.toggle("dialog_offen");
}

function closeBasket() {
  let closeRef = document.getElementById("basketDialog");
  closeRef.close();
}

// Order has been sent
function orderSent() {
  dishesInBasket = [];
  for (let index = 0; index < dishes.length; index++) {
    dishes[index].amount = 0;
    let buttonRef = document.getElementById(
      dishes[index].category + "Basket" + index,
    );
    buttonRef.classList.remove("change_color");
    buttonRef.innerHTML = `Add to basket`;
  }
  renderEmptyBasket();
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
  let basketRespRef = document.getElementById("basketResponsive");
  basketRef.innerHTML = basketEmptyTemplate();
  basketRespRef.innerHTML = basketEmptyTemplate();
}

function renderFullBasket() {
  let basketRef = document.getElementById("basket");
  let basketRespRef = document.getElementById("basketResponsive");
  basketRef.innerHTML = basketFullTemplate();
  basketRespRef.innerHTML = basketDialogTemplate();
  renderContentBasket();
  renderTotalCost();
}

function renderContentBasket() {
  let basketRef = document.getElementById("orderedDishes");
  let basketRespRef = document.getElementById("orderedDishesDialog");
  basketRef.innerHTML = "";
  basketRespRef.innerHTML = "";
  for (let index = 0; index < dishesInBasket.length; index++) {
    basketRef.innerHTML += basketWithDishes(index);
    basketRespRef.innerHTML += basketWithDishes(index);
  }
}

function renderTotalCost() {
  let totalRef = document.getElementById("totalCost");
  let totalRespRef = document.getElementById("totalCostDialog");
  let orderRef = document.getElementById("openButton");
  let orderRespRef = document.getElementById("openButtonDialog");
  let total = 0;
  for (let index = 0; index < dishesInBasket.length; index++) {
    total += dishesInBasket[index].price * dishesInBasket[index].amount;
  }
  total = Math.round(total * 10) / 10;
  totalRef.innerHTML = `
                        <p>Total</p>
                        <p>${total}€</p>
                        `;
  orderRef.innerHTML = `
                        Buy now (${total}€)
                        `;
  totalRespRef.innerHTML = `
                        <p>Total</p>
                        <p>${total}€</p>
                        `;
  orderRespRef.innerHTML = `
                        Buy now (${total}€)
                        `;
}
