//  get data from log page
const user = JSON.parse(localStorage.getItem("user")); 
const notificationUser = document.querySelector('.user')
const description = document.querySelector('.description')
window.onload = function(){
    notificationUser.innerHTML = `Welcome ${user.name}`
}

