// Create  a 

const inputBtn = document.querySelector("#input1")
const pwdBtn = document.querySelector("#password")
const checkBtn = document.querySelector("#check")
const outputRes = document.querySelector("#output")


checkBtn.addEventListener("click", check)

function check() {
    console.log("working")
    if (pwdBtn.value.includes(inputBtn.value)) {
        outputRes.innerText = "weak password"
        outputRes.style.color = 'red'
    } else {
        outputRes.innerText = "strong password"
        outputRes.style.color = 'green'
    }
}