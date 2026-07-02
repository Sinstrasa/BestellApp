function burgerTemplate(index) {
  return `
            <section class="dish">
            <section class="explanation">
              <img src="${dishes[index].picture}" alt="${dishes[index].name}" />
                <div class="description">
                  <h4>${dishes[index].name}</h4>
                  <p>${dishes[index].ingredients}</p>
                </div>
            </section>
                <div class="costs">
                  <p>${dishes[index].price}€</p>
                  <div>
                    <button id="burgerBasket${+index}" onclick="addDish(${index}, '${dishes[index].category}')">Add to basket</button>
                  </div>
                </div>
            </section>
            `;
}

function pizzaTemplate(index) {
  return `
            <section class="dish">
            <section class="explanation">
              <img src="${dishes[index].picture}" alt="${dishes[index].name}" />
                <div class="description">
                  <h4>${dishes[index].name}</h4>
                  <p>${dishes[index].ingredients}</p>
                </div>
              </section>
                <div class="costs">
                  <p>${dishes[index].price}€</p>
                  <div>
                    <button id="pizzaBasket${+index}" onclick="addDish(${index}, '${dishes[index].category}')">Add to basket</button>
                  </div>
                </div>
            </section>
            `;
}

function saladTemplate(index) {
  return `
            <section class="dish">
            <section class="explanation">
              <img src="${dishes[index].picture}" alt="${dishes[index].name}" />
                <div class="description">
                  <h4>${dishes[index].name}</h4>
                  <p>${dishes[index].ingredients}</p>
                </div>
            </section>
                <div class="costs">
                  <p>${dishes[index].price}€</p>
                <div>
                    <button id="saladBasket${+index}" onclick="addDish(${index}, '${dishes[index].category}')">Add to basket</button>
                  </div>
                </div>
            </section>
            `;
}

function basketEmptyTemplate() {
  return `
        <article>
          <div class="empty_basket">
            <div>
              <div>
                <button class="close_basket" id="closeButton" onclick="closeBasket()">
                X
                </button>
              </div>
              <h5>Your Basket</h5>
            </div>
            <p>
              Nothing here yet.<br />
              Go ahead and choose something delicious!
            </p>
            <img
              src="./assets/icons/shopping-cart.svg"
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

function basketDialogTemplate() {
  return `
        <article>
          <div class="basket_header">
              <div>
                <button class="close_basket" id="closeButton" onclick="closeBasket()">
                X
                </button>
              </div>
              <h5>Your Basket</h5>
            </div>
          <section class="ordered_dishes" id="orderedDishesDialog">
          
          </section>
          <section class="basket_lower_part">
            <div class="total_cost" id="totalCostDialog">
              <p>Total</p>
              <p>Insert costs here!</p>
            </div>
            <div class="buy_order">
              <button class="button_buy_order" id="openButtonDialog" onclick="openDialog()">
              Insert costs here!
              </button>
            </div>
          </section>
        </article>
        `;
}

function basketWithDishes(index) {
  return `
          <article class="dish_in_basket">
              <section class="name_n_amount">
                <p>${dishesInBasket[index].name}</p>
                <div class="amount">
                  <button id="reduceDish${+index}" onclick="reduce(${index})">-</button>
                  <p>${dishesInBasket[index].amount}</p>
                  <button id="increaseDish${+index}" onclick="increase(${index}, '${dishesInBasket[index].category}')">+</button>
                </div>
              </section>
              <section class="costs_n_trash">
                <button onclick="erase(${index})"><img src="./assets/icons/delete.svg" alt="Trash Icon"></button>
                <p>${dishesInBasket[index].price}€</p>
              </section>
            </article>
          `;
}
