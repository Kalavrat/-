import { createTable } from "./add.js";
let num = 999;
export function add_btn(flag, cont, value) {
  const only_contact = document.querySelector(".edit_only_contact");
  const text = document.querySelectorAll(".edit_text_choice");
  const local = JSON.parse(localStorage.getItem("client"));

  if (flag == false) {
    cont = "Телефон";
    value = "";
  }
  console.log(cont);

  const button = document.querySelectorAll(".edit_cancel_div");
  if (button.length >= 10) return;
  const edit_full_contact = document.createElement("div");
  edit_full_contact.className = "edit_full_contact";
  edit_full_contact.innerHTML = `
              <div class="edit_back_contact">
                <div class="edit_contact">
                  <div class="edit_choice_contact">
                    <h5 class="edit_text_choice">${cont}</h5>
                    <img class="down2" src="png/down2.svg" alt="" draggable="false"/>
                    <img class="up2" src="png/up2.svg" alt="" draggable="false"/>
                  </div>
                  <input
                    class="edit_choice_inp"
                    id=""
                    placeholder="Введите данные контакта"
                    value="${value}"
                  />
                  <div class="edit_cancel_div">
                    <img class="edit_cancel2" src="png/cancel2.svg" alt="" draggable="false"/>
                  <img class="edit_cancel" src="png/cancel.svg" alt="" draggable="false"/>
                  </div>
                </div>
              </div>
              <div class="edit_spisok">
                  <div class="telephone">
                    <h6 class="text_teleph">Доп. телефон</h6>
                  </div>
                  <div class="email">
                    <h6 class="text_email" >Email</h6>
                  </div>
                  <div class="VK">
                    <h6 class="text_vk" >Vk</h6>
                  </div>
                  <div class="face">
                    <h6 class="text_face" >Facebook</h6>
                  </div>
              </div>
          `;
  only_contact.append(edit_full_contact);
  const contact = edit_full_contact.querySelector(".edit_choice_contact");
  const spisok = edit_full_contact.querySelector(".edit_spisok");
  const down = edit_full_contact.querySelector(".down2");
  const up = edit_full_contact.querySelector(".up2");
  spisok.style.zIndex = num--;
  console.log(num);
  contact.addEventListener("click", () => {
    console.log(spisok.style.display != "grid");
    if (spisok.style.display != "grid") {
      down.style.display = "none";
      up.style.display = "flex";
      spisok.style.display = "grid";
      console.log("qw");
    } else {
      down.style.display = "flex";
      up.style.display = "none";
      spisok.style.display = "none";
      console.log("eee");
    }
  });
  spisok.addEventListener("click", (e) => {
    const text = edit_full_contact.querySelector(".edit_text_choice");
    const telephone = spisok.querySelector(".telephone");
    const email = spisok.querySelector(".email");
    const vk = spisok.querySelector(".VK");
    const face = spisok.querySelector(".face");
    const telephone_text = telephone.querySelector(".text_teleph");
    const email_text = email.querySelector(".text_email");
    const vk_text = vk.querySelector(".text_vk");
    const face_text = face.querySelector(".text_face");
    if (e.target == telephone || e.target == telephone_text) {
      text.textContent = telephone_text.textContent;
      spisok.style.display = "none";
    } else if (e.target == email || e.target == email_text) {
      text.textContent = email_text.textContent;
      spisok.style.display = "none";
    } else if (e.target == vk || e.target == vk_text) {
      text.textContent = vk_text.textContent;
      spisok.style.display = "none";
    } else if (e.target == face || e.target == face_text) {
      text.textContent = face_text.textContent;
      spisok.style.display = "none";
    }
  });
  const contacts = document.querySelectorAll(".edit_full_contact");
  const btn = document.querySelectorAll(".edit_cancel_div");
  const cancel2 = document.querySelector(".edit_cancel2");
  const cancel = document.querySelector(".edit_cancel");
  for (let i = 0; i < contacts.length; i++) {
    btn[i].addEventListener("mouseover", () => {
      btn[i].style.border = "1px solid #F06A4D";
      cancel2.style.display = "none";
      cancel.style.display = "flex";
    });
    btn[i].addEventListener("mouseout", () => {
      btn[i].style.border = "1px solid #c8c5d1";
      cancel2.style.display = "flex";
      cancel.style.display = "none";
    });
    btn[i].addEventListener("click", () => {
      contacts[i].remove();
    });
  }
}

export function edit() {
  const modal_edit = document.querySelector(".modal_edit");
  const edit_cross = document.querySelector(".edit_cross");
  const edit_id = document.querySelector(".edit_id");
  const edit_save = document.querySelector(".edit_save");
  const sur_inp = document.querySelector(".edit_sur_inp");
  const name_inp = document.querySelector(".edit_name_inp");
  const sname_inp = document.querySelector(".edit_sname_inp");
  const warning = document.querySelector(".edit_warning");

  const table = document.querySelector(".table");
  console.log(table);

  modal_edit.addEventListener("click", (e) => {
    const contacts = document.querySelectorAll(".edit_full_contact");

    if (e.target == edit_cross) {
      modal_edit.style.display = "none";
      edit_id.textContent = "";
      name_inp.style.borderBottom = "1px solid #c8c5d1";
      sur_inp.style.borderBottom = "1px solid #c8c5d1";
      warning.style.display = "none";
      name_inp.value = "";
      sur_inp.value = "";
      sname_inp.value = "";
      for (let i = 0; i < contacts.length; i++) {
        contacts[i].remove();
      }
    } else if (e.target == modal_edit) {
      modal_edit.style.display = "none";
      name_inp.style.borderBottom = "1px solid #c8c5d1";
      sur_inp.style.borderBottom = "1px solid #c8c5d1";
      warning.style.display = "none";
      name_inp.value = "";
      sur_inp.value = "";
      sname_inp.value = "";
      for (let i = 0; i < contacts.length; i++) {
        contacts[i].remove();
      }
    }
  });

  edit_save.addEventListener("mouseover", () => {
    edit_save.style.backgroundColor = "#8052FF";
  });

  edit_save.addEventListener("mouseout", () => {
    edit_save.style.backgroundColor = "#9873ff";
  });

  let mas = [];
  edit_save.addEventListener("click", () => {
    const contacts = document.querySelectorAll(".edit_full_contact");
    const btn = document.querySelectorAll(".edit_cancel_div");
    const text = document.querySelectorAll(".edit_text_choice");
    const choice_inp = document.querySelectorAll(".edit_choice_inp");
    const local = JSON.parse(localStorage.getItem("client"));
    if (local != null) {
      mas = local;
    }
    let mas_cont = [];
    let error = 0;

    let date = new Date();

    let today;
    let todayY = date.getFullYear();
    let today_year;
    let todayM = date.getMonth() + 1;
    let today_month;
    let todayD = date.getDate();
    let today_day;

    let time;
    let hours = date.getHours();
    let time_hours;
    let minutes = date.getMinutes();
    let time_minutes;

    if (hours < 10) {
      time_hours = `0${hours}`;
    } else {
      time_hours = hours;
    }
    if (minutes < 10) {
      time_minutes = `0${minutes}`;
    } else {
      time_minutes = minutes;
    }

    time = `${time_hours}:${time_minutes}`;

    if (todayY < 10) {
      today_year = `0${todayY}`;
    } else {
      today_year = todayY;
    }
    if (todayM < 10) {
      today_month = `0${todayM}`;
    } else {
      today_month = todayM;
    }
    if (todayD < 10) {
      today_day = `0${todayD}`;
    } else {
      today_day = todayD;
    }

    today = `${today_year}.${today_month}.${today_day}`;

    if (name_inp.value == "") {
      warning.style.display = "flex";
      name_inp.style.borderBottom = "1px solid #f06a4d";
      error++;
    }
    if (sur_inp.value == "") {
      warning.style.display = "flex";
      sur_inp.style.borderBottom = "1px solid #f06a4d";
      error++;
    }
    if (error == 0) {
      modal_edit.style.display = "none";
      for (let j = 0; j < mas.length; j++) {
        const id = edit_id.textContent.split(" ");
        if (mas[j].id == id[1]) {
          mas[j].name = name_inp.value.trim();
          mas[j].surname = sur_inp.value.trim();
          mas[j].sname = sname_inp.value.trim();
          mas[j].date_edit = today;
          mas[j].time_edit = time;
          name_inp.value = "";
          sur_inp.value = "";
          sname_inp.value = "";
          mas[j].conts = [];

          for (let i = 0; i < contacts.length; i++) {
            const contact = { type: "", value: "" };
            if (text[i].textContent == "Доп. телефон") {
              contact.type = "png/chel.svg";
            } else if (text[i].textContent == "Email") {
              contact.type = "png/mail.svg";
            } else if (text[i].textContent == "Vk") {
              contact.type = "png/vk.svg";
            } else if (text[i].textContent == "Facebook") {
              contact.type = "png/fb.svg";
            } else if (text[i].textContent == "Телефон") {
              contact.type = "png/phone.svg";
            }
            contact.value = choice_inp[i].value;

            if (choice_inp[i].value != "") {
              mas_cont.push(contact);
            }
            contacts[i].remove();
          }
          mas[j].conts = mas_cont;
        }
      }
      localStorage.setItem("client", JSON.stringify(mas));
      console.log(mas);
      createTable(true, mas);
    }
    for (let i = 0; i < contacts.length; i++) {
      btn[i].addEventListener("click", () => {
        contacts[i].remove();
      });
    }
  });
}
