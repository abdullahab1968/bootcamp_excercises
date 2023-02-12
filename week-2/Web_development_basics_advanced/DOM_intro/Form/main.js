submitButton = document.getElementById("submit-button")

document.getElementById("submit-button").addEventListener("click", validate)

function validate () {
    const name = document.getElementById("name-input").value
    const salary = document.getElementById("salary-input").value
    const date = document.getElementById("date-input").value
    const phone = document.getElementById("phone-input").value
    checkName(name)
    checkSalary(salary)
    checkDate(date)
    checkPhone(phone)
}

function checkName (name) {
if (name.length < 3){
    sendErorMessage("name")
}
}

function checkSalary (salary) {
    if(salary <= 10000 || salary >= 16000){
        sendErorMessage("salary")
    }
}
function checkDate (date) {
    if (!date){
        sendErorMessage("Birthday")
    }
}
function checkPhone (phone) {
    if (phone.length != 10){
        sendErorMessage("phone")
    }
}

function sendErorMessage(errorType){
    let errorMessage = document.createElement("h3")
    errorMessage.innerHTML = errorType + " is missing"
    errorMessage.style.color = "red"
    document.getElementById("container").appendChild(errorMessage)
}