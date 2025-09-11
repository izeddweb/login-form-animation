//  set translate bg-form
const bgForm = document.querySelector(".bg-form");
const btnSwich = document.querySelector(".btn-log");
const formLog = document.querySelector(".form-login");
const formSign = document.querySelector(".form-sign");
const form = document.querySelectorAll(".form");
// console.log(form.children);
btnSwich.addEventListener("click", translate);
function translate() {
  bgForm.classList.toggle("translate");
  bgForm.classList.contains("translate");
  if (bgForm.classList.contains("translate")) {
    btnSwich.innerHTML = "Sign Up";
    formSign.classList.add('hide')
    formLog.classList.remove('hide')
  } else {
    btnSwich.innerHTML = "Log In";
    formLog.classList.add('hide')
    formSign.classList.remove('hide')
  }
}
    
