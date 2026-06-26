function burgerTemplate(index) {
  return `
            <section class="dish">
              <img src="${dishes[0].burger[index].picture}" alt="${dishes[0].burger[index].name}" />
              <section class="explanation">
                <div class="description">
                  <h4>${dishes[0].burger[index].name}</h4>
                  <p>${dishes[0].burger[index].ingredients}</p>
                </div>
                <div class="costs">
                  <p>${dishes[0].burger[index].price}€</p>
                  <div>
                    <button>Add to basket</button>
                  </div>
                </div>
              </section>
            </section>
            `;
}

function pizzaTemplate(index) {
    return `
            <section class="dish">
              <img src="${dishes[0].pizza[index].picture}" alt="${dishes[0].pizza[index].name}" />
              <section class="explanation">
                <div class="description">
                  <h4>${dishes[0].pizza[index].name}</h4>
                  <p>${dishes[0].pizza[index].ingredients}</p>
                </div>
                <div class="costs">
                  <p>${dishes[0].pizza[index].price}€</p>
                  <div>
                    <button>Add to basket</button>
                  </div>
                </div>
              </section>
            </section>
            `;
}

function saladTemplate(index) {
    return `
            <section class="dish">
              <img src="${dishes[0].salad[index].picture}" alt="${dishes[0].salad[index].name}" />
              <section class="explanation">
                <div class="description">
                  <h4>${dishes[0].salad[index].name}</h4>
                  <p>${dishes[0].salad[index].ingredients}</p>
                </div>
                <div class="costs">
                  <p>${dishes[0].salad[index].price}€</p>
                  <div>
                    <button>Add to basket</button>
                  </div>
                </div>
              </section>
            </section>
            `;
}