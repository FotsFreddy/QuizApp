// inserts player name into page
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('playerInfo__name').textContent = sessionStorage.getItem('playerName');
    
    // increase the score
    
    
    
});

const quizCategories = document.getElementsByClassName('container');
let questionStartIndex = 0;
let questionEndIndex = 0;
let selectedCategory = null;

for (let index = 0; index < quizCategories.length; index++) {
    quizCategories[index].addEventListener('click', () => {
        if(quizCategories[index].children[1].textContent === "HTML"){
            questionStartIndex = 0;
            questionEndIndex = 9;
            selectedCategory = "HTML";
            
        }
        else if(quizCategories[index].children[1].textContent === "Javascript"){
            questionStartIndex = 10;
            questionEndIndex = 19;
            selectedCategory = "javaScript";
        }
        else if(quizCategories[index].children[1].textContent === "React"){
            questionStartIndex = 20;
            questionEndIndex = 29;
            selectedCategory = "react";
        }
        else{
            questionStartIndex = 30;
            questionEndIndex = 39;
            selectedCategory = "C";
        }
        sessionStorage.setItem("questionStartIndex", questionStartIndex);
        sessionStorage.setItem("questionEndIndex", questionEndIndex);
        window.location.href = "questionPage.html";
    });
}
