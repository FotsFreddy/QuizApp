// inserts player name into page
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('playerInfo__name').textContent = sessionStorage.getItem('playerName');

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
        sessionStorage.setItem("selectedCategory", selectedCategory);
        window.location.href = "questionPage.html";
    });
}

    // update score of recently played category
    let recentScores = document.getElementsByTagName('span');

    if (sessionStorage.getItem('selectedCategory') === "HTML") {
        recentScores[0].textContent = sessionStorage.getItem('numberOfCorrectAnswer');
        sessionStorage.setItem('htmlScore', recentScores[0].textContent);

        recentScores[1].textContent = sessionStorage.getItem('javaScriptScore');
        recentScores[2].textContent = sessionStorage.getItem('reactScore');
        recentScores[3].textContent = sessionStorage.getItem('CScore');
    }
    else if (sessionStorage.getItem('selectedCategory') === "javaScript") {
        recentScores[1].textContent = sessionStorage.getItem('numberOfCorrectAnswer');
        sessionStorage.setItem('javaScriptScore', recentScores[1].textContent);

        recentScores[0].textContent = sessionStorage.getItem('htmlScore');
        recentScores[2].textContent = sessionStorage.getItem('reactScore');
        recentScores[3].textContent = sessionStorage.getItem('CScore');
    }
    else if (sessionStorage.getItem('selectedCategory') === "react") {
        recentScores[2].textContent = sessionStorage.getItem('numberOfCorrectAnswer');
        sessionStorage.setItem('reactScore', recentScores[2].textContent);

        recentScores[0].textContent = sessionStorage.getItem('htmlScore');
        recentScores[1].textContent = sessionStorage.getItem('javaScriptScore');
        recentScores[3].textContent = sessionStorage.getItem('CScore');
    }
    else{
        recentScores[3].textContent = sessionStorage.getItem('numberOfCorrectAnswer');
        sessionStorage.setItem('CScore', recentScores[3].textContent);

        recentScores[0].textContent = sessionStorage.getItem('htmlScore');
        recentScores[1].textContent = sessionStorage.getItem('javaScriptScore');
        recentScores[2].textContent = sessionStorage.getItem('reactScore');
    }

    // update global score
    document.getElementsByClassName('playerScore__score')[0].textContent = Number(sessionStorage.getItem('htmlScore')) + Number(sessionStorage.getItem('javaScriptScore')) + Number(sessionStorage.getItem('reactScore')) +Number(sessionStorage.getItem('CScore'));
});