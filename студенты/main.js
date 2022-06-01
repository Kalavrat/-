function reload() {
  const body = document.querySelector(".body");
  const form = document.querySelector(".form");
  const names = document.querySelector(".names");
  const surname = document.querySelector(".surname");
  const sname = document.querySelector(".sname");
  const burthday = document.querySelector(".burthday");
  const year = document.querySelector(".year");
  const faculty = document.querySelector(".faculty");
  const btn = document.querySelector(".btn");

  const er_name = document.createElement("h1");
  const er_sur = document.createElement("h1");
  const er_sname = document.createElement("h1");
  const er_burth = document.createElement("h1");
  const er_year = document.createElement("h1");
  const er_fac = document.createElement("h1");

  er_name.className = "er_name";
  er_sur.className = "er_sur";
  er_sname.className = "er_sname";
  er_burth.className = "er_burth";
  er_year.className = "er_year";
  er_fac.className = "er_fac";

  er_name.textContent = "Обязательное поле для заполнения";
  er_sur.textContent = "Обязательное поле для заполнения";
  er_sname.textContent = "Обязательное поле для заполнения";
  er_burth.textContent = "Выберите дату от 01.01.1900 до текущей";
  er_year.textContent = "Введите год с 2000 до текущего";
  er_fac.textContent = "Обязательное поле для заполнения";

  const table = document.querySelector(".table");
  const th_fio = document.querySelector(".th_fio");
  const th_fac = document.querySelector(".th_fac");
  const th_burth = document.querySelector(".th_burth");
  const th_year = document.querySelector(".th_year");

  let select_f = document.getElementById("select_f");
  let select_fac = document.getElementById("select_fac");
  let select_burth = document.getElementById("select_burth");
  let select_year = document.getElementById("select_year");
  let warning = document.querySelector(".warning");

  let mas = [];

  let error = 0;

  let date = new Date();

  let today;
  let todayY = date.getFullYear();
  let todayM = date.getMonth() + 1;
  let todayD = date.getDate();

  let jan;
  let janY = new Date(1900, 0, 1).getFullYear();
  let janM = new Date(1900, 0, 1).getMonth() + 1;
  let janD = new Date(1900, 0, 1).getDate();

  if (janM > 9 || janD > 9) {
    jan = `${janY}-${janM}-${janD}`;
  } else {
    jan = `${janY}-0${janM}-0${janD}`;
  }

  if (todayM > 9) {
    today = `${todayY}-${todayM}-${todayD}`;
  } else {
    today = `${todayY}-0${todayM}-${todayD}`;
  }

  //Фильтрация по вводу
  select_f.addEventListener("input", () => {
    select_f.value = select_f.value.replace(/[^a-zа-яё\s\-]/gi, "");
    let local = JSON.parse(localStorage.getItem("student"));
    let inp_mas = [];
    let find = false;
    for (let i = 0; i < local.length; i++) {
      if (local[i].obj_fio.includes(select_f.value) == true) {
        warning.style.display = "none";
        inp_mas.push(local[i]);
        createTable(false, inp_mas);
        find = true;
      }
    }
    if (find == false) {
      warning.style.display = "flex";

      if (table.rows.length > 0) {
        for (let k = table.rows.length - 1; k > 0; k--) {
          table.deleteRow(k);
        }
      }
    }
    if (select_f.value == "") {
      warning.style.display = "none";
      createTable(false, local);
    }
  });

  select_fac.addEventListener("input", () => {
    select_fac.value = select_fac.value.replace(/[^a-zа-яё\s\-]/gi, "");

    let local = JSON.parse(localStorage.getItem("student"));
    let inp_mas = [];
    let find = false;
    for (let i = 0; i < local.length; i++) {
      if (local[i].obj_fac.includes(select_fac.value) == true) {
        warning.style.display = "none";
        inp_mas.push(local[i]);
        createTable(false, inp_mas);
        find = true;
      }
    }
    if (find == false) {
      warning.style.display = "flex";
      if (table.rows.length > 0) {
        for (let k = table.rows.length - 1; k > 0; k--) {
          table.deleteRow(k);
        }
      }
    }
    if (select_fac.value == "") {
      warning.style.display = "none";
      createTable(false, local);
    }
  });

  select_burth.addEventListener("input", () => {
    select_burth.value = select_burth.value.replace(/[^0-9\-]/g, "");
    let local = JSON.parse(localStorage.getItem("student"));
    let inp_mas = [];
    let find = false;
    for (let i = 0; i < local.length; i++) {
      if (local[i].obj_burth == select_burth.value) {
        warning.style.display = "none";
        inp_mas.push(local[i]);
        createTable(false, inp_mas);
        find = true;
      }
    }
    if (find == false) {
      warning.style.display = "flex";
      if (table.rows.length > 0) {
        for (let k = table.rows.length - 1; k > 0; k--) {
          table.deleteRow(k);
        }
      }
    }
    if (select_burth.value == "") {
      warning.style.display = "none";
      createTable(false, local);
    }
  });

  select_year.addEventListener("input", () => {
    let local = JSON.parse(localStorage.getItem("student"));
    let inp_mas = [];
    let find = false;
    for (let i = 0; i < local.length; i++) {
      if (local[i].obj_year == select_year.value) {
        warning.style.display = "none";
        inp_mas.push(local[i]);
        createTable(false, inp_mas);
        find = true;
      }
    }
    if (find == false) {
      warning.style.display = "flex";
      if (table.rows.length > 0) {
        for (let k = table.rows.length - 1; k > 0; k--) {
          table.deleteRow(k);
        }
      }
    }
    if (select_year.value == "") {
      warning.style.display = "none";
      createTable(false, local);
    }
  });
  //Фильтрация по вводу

  //Оформление инпутов
  names.addEventListener("input", () => {
    names.value = names.value.replace(/[^a-zа-яё\s\-]/gi, "");
    if (names.value == "") {
      form.append(er_name);
      names.style.border = "1px solid #ee3f58";
    } else {
      er_name.remove();
      names.style.border = "";
    }
  });

  surname.addEventListener("input", () => {
    surname.value = surname.value.replace(/[^a-zа-яё\s\-]/gi, "");
    if (surname.value == "") {
      form.append(er_sur);
      surname.style.border = "1px solid #ee3f58";
    } else {
      er_sur.remove();
      surname.style.border = "";
    }
  });

  sname.addEventListener("input", () => {
    sname.value = sname.value.replace(/[^a-zа-яё\s\-]/gi, "");
    if (sname.value == "") {
      form.append(er_sname);
      sname.style.border = "1px solid #ee3f58";
    } else {
      er_sname.remove();
      sname.style.border = "";
    }
  });

  burthday.addEventListener("input", () => {
    if (burthday.value == "") {
      form.append(er_burth);
      burthday.style.border = "1px solid #ee3f58";
    } else {
      er_burth.remove();
      burthday.style.border = "";
    }
  });

  year.addEventListener("input", () => {
    if (year.value == "") {
      form.append(er_year);
      year.style.border = "1px solid #ee3f58";
    } else {
      er_year.remove();
      year.style.border = "";
    }
  });

  faculty.addEventListener("input", () => {
    faculty.value = faculty.value.replace(/[^a-zа-яё\s\-]/gi, "");
    if (faculty.value == "") {
      form.append(er_fac);
      faculty.style.border = "1px solid #ee3f58";
    } else {
      er_fac.remove();
      faculty.style.border = "";
    }
  });
  //Оформление инпутов

  //Сортировка по кнопке
  th_fio.addEventListener("click", (e) => {
    if (e.target != select_f) {
      let local = JSON.parse(localStorage.getItem("student"));
      let sortedMas = local;
      let sorted = sortedMas.sort((a, b) => a.obj_fio.localeCompare(b.obj_fio));
      createTable(false, sorted);
    }
  });

  th_fac.addEventListener("click", (e) => {
    if (e.target != select_fac) {
      let local = JSON.parse(localStorage.getItem("student"));
      let sortedMas = local;
      let sorted = sortedMas.sort((a, b) => a.obj_fac.localeCompare(b.obj_fac));
      createTable(false, sorted);
    }
  });

  th_burth.addEventListener("click", (e) => {
    if (e.target != select_burth) {
      let local = JSON.parse(localStorage.getItem("student"));
      let sortedMas = local;
      let sorted = sortedMas.sort((a, b) =>
        a.obj_burth.localeCompare(b.obj_burth)
      );
      createTable(false, sorted);
    }
  });

  th_year.addEventListener("click", (e) => {
    if (e.target != select_year) {
      let local = JSON.parse(localStorage.getItem("student"));
      let sortedMas = local;
      let sorted = sortedMas.sort((a, b) =>
        a.obj_year.localeCompare(b.obj_year)
      );
      createTable(false, sorted);
    }
  });
  //Сортировка по кнопке

  //Добаваление студента
  btn.addEventListener("click", () => {
    let local = JSON.parse(localStorage.getItem("student"));
    if (local !=null) {
    mas = local;
    }
    error = 0;
    console.log(local);
    er_name.remove();
    er_sur.remove();
    er_sname.remove();
    er_burth.remove();
    er_year.remove();
    er_fac.remove();

    names.style.border = "";
    surname.style.border = "";
    sname.style.border = "";
    burthday.style.border = "";
    year.style.border = "";
    faculty.style.border = "";

    let student = {
      obj_name: names.value.trim(),
      obj_sur: surname.value.trim(),
      obj_sname: sname.value.trim(),
      obj_fio: "",
      obj_burth: burthday.value,
      obj_year: year.value,
      obj_fac: faculty.value.trim(),
    };
    window.student = student;

    student.obj_fio = `${student.obj_sur} ${student.obj_name} ${student.obj_sname}`;

    if (names.value == "") {
      form.append(er_name);
      names.style.border = "1px solid #ee3f58";
      error++;
    }

    if (surname.value == "") {
      form.append(er_sur);
      surname.style.border = "1px solid #ee3f58";
      error++;
    }

    if (sname.value == "") {
      form.append(er_sname);
      sname.style.border = "1px solid #ee3f58";
      error++;
    }

    if (
      burthday.value == "" ||
      burthday.value < jan ||
      burthday.value > today
    ) {
      form.append(er_burth);
      burthday.style.border = "1px solid #ee3f58";
      error++;
    }

    if (todayM < 9) {
      if (year.value == "" || year.value < 2000 || year.value > todayY - 1) {
        form.append(er_year);
        year.style.border = "1px solid #ee3f58";
        error++;
      }
    } else {
      if (year.value == "" || year.value < 2000 || year.value > todayY) {
        form.append(er_year);
        year.style.border = "1px solid #ee3f58";
        error++;
      }
    }

    if (faculty.value == "") {
      form.append(er_fac);
      faculty.style.border = "1px solid #ee3f58";
      error++;
    }

    if (error == 0) {
      names.value = "";
      surname.value = "";
      sname.value = "";
      burthday.value = "";
      year.value = "";
      faculty.value = "";
      console.log(student);
      mas.push(student);
      localStorage.setItem("student", JSON.stringify(mas));

      local = mas;
      createTable(true, local);
    }
    console.log(mas);
  });
  //Добаваление студента

  let count = 1;

  //Отрисовка таблицы
  function createTable(flag, mas) {
    // let local = JSON.parse(localStorage.getItem("student"));

    let tbody = document.querySelector(".tbody");

    if (table.rows.length > 0) {
      for (let k = table.rows.length - 1; k > 0; k--) {
        table.deleteRow(k);
      }
    }

    if (flag == true) {
      count++;
    }

    for (let i = 0; i < mas.length; i++) {
      let j = 0;

      let tr = document.createElement("tr");
      tr.className = "tr";

      let td_fio = document.createElement("td");
      let td_burth = document.createElement("td");
      let td_year = document.createElement("td");
      let td_fac = document.createElement("td");

      td_fio.id = "td";
      td_burth.id = "td";
      td_year.id = "td";
      td_fac.id = "td";
      td_fio.innerHTML = mas[i].obj_fio;
      td_fac.innerHTML = mas[i].obj_fac;

      let vozrast;
      let vozrastY = new Date(mas[i].obj_burth).getFullYear();
      let vozrastM = new Date(mas[i].obj_burth).getMonth() + 1;
      let vozrastD = new Date(mas[i].obj_burth).getDate();

      if (todayM > vozrastM) {
        vozrast = `${todayY - vozrastY}`;
      } else if (todayM == vozrastM) {
        if (todayD >= vozrastD) {
          vozrast = `${todayY - vozrastY}`;
        } else {
          vozrast = `${todayY - vozrastY - 1}`;
        }
      } else {
        vozrast = `${todayY - vozrastY - 1}`;
      }

      if (vozrast.slice(-1) == 1) {
        td_burth.innerHTML = `${mas[i].obj_burth} (${vozrast} год)`;
      } else if (vozrast > 10 && vozrast < 15) {
        td_burth.innerHTML = `${mas[i].obj_burth} (${vozrast} лет)`;
      } else if (
        vozrast.slice(-1) == 2 ||
        vozrast.slice(-1) == 3 ||
        vozrast.slice(-1) == 4
      ) {
        td_burth.innerHTML = `${mas[i].obj_burth} (${vozrast} года)`;
      } else {
        td_burth.innerHTML = `${mas[i].obj_burth} (${vozrast} лет)`;
      }

      if (todayY == mas[i].obj_year) {
        td_year.innerHTML = `${mas[i].obj_year} - ${
          Number(mas[i].obj_year) + 4
        } (${todayY - mas[i].obj_year + 1} курс)`;
      } else if (todayY == Number(mas[i].obj_year) + 1) {
        if (todayM < 9) {
          td_year.innerHTML = `${mas[i].obj_year} - ${
            Number(mas[i].obj_year) + 4
          } (${todayY - mas[i].obj_year} курс)`;
        } else {
          td_year.innerHTML = `${mas[i].obj_year} - ${
            Number(mas[i].obj_year) + 4
          } (${todayY - mas[i].obj_year + 1} курс)`;
        }
      } else if (todayY == Number(mas[i].obj_year) + 2) {
        if (todayM < 9) {
          td_year.innerHTML = `${mas[i].obj_year} - ${
            Number(mas[i].obj_year) + 4
          } (${todayY - mas[i].obj_year} курс)`;
        } else {
          td_year.innerHTML = `${mas[i].obj_year} - ${
            Number(mas[i].obj_year) + 4
          } (${todayY - mas[i].obj_year + 1} курс)`;
        }
      } else if (todayY == Number(mas[i].obj_year) + 3) {
        if (todayM < 9) {
          td_year.innerHTML = `${mas[i].obj_year} - ${
            Number(mas[i].obj_year) + 4
          } (${todayY - mas[i].obj_year} курс)`;
        } else {
          td_year.innerHTML = `${mas[i].obj_year} - ${
            Number(mas[i].obj_year) + 4
          } (${todayY - mas[i].obj_year + 1} курс)`;
        }
      } else if (todayY == Number(mas[i].obj_year) + 4) {
        if (todayM < 9) {
          td_year.innerHTML = `${mas[i].obj_year} - ${
            Number(mas[i].obj_year) + 4
          } (${todayY - mas[i].obj_year} курс)`;
        }
      } else {
        td_year.innerHTML = `${mas[i].obj_year} - ${
          Number(mas[i].obj_year) + 4
        } (закончил)`;
      }

      for (j; j < 1; j++) {
        tr.appendChild(td_fio);
        tr.appendChild(td_fac);
        tr.appendChild(td_burth);
        tr.appendChild(td_year);
        tbody.appendChild(tr);
      }
    }
  }
  let local = JSON.parse(localStorage.getItem("student"));
  if (local != null) {
    window.onload = function () {
      createTable(false, local);
    };
  }

  //Отрисовка таблицы
}
reload();
