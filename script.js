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
    "Вопрос 8"
];

const questions = [
    "Вам нравится решать логические задачи?",
    "Вам интересно изучать новые технологии?",
    "Вы можете сосредоточиться на поставленной задаче?",
    "Вы терпеливы и настойчивы?",
    "Вы можете работать самостоятельно и в команде?",
    "Вы можете быстро учиться новому?",
    "Вы можете творчески мыслить?",
    "Вы можете решать нестандартные задачи?"
];

const questionsnum2 = [
    "Вопрос 1",
    "Вопрос 2",
    "Вопрос 3",
    "Вопрос 4",
    "Вопрос 5",
    "Вопрос 6",
    "Вопрос 7",
    "Вопрос 8",
    "Вопрос 9",
    "Вопрос 10"
]

const questions2 = [
    "Вам нравится работать с людьми и помогать им решать их проблемы?",
    "Вы любите изучать новые технологии и разбираться в сложных задачах?",
    "Вас привлекает творческая работа, включая дизайн, писательство или музыку?",
    "Вам нравится анализировать данные, решать задачи, опираясь на факты и цифры?",
    "Вы предпочитаете работать в команде и обсуждать идеи с коллегами?",
    "Вам нравится работать самостоятельно, без постоянного общения с другими?",
    "Вам важно иметь свободу выражения собственных идей и видения?",
    "Вы предпочитаете получать информацию через чтение и самостоятельное изучение?",
    "Вам нравится помогать и влиять на жизни других людей через свою работу?",
    "Вас привлекает работа, требующая логического мышления и стратегического планирования?",
]

 
const changeBtn = document.getElementById('answerButton');
const question = document.getElementById('changetext');
const questionnum = document.getElementById('changequest')

let currentQuestionIndex = 0;

let score = 0;

if (changeBtn) {
    changeBtn.addEventListener('click', () => {
        currentQuestionIndex = currentQuestionIndex + 1;
        if (currentQuestionIndex >= questions.length) {
            document.getElementById('question1').style.display = 'none';
            document.getElementById('result1').style.display = 'block';
            changeBtn.style.display = 'none';
            let elements = document.getElementsByClassName("radio_answers");
            for(let i = 0; i < elements.length; i++) {
                elements[i].style.display = 'none';
            }
            if (score >= 7) {
                document.getElementById("result1text").textContent = 'Вам подходит IT сфера.';
                document.getElementById("nextbutton").style.display = 'inline-block';
            }
            else if (score >= 4){
                document.getElementById("result1text").textContent = 'Вам скорее всего подходит IT сфера.';
                document.getElementById("nextbutton").style.display = 'inline-block';
            }
            else {
                document.getElementById("result1text").textContent = 'Скорее всего вам не подходит IT сфера.';
            }
        }
        else {
            question.textContent = questions[currentQuestionIndex];
            questionnum.textContent = questionsnum[currentQuestionIndex];

            const selectedAnswer = document.querySelector('input[type="radio"]:checked')

            if (selectedAnswer && selectedAnswer.value == 'yes') {
                score++;
            }

            $("input[type='radio']").prop('checked', false);
        }
    });
}

const changeBtn2 = document.getElementById('answerButton2')
const question2 = document.getElementById('changetext2')
const questionnum2 = document.getElementById('changequest2')

let currentQuestionIndex2 = 0;

let score2 = 0;

if (changeBtn2) {
    changeBtn2.addEventListener('click', () => {
        currentQuestionIndex2 = currentQuestionIndex2 + 1;
        if (currentQuestionIndex2 >= questions2.length) {
            document.getElementById('question2').style.display = 'none';
            document.getElementById('result2').style.display = 'block';
            changeBtn2.style.display = 'none';
            let elements = document.getElementsByClassName("radio_answers");
            for(let i = 0; i < elements.length; i++) {
                elements[i].style.display = 'none';
            }
            if (score2 >= 8) {
                document.getElementById("result1text2").textContent = 'Аналитическая сфера (аналитик данных, финансист, исследователь).';
            }
            else if (score2 >= 6){
                document.getElementById("result1text2").textContent = 'Творческая сфера (дизайнер, писатель, художник и т.д.).';
            }
            else {
                document.getElementById("result1text2").textContent = 'Техническая сфера (программист, инженер, аналитик и т.д.).';
            }
        }
        else {
            question2.textContent = questions2[currentQuestionIndex2];
            questionnum2.textContent = questionsnum2[currentQuestionIndex2];

            const selectedAnswer = document.querySelector('input[type="radio"]:checked')

            if (selectedAnswer && selectedAnswer.value == 'yes') {
                score++;
            }

            $("input[type='radio']").prop('checked', false);
        }
    });
}

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
