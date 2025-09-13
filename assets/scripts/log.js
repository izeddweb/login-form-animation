//  set translate bg-form
const btnLog = document.getElementById("btn-log");
const formLog = document.querySelector(".form-login");
const userInputLog = document.getElementById("user-input");
const userPass = document.getElementById("user-pass");
const eyeIcons = document.querySelectorAll('.fa-eye, .fa-eye-slash');



const userData = JSON.parse(localStorage.getItem('users') );
console.log(userData);

btnLog.addEventListener('click',changeLocation);


// Handle log in button click
formLog.addEventListener("submit", function (e) {
    console.log(userData);
  const username = userInputLog.value;
  const userpass = userPass.value;
  e.preventDefault();
  if (!username || !userpass ) {
    e.preventDefault(); //
    console.log("Please fill in all fields.");
    return;
  }

  getValuesFromStore(userData );
});

//  function to get data from local storege
function getValuesFromStore(userData) {
  console.log(userData);
}

// function to change location
function changeLocation (){
  setTimeout(() => {
    console.log('hello');
    window.location = 'log.html'
  }, 2000);
  
}



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
