import { createTable } from "./add.js";
export function work() {
    const logo = document.querySelector(".logo");
    const header_inp = document.querySelector(".header_inp");

    logo.addEventListener("click", () => {
        location.reload();
    });

    header_inp.addEventListener("input", () => {
        header_inp.value = header_inp.value.replace(/[^a-zа-яё\s\-]/gi, "");

        let local = JSON.parse(localStorage.getItem("client"));
        let inp_mas = [];
        let find = false;
        for (let i = 0; i < local.length; i++) {
            let fio = `${local[i].surname} ${local[i].name} ${local[i].sname}`;
            if (fio.includes(header_inp.value) == true) {
                if (fio[0] == header_inp.value[0]) {
                    console.log("333333333")
                    inp_mas.push(local[i]);
                    createTable(false, inp_mas);
                    find = true;
                }
            }
        }
        console.log(local)

        if (header_inp.value.trim() == "") {
            let mas_local = JSON.parse(localStorage.getItem("client"));

            console.log("111111111")
            console.log(mas_local)
            createTable(false, local);
        }

        if (find == false) {
            if (local.length > 0) {
                inp_mas = local
                for (let k = local.length - 1; k >= 0; k--) {
                    console.log("222222222")
                    inp_mas.pop();
                    createTable(false, local);
                }
            }
        }
        console.log(local)
    });

    const div_id = document.querySelector(".div_id")
    const id_up = document.querySelector(".id_up")
    const id_down = document.querySelector(".id_down")
    div_id.addEventListener("click", (e) => {
        let local = JSON.parse(localStorage.getItem("client"));
        let sortedMas = local;
        if (id_up.style.display != "none") {
            id_down.style.display = "flex"
            id_up.style.display = "none"
            let sorted = sortedMas.sort((a, b) => (String(a.id)).localeCompare(String(b.id)));
            // console.log(sorted)
            createTable(false, sorted.reverse());
        } else {
            id_up.style.display = "flex"
            id_down.style.display = "none"
            let sorted = sortedMas.sort((a, b) => (String(a.id)).localeCompare(String(b.id)));
            createTable(false, sorted);
        }
    });
    const div_fio = document.querySelector(".div_fio")
    const fio_up = document.querySelector(".fio_up")
    const fio_down = document.querySelector(".fio_down")

    div_fio.addEventListener("click", (e) => {
        let local = JSON.parse(localStorage.getItem("client"));
        let sortedMas = local;
        if (fio_up.style.display != "none") {
            fio_down.style.display = "flex"
            fio_up.style.display = "none"
            let sorted = sortedMas.sort((a, b) => (a.surname + " " + a.name + " " + a.sname).localeCompare(b.surname + " " + b.name + " " + b.sname));

            createTable(false, sorted);
        } else {
            fio_up.style.display = "flex"
            fio_down.style.display = "none"
            let sorted = sortedMas.sort((a, b) => (a.surname + " " + a.name + " " + a.sname).localeCompare(b.surname + " " + b.name + " " + b.sname));
            sorted.reverse()

            createTable(false, sorted);
        }
    });
    const create_fio = document.querySelector(".div_create")
    const create_up = document.querySelector(".create_up")
    const create_down = document.querySelector(".create_down")

    create_fio.addEventListener("click", (e) => {
        let local = JSON.parse(localStorage.getItem("client"));
        let sortedMas = local;
        if (create_up.style.display != "none") {
            create_down.style.display = "flex"
            create_up.style.display = "none"
            let sorted = sortedMas.sort((a, b) => (a.date_create && a.time_create).localeCompare(b.date_create && b.time_create));
            // let second_sorted = sorted.sort((a, b) => (a.time_create).localeCompare(b.time_create))
            sorted.reverse()

            // createTable(false, second_sorted.reverse());
            createTable(false, sorted);

        } else {
            create_up.style.display = "flex"
            create_down.style.display = "none"
            let sorted = sortedMas.sort((a, b) => (a.date_create && a.time_create).localeCompare(b.date_create && b.time_create));
            // let second_sorted = sorted.sort((a, b) => (a.time_create).localeCompare(b.time_create))

            // createTable(false, second_sorted);
            createTable(false, sorted);

        }
    });
    const edit_fio = document.querySelector(".div_edit")
    const edit_up = document.querySelector(".edit_up")
    const edit_down = document.querySelector(".edit_down")
    edit_fio.addEventListener("click", (e) => {
        let local = JSON.parse(localStorage.getItem("client"));
        let sortedMas = local;
        if (edit_up.style.display != "none") {
            edit_down.style.display = "flex"
            edit_up.style.display = "none"
            let sorted = sortedMas.sort((a, b) => (a.date_edit && a.time_edit).localeCompare(b.date_edit && b.time_edit));
            // let second_sorted = sorted.sort((a, b) => (a.time_create).localeCompare(b.time_create))
            sorted.reverse()

            // createTable(false, second_sorted.reverse());
            createTable(false, sorted);

        } else {
            edit_up.style.display = "flex"
            edit_down.style.display = "none"
            let sorted = sortedMas.sort((a, b) => (a.date_edit && a.time_edit).localeCompare(b.date_edit && b.time_edit));
            // let second_sorted = sorted.sort((a, b) => (a.time_create).localeCompare(b.time_create))

            // createTable(false, second_sorted);
            createTable(false, sorted);

        }
    });
}