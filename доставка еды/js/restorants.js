export function addRest() {
  const render = (data) => {
    const div = document.querySelector(".cards-restaurants");
    data.forEach((item) => {
      const { image, kitchen, name, price, products, stars, time_of_delivery } =
        item;
      const a = document.createElement("a");
      a.href = "/restaurant.html";
      a.classList.add("card");
      a.classList.add("card-restaurant");
      a.innerHTML = `<img
                src=${image}
                alt="image"
                class="card-image"
              />
              <div class="card-text">
                <div class="card-heading">
                  <h3 class="card-title">${name}</h3>
                  <span class="card-tag tag">${time_of_delivery}</span>
                </div>
                <div class="card-info">
                  <div class="rating">${stars}</div>
                  <div class="price">${price}</div>
                  <div class="category">${kitchen}</div>
                </div>
              </div>
          <a/>`;
      a.addEventListener("click", (event) => {
        event.preventDefault();
        localStorage.setItem("rest", JSON.stringify(item));
        window.location.href = "/restaurant.html";
      });
      div.append(a);
    });
  };
  fetch("./db/partners.json")
    .then((respons) => respons.json())
    .then((data) => {
      render(data);
    })
    .catch((error) => {
      console.log(error);
    });
}
