const form = document.querySelector(".quiz-form")
const submitBtn = document.querySelector("#quiz-submit-btn")
const output = document.querySelector("#score")

const answers = ["yes", "no", "yes", "no", "yes", "yes"]

function scoreEvaluation() {
    let score = 0
    let index = 0

    const formResults = new FormData(form)
    for (let entry of formResults.entries()) {
        if (answers[index] === entry[1]) {
            score++
            console.log(score, answers[index], entry[1])
        }
        index++
        // answers

    }
    console.log(score)
    output.innerText = score
}

submitBtn.addEventListener("click", scoreEvaluation)