export function addDish() {
  const rest = JSON.parse(localStorage.getItem("rest"));

  const foodArr = localStorage.getItem("food")
    ? JSON.parse(localStorage.getItem("food"))
    : [];
  const addFood = (foodItem) => {
    if (foodArr.some((item) => item.name === foodItem.name)) {
      foodArr.map((item) => {
        if (item.name === foodItem.name) {
          item.count++;
        }
      });
    } else {
      foodArr.push(foodItem);
    }
    console.log(foodArr);
    localStorage.setItem("food", JSON.stringify(foodArr));
  };

  const render = (data) => {
    const sectionMenu = document.querySelector(".menu");
    const sectionHead = document.createElement("div");
    sectionHead.className = "section-heading";
    sectionHead.innerHTML = `<h2 class="section-title restaurant-title">${rest.name}</h2>
            <div class="card-info">
              <div class="rating">${rest.stars}</div>
              <div class="price">${rest.price}</div>
              <div class="category">${rest.kitchen}</div>
            </div>`;
    sectionMenu.prepend(sectionHead);
    const cardsMenu = document.querySelector(".cards-menu");
    data.forEach(({ description, id, image, name, price }) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img
                src="${image}"
                alt="${name}"
                class="card-image"
              />
              <div class="card-text">
                <div class="card-heading">
                  <h3 class="card-title card-title-reg">${name}</h3>
                </div>
                <div class="card-info">
                  <div class="ingredients">
                    ${description}
                  </div>
                </div>
                <div class="card-buttons">
                  <button class="button button-primary button-add-cart">
                    <span class="button-card-text">В корзину</span>
                    <span class="button-cart-svg"></span>
                  </button>
                  <strong class="card-price-bold">${price}</strong>
                </div>
              </div>
          `;
      card.querySelector(".button-add-cart").addEventListener("click", () => {
        addFood({ name, price, count: 1 });
      });
      cardsMenu.append(card);
    });
  };
  fetch(`./db/${rest.products}`)
    .then((respons) => respons.json())
    .then((data) => {
      render(data);
    })
    .catch((error) => {
      console.log(error);
    });
}
