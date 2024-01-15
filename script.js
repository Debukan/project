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
    "Вопрос 10",
    "Вопрос 11",
    "Вопрос 12",
    "Вопрос 13",
    "Вопрос 14",
    "Вопрос 15",
    "Вопрос 16",
    "Вопрос 17",
    "Вопрос 18",
    "Вопрос 19",
    "Вопрос 20",
    "Вопрос 21",
    "Вопрос 22",
    "Вопрос 23",
    "Вопрос 24",
    "Вопрос 25",
];

const questions2 = [
    "Вы чувствуете удовлетворение от решения логических задач и головоломок?",
    "Если в полночь идет дождь, можно ли ожидать, что через 72 часа будет солнечно?",
    "Следующее число в ряду: 36, 29, 22, 15 это 7?",
    "Вы отлично составляете отчеты о наблюдаемых явлениях и можете делать прогнозы?",
    "Высокая ли у вас успеваемость по математике?",
    "Изучение компьютерного языка не вызывает у меня трудностей?",
    "Вы любите работать в команде?",
    "В любом приложении самое главное – защита от несанкционированного доступа?",
    "Считаете ли вы, что у вас богатая фантазия?",
    "Вы хорошо умеете рисовать, чертить объемные фигуры, модели?",
    "В программировании вас больше всего привлекают качественные видеоролики?",
    "Вы хорошо понимаете, как сделать приложение удобным для пользователя?",
    "Неудобные приложения вызывают раздражение, их хочется переделать?",
    "Вы готовы общаться с людьми, выясняя их потребности и пожелания?",
    "Вас не пугает работа с большими массивами данных?",
    "Испытываете ли вы трудности при осваивании новой техники?",
    "Вам нравится ремонтировать технику?",
    "Любите ли вы играть в компьютерные игры?",
    "Нравится ли вам тестировать программы и проверять коды?",
    "Монотонность в работе не пугает вас?",
    "Легко ли вам сосредотачиваться на одной задаче в течение продолжительного времени?",
    "Испытываете ли вы стресс, если не получается справиться со сложным заданием?",
    "Если вы испытываете трудности при выполнении задания, способны ли найти новые способы его выполнения?",
    "Можете ли вы выдерживать большие нагрузки при сжатых сроках выполнения задания?",
    "У меня пока нет особенных навыков в ИТ профессии."
];

const scores = [
    [1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0]
];

let user_results = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const professions = [
    "Разработчик ПО",
    "Веб-разработчик",
    "Разработчик игр",
    "Мобильный разработчик",
    "Дата-аналитик",
    "Специалист по информационной безопасности",
    "Web-дизайнер",
    "Специалист по машинному обчению",
    "Тестировщик",
    "Системный администратор",
    "Специалист по ремонту техники"
]

const professionsdesc = [
    '<span class="profnametext">Разработчик ПО</span>: специалист, занимающийся разработкой, тестированием и поддержкой функциональных компьютерных программ. Результатом его деятельности является код, написанный на определенном языке программирования. Для работы необходимо знание алгоритмов, различных языков программирования.',
    '<span class="profnametext">Веб-разработчик (web-developer)</span>: специалист в области web программирования, создатель функционирующих онлайн-ресурсов (сайтов, интернет-магазинов, социальных сетей, поисковиков и т.д.). В рамках этой профессии существует несколько специализаций:<br><br><span class="profnametext">developer</span> – отвечает за создание интерфейса, т.е. клиентской части приложения. Он оживляет макеты дизайнеров, делает так, чтобы работали анимации, нажималась кнопки, заполнялись формы с данными. Еще фронтендер публикует продукт в сети и следит, чтобы он правильно смотрелся на разных экранах. Для работы необходимо знание HTML, CSS, JavaScript, требуется погружение в бизнес и требования к продукту;<br><span class="profnametext">backend developer</span> – отвечает за разработку серверной части приложений, их внутреннего наполнения. Для работы необходимо знать PHP, SQL, хорошо разбираться в математике;<br><br><span class="profnametext">fullstack developer</span> – совмещает обязанности двух предыдущих специалистов.',
    '<span class="profnametext">Разработчик игр (game developer)</span>: специалист, занимающийся созданием программного кода, визуализацией и концепцией игры, а также выбором средств для реализации указанных задач. Для работы необходимо знать различные языки программирования, разбираться в графическом дизайне, аудиоинженерии, обладать креативностью, разбираться в современных играх, а также уметь работать в команде.',
    '<span class="profnametext">Мобильный разработчик (mobile developer)</span>: специалист, разрабатывающий программные приложения для различных мобильных устройств (планшетов, смартфонов).',
    '<span class="profnametext">Дата аналитик (data analyst)</span>: специалист, занимающийся анализом больших массивов информации в целях подготовки рекомендаций для бизнеса. Для работы необходимо знать Excel, Google таблицы, владеть языком Python, требуются способности к анализу, поиску закономерностей, умение работать с огромными массивами данных.',
    '<span class="profnametext">Специалист по информационной безопасности (cybersecurity)</span>: занимается созданием хорошо защищенных систем, препятствует несанкционированным проникновениям и утечке данных. Для работы необходимо знать Linux, владеть языком Python, разбираться в криптографии.',
    '<span class="profnametext">Web-дизайнер (UI/UX)</span>: специалист, занимающийся проектированием сайтов и приложений. Для работы необходимы художественные способности, а также знания по психологии.',
    '<span class="profnametext">Специалист по машинному обучению (machine learning engineer)</span>: специалист, обучающий роботов (модели машинного обучения) решать конкретные задачи. Для работы требуется хорошее знание математики, владение языком Python.',
    '<span class="profnametext">Тестировщик</span>: специалист, тестирующий приложения и другие программные продукты. Проверяет, как работают разные функции приложений и сайтов в штатных и нештатных ситуациях, описывает ошибки и передает их разработчикам, чтобы исправили.',
    '<span class="profnametext">Системный администратор</span>: специалист, который отвечает за установку, обслуживание и поддержку компьютерных систем. Для работы требуется знать Windows, Linux, macOS, а также разбираться в компьютерном железе.',
    '<span class="profnametext">Специалист по ремонту техники</span>: прекрасно разбирается в компьютерном железе, требуется внимательность.'
];

 
const changeBtn = document.getElementById('answerButton');
const question = document.getElementById('changetext');
const questionnum = document.getElementById('changequest');

let currentQuestionIndex = 0;

let score = 0;

if (changeBtn) {
    changeBtn.addEventListener('click', () => {
        const selectedAnswer = document.querySelector('input[type="radio"]:checked')
        if (selectedAnswer) {
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
        }
    });
}

const changeBtn2 = document.getElementById('answerButton2');
const question2 = document.getElementById('changetext2');
const questionnum2 = document.getElementById('changequest2');

let currentQuestionIndex2 = 0;

let score2 = 0;

if (changeBtn2) {
    changeBtn2.addEventListener('click', () => {
        const selectedAnswer = document.querySelector('input[type="radio"]:checked')
        if (selectedAnswer) {
            currentQuestionIndex2 = currentQuestionIndex2 + 1;
            if (currentQuestionIndex2 >= questions2.length) {
                document.getElementById('question2').style.display = 'none';
                document.getElementById('result2').style.display = 'block';
                changeBtn2.style.display = 'none';
                let elements = document.getElementsByClassName("radio_answers");
                for(let i = 0; i < elements.length; i++) {
                    elements[i].style.display = 'none';
                }
                let maxnum = -1, maxim = -1;
                for (let i = 0; i < user_results.length; i++) {
                    if (user_results[i] > maxim) {
                        maxim = user_results[i];
                        maxnum = i;
                    }
                }
                document.getElementById("result1text2prof").innerHTML = professionsdesc[maxnum];
            }
            else {
                question2.textContent = questions2[currentQuestionIndex2];
                questionnum2.textContent = questionsnum2[currentQuestionIndex2];

                if (selectedAnswer && selectedAnswer.value == 'yes') {
                    $("input[type='radio']").prop('checked', false);
                    for (let i = 0; i < scores.length(); i++) {
                        if (scores[currentQuestionIndex2][i] == 1) {
                            user_results[currentQuestionIndex2]++;
                        }
                    }
                }
                $("input[type='radio']").prop('checked', false);
            }
        }
    });
}
