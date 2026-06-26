function initialise() {
    renderDishes();
}

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