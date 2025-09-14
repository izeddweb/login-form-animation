//  set translate bg-form
const btnLog = document.getElementById("btn-log");
const formLog = document.querySelector(".form-login");
const userInputLog = document.getElementById("user-input");
const userPass = document.getElementById("user-pass");
const eyeIcons = document.querySelectorAll(".fa-eye, .fa-eye-slash");

//  get data from local storege
const userData = JSON.parse(localStorage.getItem("users"));

// btnLog.addEventListener('click',changeLocation);

// Handle form submit
formLog.addEventListener("submit", function (e) {
  
  const username = userInputLog.value;
  const userpass = userPass.value;
 
  checkUserpropriety(e,userData ,username,userpass);
});

//  function to get data from local storege
function checkUserpropriety(e,userData, username, userpass) {
  let message = ''
  e.preventDefault(); 
   if (!username || !userpass) {
    e.preventDefault(); 
    console.log("Please fill in all fields.");
    return;
  } else {
    for (const user of userData) {
      if (user.name === username && user.pass === userpass) {
        console.log(user);
        changeLocation (user)
        // message = `Welcome ${username}`
        
      } else {
        
        console.log('check you information');
        message = 'check you name or password'
      }
      // return message 
    }
    
  }

}

// function to change location

function changeLocation(user) {
  localStorage.setItem('user', JSON.stringify(user)); // Ou sessionStorage
   setTimeout(() => {
    window.location = 'index.html'
  }, 2000);
}

eyeIcons.forEach((icon) => {
  icon.addEventListener("click", function () {
    const input = this.closest(".controll-form").querySelector("input");
    if (input.type === "password") {
      input.type = "text";
    } else {
      input.type = "password";
    }
    this.classList.toggle("fa-eye-slash");
    this.classList.toggle("fa-eye");
  });
});

// localStorage.clear()
