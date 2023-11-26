const menu = document.querySelector('.menu');
const menuTrigger = document.querySelector('.menu-trigger');

menuTrigger.addEventListener('mouseenter', () => {
    menu.style.left = '0';
});

// menu.addEventListener('mouseleave', () => {
//     menu.style.left = '-200px';
// });

const questionsnum = [
    "Вопрос 1",
    "Вопрос 2",
    "Вопрос 3",
    "Вопрос 4",
    "Вопрос 5",
    "Вопрос 6",
    "Вопрос 7",
    "Вопрос 8",
    "Вопрос 9",
    "Вопрос 10",
    "Вопрос 11",    
];

const questions = [
    "Вас интересует администрирование компьютерных систем и сетей?",
    "Вы предпочитаете создавать новые программы и приложения или улучшать существующие?",
    "Question 3",
    "Question 4",
    "Question 5",
    "Question 6",
    "Question 7",
    "Question 8",
    "Question 9",
    "Question 10",
    "Question 11",
];
 
const changeBtn = document.getElementById('answerButton');
const question = document.getElementById('changetext');
const questionnum = document.getElementById('changequest')

let currentQuestionIndex = 0;
 
changeBtn.addEventListener('click', () => {
    currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
    question.textContent = questions[currentQuestionIndex];
    questionnum.textContent = questionsnum[currentQuestionIndex];
});

$("input[type=\"radio\"]").click(function(){
    var value = $(this).val();

    // Сохранение в localStorage:
    localStorage.setItem("option", value);
});


// Для localStorage:
var itemValue = localStorage.getItem("option");
if (itemValue !== null) {
    $("input[value=\""+itemValue+"\"]").click();
}
