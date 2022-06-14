function createTitle() {
  const body = document.querySelector("body");
  const inp = document.querySelector(".inp");
  const previous = document.querySelector(".previous");
  const current = document.querySelector(".current");
  const next = document.querySelector(".next");

  const main = document.querySelector(".main");
  let value = 1;

  async function getCom() {
    main.innerHTML = "";
    console.log(value);
    const response = await fetch(
      `https://gorest.co.in/public-api/posts?page=${current.textContent}`
    );
    const data = await response.json();
    const mas = data.data;
    console.log(mas);
    for (let i = 0; i < mas.length; i++) {
      const title = document.createElement("h1");
      title.className = "title";
      title.textContent = `${i + 1}) ${mas[i].title}`;
      main.append(title);
      let num = 0;
      async function getComents() {
        const response = await fetch(
          `https://gorest.co.in/public-api/comments?post_id=${num}`
        );
        const data = await response.json();
        const com = data;
        console.log(data);
        localStorage.setItem("coment", JSON.stringify(com));
      }
      title.addEventListener("click", (e) => {
        num = Number.parseInt(e.target.textContent);
        console.log(num);
        getComents();

        const arr = mas[i];
        localStorage.setItem("article", JSON.stringify(arr));
        window.location.href = `desc.html`;
      });
    }
  }
  getCom();
  previous.addEventListener("click", () => {
    // if (current.textContent == 2) {
    //   previous.style.display = "none";
    // }
    // if (current.textContent == 77) {
    //   next.style.display = "flex";
    // }
    if (current.textContent > 1) {
      current.textContent -= 1;
      getCom();
    }
  });
  next.addEventListener("click", () => {
    // if (current.textContent == 1) {
    //   previous.style.display = "flex";
    // }
    // if (current.textContent == 76) {
    //   next.style.display = "none";
    // }
    if (current.textContent < 77) {
      current.textContent = Number.parseInt(current.textContent) + 1;
      getCom();
    }
  });
  // inp.addEventListener("keydown", (e) => {
  //   if (e.keyCode == 13) {
  //     if (inp.value > 0 && inp.value < 80) {
  //       value = inp.value;
  //       console.log(value);
  //       inp.value = "";
  //       getCom();
  //     } else {
  //       alert("Такой страницы не существует");
  //     }
  //   }
  // });
}
createTitle();
