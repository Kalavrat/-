import { createTable } from "./add.js";
export function removeRow() {
  const modal_remove = document.querySelector(".modal_remove");
  const modal_edit = document.querySelector(".modal_edit");
  const remove_cross = document.querySelector(".remove_cross");
  const remove_text = document.querySelector(".remove_cancel");
  const remove_btn = document.querySelector(".remove");
  const remove_id = document.querySelector(".remove_id");

  modal_remove.addEventListener("click", (e) => {
    if (e.target == remove_cross) {
      modal_remove.style.display = "none";
    } else if (e.target == modal_remove) {
      modal_remove.style.display = "none";
    } else if (e.target == remove_text) {
      modal_remove.style.display = "none";
    }
  });

  remove_btn.addEventListener("mouseover", () => {
    remove_btn.style.backgroundColor = "#8052FF";
  });
  remove_btn.addEventListener("mouseout", () => {
    remove_btn.style.backgroundColor = "#9873ff";
  });

  let mas = [];
  remove_btn.addEventListener("click", () => {
    const local = JSON.parse(localStorage.getItem("client"));
    if (local != null) {
      mas = local;
    }
    // console.log(mas);
    const id = remove_id.textContent.split(" ");
    for (let i = 0; i < mas.length; i++) {
      if (mas[i].id == id[1]) {
        // mas.splice(i, i);
        mas.splice(i, 1);
      }
    }
    modal_remove.style.display = "none";
    localStorage.setItem("client", JSON.stringify(mas));
    createTable(true, mas);
    modal_edit.style.display = "none";
  });
}
