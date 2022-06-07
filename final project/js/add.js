import { add_btn, edit } from "./edit.js";

export function add() {
  const add_client = document.querySelector(".add_client");
  const modal_add = document.querySelector(".modal_add");
  const add_cross = document.querySelector(".add_cross");
  const modal_edit = document.querySelector(".modal_edit");
  const modal_remove = document.querySelector(".modal_remove");
  const add_new_contact = document.querySelector(".add_new_contact");
  const only_contact = document.querySelector(".add_only_contact");
  const add_add_button = document.querySelector(".add_add_button");
  const add_save = document.querySelector(".add_save");
  const cancel = document.querySelector(".cancel_client");
  const sur_inp = document.querySelector(".add_sur_inp");
  const name_inp = document.querySelector(".add_name_inp");
  const sname_inp = document.querySelector(".add_sname_inp");
  const main_block = document.querySelector(".main_block");
  const warning = document.querySelector(".add_warning");

  function deleteCont() {
    const contacts = document.querySelectorAll(".add_full_contact");
    const button = document.querySelectorAll(".add_cancel_div");
    const cancel2 = document.querySelector(".add_cancel2");
    const cancel = document.querySelector(".add_cancel");

    for (let i = 0; i < contacts.length; i++) {
      button[i].addEventListener("mouseover", () => {
        button[i].style.border = "1px solid #F06A4D";
        cancel2.style.display = "none";
        cancel.style.display = "flex";
      });
      button[i].addEventListener("mouseout", () => {
        button[i].style.border = "1px solid #c8c5d1";
        cancel2.style.display = "flex";
        cancel.style.display = "none";
      });
      button[i].addEventListener("click", () => {
        contacts[i].remove();
      });
    }
  }

  let num = 999;

  function add_button(mas) {
    // add_add_button.addEventListener("click", () => {
    const button = document.querySelectorAll(".add_cancel_div");
    if (button.length >= 10) return;
    const add_full_contact = document.createElement("div");
    add_full_contact.className = "add_full_contact";
    add_full_contact.innerHTML = `  
            <div class="add_back_contact">
              <div class="add_contact">
                <div class="add_choice_contact">
                  <h5 class="add_text_choice">Телефон</h5>
                  <img class="down2" src="png/down2.svg" alt="" draggable="false"/>
                  <img class="up2" src="png/up2.svg" alt="" draggable="false"/>
                </div>
                <input
                  class="add_choice_inp"
                  id=""
                  placeholder="Введите данные контакта"
                />
                <div class="add_cancel_div">
                  <img class="add_cancel2" src="png/cancel2.svg" alt="" draggable="false"/>
                  <img class="add_cancel" src="png/cancel.svg" alt="" draggable="false"/>
                </div>
              </div>
            </div>
            <div class="add_spisok">
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
    console.log("121212");
    only_contact.append(add_full_contact);
    const contact = add_full_contact.querySelector(".add_choice_contact");
    const spisok = add_full_contact.querySelector(".add_spisok");
    const down = add_full_contact.querySelector(".down2");
    const up = add_full_contact.querySelector(".up2");

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
      const text = add_full_contact.querySelector(".add_text_choice");
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

    deleteCont();
    // });
  }

  const text_add_contact = document.querySelector(".text_add_contact");
  const plus = document.querySelector(".add_plus");
  const plus2 = document.querySelector(".add_plus2");

  add_add_button.addEventListener("mouseover", () => {
    console.log(text_add_contact);
    text_add_contact.style.color = "#9873FF";
    plus.style.display = "none";
    plus2.style.display = "flex";
  });

  add_add_button.addEventListener("mouseout", () => {
    text_add_contact.style.color = "inherit";
    plus.style.display = "flex";
    plus2.style.display = "none";
  });

  add_add_button.addEventListener("click", () => {
    add_button();
  });

  add_client.addEventListener("click", () => {
    modal_add.style.display = "flex";
  });

  modal_add.addEventListener("click", (e) => {
    const contacts = document.querySelectorAll(".add_full_contact");

    if (e.target == add_cross) {
      modal_add.style.display = "none";
      name_inp.style.borderBottom = "1px solid #c8c5d1";
      sur_inp.style.borderBottom = "1px solid #c8c5d1";
      warning.style.display = "none";
      name_inp.value = "";
      sur_inp.value = "";
      sname_inp.value = "";
      for (let i = 0; i < contacts.length; i++) {
        contacts[i].remove();
      }
    } else if (e.target == modal_add) {
      modal_add.style.display = "none";
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

  cancel.addEventListener("click", () => {
    const contacts = document.querySelectorAll(".add_full_contact");
    sur_inp.value = "";
    name_inp.value = "";
    sname_inp.value = "";
    name_inp.style.borderBottom = "1px solid #c8c5d1";
    sur_inp.style.borderBottom = "1px solid #c8c5d1";
    warning.style.display = "none";
    // console.log(contact);
    for (let i = 0; i < contacts.length; i++) {
      contacts[i].remove();
    }
  });

  name_inp.addEventListener("input", () => {
    name_inp.value = name_inp.value.replace(/[^a-zа-яё\s\-]/gi, "");
    if (name_inp.value == "") {
      warning.style.display = "flex";
      name_inp.style.borderBottom = "1px solid #f06a4d";
    } else {
      warning.style.display = "none";
      name_inp.style.border = "";
    }
  });

  sur_inp.addEventListener("input", () => {
    sur_inp.value = sur_inp.value.replace(/[^a-zа-яё\s\-]/gi, "");
    if (sur_inp.value == "") {
      warning.style.display = "flex";
      sur_inp.style.borderBottom = "1px solid #f06a4d";
    } else {
      warning.style.display = "none";
      sur_inp.style.border = "";
    }
  });

  sname_inp.addEventListener("input", () => {
    sname_inp.value = sname_inp.value.replace(/[^a-zа-яё\s\-]/gi, "");
  });

  add_save.addEventListener("mouseover", () => {
    add_save.style.backgroundColor = "#8052FF";
  });

  add_save.addEventListener("mouseout", () => {
    add_save.style.backgroundColor = "#9873ff";
  });

  let mas = [];
  add_save.addEventListener("click", () => {
    const contacts = document.querySelectorAll(".add_full_contact");
    const text = document.querySelectorAll(".add_text_choice");
    const choice_inp = document.querySelectorAll(".add_choice_inp");

    const local = JSON.parse(localStorage.getItem("client"));
    if (local != null) {
      mas = local;
    }

    let mas_cont = [];
    let error = 0;

    let client = {
      id: "",
      name: "",
      surname: "",
      sname: "",
      date_create: "",
      time_create: "",
      date_edit: "",
      time_edit: "",
      conts: [],
    };

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
      modal_add.style.display = "none";
      // client.id = mas.length
      client.name = name_inp.value.trim();
      client.surname = sur_inp.value.trim();
      client.sname = sname_inp.value.trim();
      client.date_create = today;
      client.time_create = time;
      client.date_edit = today;
      client.time_edit = time;
      name_inp.value = "";
      sur_inp.value = "";
      sname_inp.value = "";
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

        for (let i = 0; i < contacts.length; i++) {
          contacts[i].remove();
        }
      }
      client.conts = mas_cont;
      mas.push(client);
      localStorage.setItem("client", JSON.stringify(mas));
      console.log(mas);
      createTable(true, mas);
    }
  });

  let local = JSON.parse(localStorage.getItem("client"));
  if (local != null) {
    window.onload = function () {
      createTable(false, local);
    };
  }
}

export function createTable(flag, mas) {
  const table = document.querySelector(".table");
  table.innerHTML = "";
  let id = 0;
  for (let i = 0; i < mas.length; i++) {
    if (flag == true) {
      mas[i].id = id++;
      localStorage.setItem("client", JSON.stringify(mas));
    }
    const row = document.createElement("div");
    row.className = "row";
    row.innerHTML = `
                <div class="table_id">
              <h4 class="text_id">${mas[i].id}</h4>
            </div>
            <div class="table_fio">
              <h4 class="text_fio">${
                mas[i].surname + ` ` + mas[i].name + ` ` + mas[i].sname
              }</h4>
            </div>
            <div class="table_create">
              <h4 class="text_date">${mas[i].date_create}</h4>
              <h4 class="text_time">${mas[i].time_create}</h4>
            </div>
            <div class="table_edit">
              <h4 class="text_edit_date">${mas[i].date_edit}</h4>
              <h4 class="text_edit_time">${mas[i].time_edit}</h4>
            </div>
            <div class="table_contact">
            </div>
            <div class="table_action">
              <div class="table_action_edit">
                <img
                  class="edit_img"
                  src="png/edit.svg"
                  alt=""
                  draggable="false"
                />
                <img class="edit_load" src="png/load-purple.svg" alt="" />
                <h4 class="text_act_edit">Изменить</h4>
              </div>

              <div class="table_action_remove">
                <img
                  class="cancel_img"
                  src="png/cancel.svg"
                  alt=""
                  draggable="false"
                />
                <img class="cancel_load" src="png/load-red.svg" alt="" />
                <h4 class="text_act_cancel">Удалить</h4>
              </div>
            </div>
      `;
    table.append(row);
    console.log(row);
    console.log(table);

    const row_edit = row.querySelector(".table_action_edit");
    const edit_load = row.querySelector(".edit_load");
    const edit_pencil = row.querySelector(".edit_img");
    const text_edit = row.querySelector(".text_act_edit");
    row_edit.addEventListener("click", () => {
      text_edit.style.color = "#9873FF";
      edit_pencil.style.display = "none";
      edit_load.style.display = "flex";

      function edit_cl() {
        text_edit.style.color = "inherit";
        edit_pencil.style.display = "flex";
        edit_load.style.display = "none";
        const modal_edit = document.querySelector(".modal_edit");
        const sur_inp = document.querySelector(".edit_sur_inp");
        const name_inp = document.querySelector(".edit_name_inp");
        const sname_inp = document.querySelector(".edit_sname_inp");
        const edit_id = document.querySelector(".edit_id");
        edit_id.textContent = `ID: ${mas[i].id}`;
        modal_edit.style.display = "flex";
        sur_inp.value = `${mas[i].surname}`;
        name_inp.value = `${mas[i].name}`;
        sname_inp.value = `${mas[i].sname}`;
        let cont = "";
        let flag = "";
        let value = "";
        for (let k = 0; k < mas[i].conts.length; k++) {
          if (mas[i].conts[k].type == "png/chel.svg") {
            cont = "Доп. телефон";
          } else if (mas[i].conts[k].type == "png/mail.svg") {
            cont = "Email";
          } else if (mas[i].conts[k].type == "png/vk.svg") {
            cont = "Vk";
          } else if (mas[i].conts[k].type == "png/fb.svg") {
            cont = "Facebook";
          } else if (mas[i].conts[k].type == "png/phone.svg") {
            cont = "Телефон";
          }
          value = mas[i].conts[k].value;

          console.log(cont);

          add_btn(true, cont, value);
        }
      }
      setTimeout(edit_cl, 500);
    });

    const remove_client = document.querySelector(".remove_client");

    remove_client.addEventListener("click", () => {
      const modal_remove = document.querySelector(".modal_remove");
      modal_remove.style.display = "flex";
      const remove_id = document.querySelector(".remove_id");
      remove_id.textContent = `ID: ${mas[i].id}`;
    });

    const row_remove = row.querySelector(".table_action_remove");
    const cancel_load = row.querySelector(".cancel_load");
    const cancel_img = row.querySelector(".cancel_img");
    const text_remove = row.querySelector(".text_act_cancel");

    row_remove.addEventListener("click", () => {
      text_remove.style.color = "#F06A4D";
      cancel_img.style.display = "none";
      cancel_load.style.display = "flex";

      function delete_cl() {
        text_remove.style.color = "inherit";
        cancel_img.style.display = "flex";
        cancel_load.style.display = "none";
        const modal_remove = document.querySelector(".modal_remove");
        modal_remove.style.display = "flex";
        const remove_id = document.querySelector(".remove_id");
        remove_id.textContent = `ID: ${mas[i].id}`;
      }
      setTimeout(delete_cl, 500);
    });

    for (let j = 0; j < mas[i].conts.length; j++) {
      const table_contact = row.querySelector(".table_contact");
      const contact_img = document.createElement("img");
      contact_img.className = "contact_img";
      contact_img.src = `${mas[i].conts[j].type}`;
      contact_img.dataTooltip = "Текст подсказки";
      contact_img.draggable = "false";
      table_contact.append(contact_img);
    }
  }
}
