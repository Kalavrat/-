function second() {
  const body = document.querySelector(".bodyD");
  const back = document.querySelector(".back");
  const art = JSON.parse(localStorage.getItem("article"));
  console.log(art);
  const titleS = document.createElement("h1");
  titleS.className = "titleS";
  titleS.textContent = `${art.title}`;
  body.append(titleS);
  const about = document.createElement("h1");
  about.className = "about";
  about.textContent = `${art.body}`;
  body.append(about);
  back.addEventListener("click", () => {
    window.location.href = `index.html`;
  });

  const coment = JSON.parse(localStorage.getItem("coment"));
  console.log(coment);
  console.log(coment.data.length);
  const arr = coment.data;
  for (let i = 0; i < arr.length; i++) {
    const name = document.createElement("h1");
    name.className = "name";
    name.textContent = `${arr[i].name}`;
    body.append(name);
    const opis = document.createElement("h1");
    opis.className = "opis";
    opis.textContent = `${arr[i].body}`;
    body.append(opis);
  }
  // for (let i = 0; i < 20; i++) {
  //   async function getComents() {
  //     const response = await fetch(
  //       `https://gorest.co.in/public-api/comments?post_id=${i + 1}`
  //     );
  //     const data = await response.json();
  //     const com = data;
  //     console.log(data);
  //   }
  //   getComents();
  // }
}
second();
