const questions = [
  {
    question: "who is pangcin?",
    answers: {
      a: "a guy",
      b: "a boy",
      c: "a prince",
      d: "a king"
    },
    correctAnswer: "c"
  },
  {
    question: "What is the name of Aunt Marge's dog who likes to eat rotten meat on monday morning which sounds quite funny?",
    answers: {
      a: "a cat",
      b: "a mouse",
      c: "a sheep",
      d: "a lion"
    },
    correctAnswer: "a"
  },
  {
  question: "why toto?",
    answers: {
      a: "cute",
      b: "funny",
      c: "refreshing",
      d: "mood booster"
    },
    correctAnswer: "d"
  }
]

const INCORRECT_COLOR = '#b51419';
const CORRECT_COLOR = '#1b8c15';

function addListenerToMainButton() {
  let mainButton = document.getElementById('main-button');
  mainButton.addEventListener('click', handleMainButtonClick);
}

function handleMainButtonClick() {
  removeHomeContainer();
  const currentQuestion = createQuizContainer();
  addListenerToAnswerButtons(currentQuestion);
}

function removeHomeContainer() {
  let homeContainer = document.getElementById('home-container');
  document.body.removeChild(homeContainer);
}

// function createQuizContainer() {
//   let quizContainer = document.createElement('div');
//   quizContainer.setAttribute('class', 'container-fluid');
//   quizContainer.innerHTML = document.getElementById('quiz-html').innerHTML;
//   document.getElementById('quiz-container').appendChild(quizContainer);  
// }

function createQuizContainer() {
  //preparing the quiz container on the html side
  let quizContainer = document.getElementById('quiz-container');
  quizContainer.setAttribute('class', 'container-fluid');

  //Handlebars boilerplate (with some modifications)
  const templateSource = document.getElementById('quiz-html').innerHTML;
  let template = Handlebars.compile(templateSource);
  const currentQuestion = getRandomQuestion();
  let compiledHtml = template(currentQuestion);
  quizContainer.innerHTML = compiledHtml;

  //hide the 'next' button
  document.getElementById('next-button').style.visibility = 'hidden';

  return currentQuestion;
}

function getRandomQuestion() {
  const maxNumberOfQuestions = questions.length;
  const questionIndex = Math.floor(Math.random() * Math.floor(maxNumberOfQuestions));
  return questions[questionIndex];
}

function disableAnswerButtons() {
  document.getElementById('answer-button-a').style.pointerEvents = 'none';
  document.getElementById('answer-button-b').style.pointerEvents = 'none';
  document.getElementById('answer-button-c').style.pointerEvents = 'none';
  document.getElementById('answer-button-d').style.pointerEvents = 'none';
}

function checkAnswer(answerPressed, currentQuestion) {
  if (answerPressed === currentQuestion.correctAnswer) {
    //turn the selected button green
    document.getElementById('answer-button-' + answerPressed).style.background = CORRECT_COLOR;
    document.getElementById('answer-button-' + answerPressed).style.border = CORRECT_COLOR;
  } else {
    //turn the selected button red
    document.getElementById('answer-button-' + answerPressed).style.background = INCORRECT_COLOR;
    document.getElementById('answer-button-' + answerPressed).style.border = INCORRECT_COLOR;
    //turn the correct button green
    document.getElementById('answer-button-' + currentQuestion.correctAnswer).style.background = CORRECT_COLOR;
    document.getElementById('answer-button-' + currentQuestion.correctAnswer).style.border = CORRECT_COLOR;
  }
  disableAnswerButtons();
  document.getElementById('next-button').style.visibility = 'visible';
}

function handleButtonA(currentQuestion) {
  checkAnswer('a', currentQuestion);
}

function handleButtonB(currentQuestion) {
  checkAnswer('b', currentQuestion);
}

function handleButtonC(currentQuestion) {
  checkAnswer('c', currentQuestion);
}

function handleButtonD(currentQuestion) {
  checkAnswer('d', currentQuestion);
}

function addListenerToAnswerButtons(currentQuestion) {
  let answerButtonA = document.getElementById('answer-button-a');
  let answerButtonB = document.getElementById('answer-button-b');
  let answerButtonC = document.getElementById('answer-button-c');
  let answerButtonD = document.getElementById('answer-button-d');

  answerButtonA.addEventListener('click', () => {
    handleButtonA(currentQuestion);
  });
  answerButtonB.addEventListener('click', () => {
    handleButtonB(currentQuestion);
  });
  answerButtonC.addEventListener('click', () => {
    handleButtonC(currentQuestion);
  });
  answerButtonD.addEventListener('click', () => {
    handleButtonD(currentQuestion);
  });
}

//kick things off
addListenerToMainButton();


