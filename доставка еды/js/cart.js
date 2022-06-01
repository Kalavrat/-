export function zakaz() {
  const button_cart = document.querySelector(".button-cart");
  const modal_cart = document.querySelector(".modal");
  const close_cart = document.querySelector(".close");
  const modal_body = document.querySelector(".modal-body");
  const modal_dialog = document.querySelector(".modal-dialog");
  const modal_footer = document.createElement("div");
  modal_footer.className = "modal-footer";
  modal_footer.innerHTML = `
              <span class="modal-pricetag" >Цена</span>
          <div class="footer-buttons">
            <button class="button button-primary">Оформить заказ</button>
            <button class="button clear-cart">Отмена</button>
          </div>`;
  modal_dialog.append(modal_footer);

  const buttonSend = modal_cart.querySelector(".button-primary");
  const clearCart = modal_cart.querySelector(".clear-cart");
  const modal_price = document.querySelector(".modal-pricetag");

  clearCart.addEventListener("click", (e) => {
    location.reload();
    modal_body.innerHTML = "";
    localStorage.removeItem("food");
  });

  const resetCart = () => {
    location.reload();
    modal_body.innerHTML = "";
    localStorage.removeItem("food");
    modal_cart.style.display = "none";
  };

  const minus = (name) => {
    const foodArr = JSON.parse(localStorage.getItem("food"));
    foodArr.map((item) => {
      if (item.name == name) {
        if (item.count > 0) {
          item.count--;
        }
      }
      return item;
    });
    localStorage.setItem("food", JSON.stringify(foodArr));
    createCart(foodArr);
  };

  const plus = (name) => {
    const foodArr = JSON.parse(localStorage.getItem("food"));
    foodArr.map((item) => {
      if (item.name == name) {
        item.count++;
      }
      return item;
    });
    localStorage.setItem("food", JSON.stringify(foodArr));
    createCart(foodArr);
  };

  const createCart = (data) => {
    modal_body.innerHTML = "";
    let kolvo = 0;
    let money = 0;
    data.forEach(({ name, price, count }) => {
      const food_row = document.createElement("div");
      food_row.className = "food-row";
      food_row.innerHTML = `
          <span class="food-name">${name}</span>
              <strong class="food-price">${price}</strong>
              <div class="food-counter">
                <button class="counter-button btn-min" id="${name}">-</button>
                <span class="counter">${count}</span>
                <button class="counter-button btn-plus" id="${name}">+</button>
              </div>`;
      modal_body.append(food_row);
      kolvo = price * count;
      money += kolvo;
      console.log(count);
      modal_price.textContent = money + "₽";
      console.log(modal_price.textContent);
    });
  };

  modal_body.addEventListener("click", (event) => {
    event.preventDefault();

    if (event.target.classList.contains("btn-min")) {
      minus(event.target.id);
    } else if (event.target.classList.contains("btn-plus")) {
      plus(event.target.id);
    }
  });

  buttonSend.addEventListener("click", () => {
    const foodArr = localStorage.getItem("food");
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: foodArr,
    })
      .then((response) => {
        if (response.ok) {
          resetCart();
        }
      })
      .catch((event) => {
        console.warn(event);
      });
  });

  button_cart.addEventListener("click", () => {
    const foodArr = JSON.parse(localStorage.getItem("food"));

    if (localStorage.getItem("food")) {
      createCart(JSON.parse(localStorage.getItem("food")));
    }
    console.log(foodArr);
    if (foodArr == null) {
      alert("Корзина пуста");
    } else {
      modal_cart.style.display = "flex";
    }
  });

  modal_cart.addEventListener("click", (event) => {
    if (event.target == modal_cart) {
      modal_cart.style.display = "none";
    }
    if (event.target == close_cart) {
      modal_cart.style.display = "none";
    }
  });
}
