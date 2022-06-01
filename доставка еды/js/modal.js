export function work() {
  const button_aut = document.querySelector(".button-auth");
  const user_name = document.querySelector(".user-name");
  const button_out = document.querySelector(".button-out");
  const button_cart = document.querySelector(".button-cart");
  const modal_auth = document.querySelector(".modal-auth");
  const close_auth = document.querySelector(".close-auth");
  const button_login = document.querySelector(".button-login");
  const inp_login = modal_auth.querySelector("input[type=text]");
  const inp_password = modal_auth.querySelector("input[type=password]");
  let count = 0;
  let logins = [
    { login: "Дима", password: "Дима123" },
    { login: "Антон", password: "Антон123" },
    { login: "Руслан", password: "Руслан123" },
  ];

  if (JSON.parse(localStorage.getItem("login")) != null) {
    user_name.style.display = "flex";
    user_name.textContent = JSON.parse(localStorage.getItem("login"));
    button_aut.style.display = "none";
    button_cart.style.display = "flex";
    button_out.style.display = "flex";
    modal_auth.style.display = "none";
  }

  button_aut.addEventListener("click", () => {
    modal_auth.style.display = "flex";
  });

  modal_auth.addEventListener("click", (event) => {
    if (event.target == modal_auth) {
      modal_auth.style.display = "none";
    }
    if (event.target == close_auth) {
      modal_auth.style.display = "none";
    }
  });

  button_login.addEventListener("click", (event) => {
    event.preventDefault();
    for (let i = 0; i < logins.length; i++) {
      if (
        logins[i].login == inp_login.value &&
        logins[i].password == inp_password.value
      ) {
        user_name.style.display = "flex";
        user_name.textContent = logins[i].login;
        localStorage.setItem("login", JSON.stringify(logins[i].login));
        button_aut.style.display = "none";
        button_cart.style.display = "flex";
        button_out.style.display = "flex";
        modal_auth.style.display = "none";
        inp_login.value = "";
        inp_password.value = "";
        count = 1;
      }
    }
    if (count == 0) {
      alert("Неверный логин или пароль");
    }
  });

  button_out.addEventListener("click", () => {
    localStorage.setItem("login", JSON.stringify(null));
    user_name.style.display = "none";
    user_name.textContent = "";
    button_cart.style.display = "none";
    button_out.style.display = "none";
    button_aut.style.display = "flex";
    location.reload();
  });
}
