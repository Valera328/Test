const correctAnswers = ['Непал', 'Ни одного', 'Андорра', '159', '52'];

function Selected() {
    document.getElementById('nextQuestion').disabled = false;
}

document.getElementById('nextQuestion').onclick = function() {
    location.href = 'question2.html';
};

function previousQuestion(previousQuestion) {
    location.href = previousQuestion;
}

function restartQuiz() {
    correctAnswersCount = 0;
    location.href = 'question1.html';
}


