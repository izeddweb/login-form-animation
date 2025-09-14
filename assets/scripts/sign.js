//  set translate bg-form
const bgForm = document.querySelector(".bg-form");
const btnSign = document.getElementById("btn-log");
const formSign = document.querySelector(".form-login");
const userInputLog = document.getElementById("user-input");
const userPass = document.getElementById("user-pass");
const userPassConfirm = document.getElementById("user-pass-confirm");
const eyeIcons = document.querySelectorAll('.fa-eye, .fa-eye-slash');



let userData = JSON.parse(localStorage.getItem('users') ) || [];
// btnSign.addEventListener('click',changeLocation);

class User {
  constructor(name, pass , passConfirm) {
    this.name = name;
    this.pass = pass;
    this.passConfirm = passConfirm;
    this.date = new Date();
    this.id = Math.random().toString(36).substring(2, 9);
  }
}

// Handle log in button click
formSign.addEventListener("submit", function (e) {
  const username = userInputLog.value;
  const userpass = userPass.value;
  const passConfirmValue = userPassConfirm.value;
  e.preventDefault();
  if (!username || !userpass || !passConfirmValue) {
    e.preventDefault(); //
    console.log("Please fill in all fields.");
    return;
  }

  getValues(username, userpass ,passConfirmValue);
});

//  function to get values from inputs
function getValues(username, userpass , passConfirmValue) {
  const users = new User(username, userpass , passConfirmValue);
  userData.push(users);
  storeData(userData);
  changeLocation ()
}

//  function to store data in local storege
function storeData(userData) {
  localStorage.setItem("users", JSON.stringify(userData));
}

// function to change location
function changeLocation (){
  setTimeout(() => {
    console.log('hello');
    window.location = 'log.html'
  }, 2000);
  
}
// function show pass


eyeIcons.forEach(icon => {
  icon.addEventListener('click', function () {
    const input = this.closest('.controll-form').querySelector('input');
    if (input.type === 'password') {
      input.type = 'text';
    } else {
      input.type = 'password';
    }
    this.classList.toggle('fa-eye-slash');
    this.classList.toggle('fa-eye');
  });
});




// localStorage.clear()