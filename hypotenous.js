const side = document.querySelectorAll(".side-input")
// const b= document.querySelector("#b")
const output = document.querySelector("#c")
const hypotenousBtn = document.querySelector("#hypotenous-btn")

function calHypotenous() {
    let c = Math.sqrt(Math.pow(Number(side[0].value), 2) + Math.pow(Number(side[1].value), 2))

    output.innerText = c;
}


hypotenousBtn.addEventListener("click", calHypotenous)