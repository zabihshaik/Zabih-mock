// We have two input sections that takes number as input. So on the screen display the output which will be the number given in the first section raised to number given in the second input.No buttons required.Just by entering the number in the 2nd input you would be able to view the result.

const input1 = document.querySelector("#input1")
const input2 = document.querySelector("#input2")
const outputRes = document.querySelector("#output")

const leftBtn = document.querySelector("#left")
const centerBtn = document.querySelector("#center")
const rightBtn = document.querySelector("#right")


input2.addEventListener("input", power)

function power() {
    var result = Math.pow(input1.value, input2.value) 
    outputRes.innerText = result;
}

leftBtn.addEventListener("click", ()=> {
    outputRes.style.textAlign = "left";
})
centerBtn.addEventListener("click", ()=> {
    outputRes.style.textAlign = "center";
})
rightBtn.addEventListener("click", ()=> {
    outputRes.style.textAlign = "right";
})