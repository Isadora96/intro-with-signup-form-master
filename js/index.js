const firstName = document.querySelector("#first-name")
const lastName = document.querySelector("#last-name")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const successIcon = document.querySelectorAll(".success-icon")
const failureIcon = document.querySelectorAll(".failure-icon")
const errorMsgDiv = document.querySelectorAll(".error")
//console.log(successIcon)
const dataCollector = document.querySelector('#data-collector')

dataCollector.addEventListener("submit", (event) => {
    event.preventDefault();
    
    checkForm(firstName, 0, "First Name cannot be empty")
    checkForm(lastName, 1, "Last Name cannot be empty")
    checkForm(email, 2, "Looks like this is not an email")
    checkForm(password, 3, "Password cannot be empty")
});

const checkForm = (id, number, message) => {
    if(id.value.trim() === '') {
        errorMsgDiv[number].innerText = message
        id.style.border = "2px solid red"

        //icons
        failureIcon[number].style.opacity = "1"
        successIcon[number].style.opacity = "0"
    } else {
        errorMsgDiv[number].innerText = ""
        id.style.border = "2px solid green"

        //icons
        failureIcon[number].style.opacity = "0"
        successIcon[number].style.opacity = "1"
    }
}


