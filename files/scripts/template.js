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
