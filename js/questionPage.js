let questionIndex = sessionStorage.getItem('questionStartIndex');
let questionEndIndex = sessionStorage.getItem('questionEndIndex');

document.addEventListener('DOMContentLoaded', () => {
    displayQuestionsAndAnswers(questionIndex);
});

let questionBox = document.getElementById('question');
let answers = document.getElementsByTagName('label');
let radioBtns = document.getElementsByTagName('input');

let currentQuestionNumber = document.querySelector('.questionNumber span');
let questionNumber = 1;
let correctAnswer = null;
let numberOfCorrectAnswer = 0;

async function fetchData() {
    let response = await fetch('../questions.json');
    if(!response.ok)
        throw new Error("resource not found");

    return response.json();
}

async function displayQuestionsAndAnswers(questionIndex){
    try{
        let data = await fetchData();
        questionBox.textContent = data[questionIndex].question;
        radioBtns[0].value = answers[0].textContent = data[questionIndex].answer1;
        radioBtns[1].value = answers[1].textContent = data[questionIndex].answer2;
        radioBtns[2].value = answers[2].textContent = data[questionIndex].answer3;
        radioBtns[3].value = answers[3].textContent = data[questionIndex].answer4;
        correctAnswer = data[questionIndex].correctAnswer;

        for (const radioBtn of radioBtns) {
            radioBtn.disabled = false; // once a question is displayed, all the radios buttons reactivate
        }
        currentQuestionNumber.textContent = questionNumber;
    }catch(error){
        console.error(error);
    }
}

document.getElementById('nextQuestionButton').addEventListener('click', () => {
    if(isAllRadioBtnsUnchecked()) // can't proceed if no answer is chosen
        return;
    
    questionIndex++;
    if (questionIndex > questionEndIndex) {
        questionIndex = null;
        sessionStorage.setItem("numberOfCorrectAnswer", numberOfCorrectAnswer);
        window.location.href = "../pages/scorePage.html";
    }

    for (const radioBtn of radioBtns) {
        radioBtn.checked = false;               // unselects all the radios buttons and removing classes once the button si clicked
        if (radioBtn.parentElement.classList.contains("correctAnswerBg")) 
            radioBtn.parentElement.classList.remove("correctAnswerBg");
        else
            radioBtn.parentElement.classList.remove("wrongAnswerBg");
    }
    questionNumber++;
    displayQuestionsAndAnswers(questionIndex);
});


// here we verify whether the player's choice is correct or not
for (const radioBtn of radioBtns) {
    radioBtn.addEventListener('change', (event) => {
        if (event.target.value === correctAnswer) {
            radioBtn.parentElement.classList.add("correctAnswerBg");
            numberOfCorrectAnswer++;
        }
        else
            radioBtn.parentElement.classList.add("wrongAnswerBg");
        
        for (const radioBtn of radioBtns) { // disables all the radio buttons after one is chosen
            radioBtn.disabled = true;
        }
    });
}

function isAllRadioBtnsUnchecked(){
    let count = 0;
    for (const radioBtn of radioBtns) {
        if (!radioBtn.checked) 
            count++;
    }
    if (count === 4) 
        return true;

    return false;
}