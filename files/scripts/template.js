function burgerTemplate(index) {
  return `
            <section class="dish">
            <section class="explanation">
              <img src="${dishes[0].burger[index].picture}" alt="${dishes[0].burger[index].name}" />
                <div class="description">
                  <h4>${dishes[0].burger[index].name}</h4>
                  <p>${dishes[0].burger[index].ingredients}</p>
                </div>
            </section>
                <div class="costs">
                  <p>${dishes[0].burger[index].price}€</p>
                  <div>
                    <button id="burgerBasket${+index}" onclick="addingBurger(${index})">Add to basket</button>
                  </div>
                </div>
            </section>
            `;
}

function pizzaTemplate(index) {
  return `
            <section class="dish">
            <section class="explanation">
              <img src="${dishes[0].pizza[index].picture}" alt="${dishes[0].pizza[index].name}" />
                <div class="description">
                  <h4>${dishes[0].pizza[index].name}</h4>
                  <p>${dishes[0].pizza[index].ingredients}</p>
                </div>
              </section>
                <div class="costs">
                  <p>${dishes[0].pizza[index].price}€</p>
                  <div>
                    <button id="pizzaBasket${+index}" onclick="addingPizza(${index})">Add to basket</button>
                  </div>
                </div>
            </section>
            `;
}

function saladTemplate(index) {
  return `
            <section class="dish">
            <section class="explanation">
              <img src="${dishes[0].salad[index].picture}" alt="${dishes[0].salad[index].name}" />
                <div class="description">
                  <h4>${dishes[0].salad[index].name}</h4>
                  <p>${dishes[0].salad[index].ingredients}</p>
                </div>
            </section>
                <div class="costs">
                  <p>${dishes[0].salad[index].price}€</p>
                <div>
                    <button id="saladBasket${+index}" onclick="addingSalad(${index})">Add to basket</button>
                  </div>
                </div>
            </section>
            `;
}

function basketEmptyTemplate() {
  return `
        <article>
          <div class="empty_basket">
            <h5>Your Basket</h5>
            <p>
              Nothing here yet.<br />
              Go ahead and choose something delicious!
            </p>
            <img
              src="../assets/icons/shopping-cart.svg"
              alt="Shopping Cart if Basket is Empty"
            />
          </div>
        </article>
        `;
}

function basketFullTemplate() {
  return `
        <article>
          <h5>Your Basket</h5>
          <section class="ordered_dishes" id="orderedDishes">
          
          </section>
          <section class="basket_lower_part">
            <div class="total_cost" id="totalCost">
              <p>Total</p>
              <p>Insert costs here!</p>
            </div>
            <div class="buy_order">
              <button class="button_buy_order" id="openButton" onclick="openDialog()">
              Insert costs here!
              </button>
            </div>
          </section>
        </article>
        `;
}

function basketWithDishes(index) {
  return  `
          <article class="dish_in_basket">
              <section class="name_n_amount">
                <p>${dishesInBasket[index].name}</p>
                <div class="amount">
                  <button id="reduceDish${+index}" onclick="reduce()">-</button>
                  <p>${dishesInBasket[index].amount}</p>
                  <button id="increaseDish${+index}" onclick="increase()">+</button>
                </div>
              </section>
              <section class="costs_n_trash">
                <button onclick="erase()"><img src="../assets/icons/delete.svg" alt="Trash Icon"></button>
                <p>${dishesInBasket[index].price}€</p>
              </section>
            </article>
          `
}