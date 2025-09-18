//  get data from log page
const user = JSON.parse(localStorage.getItem("user"));
const notificationUser = document.querySelector(".user");
const description = document.querySelector(".description");
const popup = document.querySelector(".popup");
const overlay = document.querySelector(".overlay");
const links = document.querySelectorAll(".popup .item");
const body = document.body;

window.onload = function () {
  // notificationUser.innerHTML = `Welcome ${user.name}`;
  popupAnim();
};
links.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    e.preventDefault();
    links.forEach((ele) => ele.classList.remove("active"));
    this.classList.add("active");

    if (ele.children[1].textContent == "Guest") {
      overlay.style.display = "none";
      popup.style.display = "none";
   
    }
  });
});

const inputNote = document.getElementById("note-id");
const addNoteBTN = document.querySelector(".add-note");
const divTasks = document.querySelector(".tasks");

let arrayOfTasks = JSON.parse(localStorage.getItem("task")) || [];
drawTasks(arrayOfTasks);

class Note {
  static id = 0;

  constructor(note) {
    this.note = note;
    this.id = ++Note.id;
    this.complit = false;
    this.date = this.formattedDate();
  }
  formattedDate() {
    const now = new Date();
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const dayName = days[now.getDay()];
    const day = String(now.getDate()).padStart(2, "0");
    const month = months[now.getMonth()];
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    return `${dayName} ${day} ${month} at ${hours}:${minutes}:${seconds}`;
  }
}

addNoteBTN.addEventListener("click", getValues);
//  get values from input
function getValues(e) {
  const note = inputNote.value;
  const taskNote = new Note(note);
  clear(inputNote);
  arrayOfTasks.push(taskNote);
  sendDataToStore(arrayOfTasks);
  drawTasks(arrayOfTasks);
}
// clear input
function clear(element) {
  element.value = "";
}
// send data to local store
function sendDataToStore(arrayOfTasks) {
  const task = JSON.stringify(arrayOfTasks);
  localStorage.setItem("task", task);
}
// draw element to page
function drawTasks(arrayOfTasks) {
  // clear divTasks
  divTasks.innerHTML = "";
  for (const task of arrayOfTasks) {
    const taskDiv = document.createElement("div");
    taskDiv.className = "task";

    const paraNote = document.createElement("p");
    paraNote.className = "note";
    paraNote.setAttribute("data-complit", task.complit);
    const textNote = document.createTextNode(task.note);

    const editNote = document.createElement("span");
    editNote.className = "edit";
    const deleteNote = document.createElement("span");
    deleteNote.className = "delete";

    paraNote.appendChild(textNote);

    taskDiv.appendChild(paraNote);
    taskDiv.appendChild(editNote);
    taskDiv.appendChild(deleteNote);
    divTasks.appendChild(taskDiv);
    createIcon();
  }
}

function createIcon() {
  const spans = document.querySelectorAll(".task span");
  spans.forEach((span) => {
    if (span.classList.contains("edit")) {
      span.innerHTML = ` <i class="fa-solid fa-pen-to-square"></i>`;
    } else {
      span.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    }
  });
}
// popup

function popupAnim() {
  setInterval(() => {
    popup.style.display = "none";
    overlay.style.display = "none";
  }, 3000);
}
// close popup
document.addEventListener("click", close);

function close(e) {
  if (!popup.contains(e.target)) {
    popup.style.display = "none";
    overlay.style.display = "none";
  }
}

// localStorage.clear()
