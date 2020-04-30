const questions = [
  {
    question: "What piece of Peter Pettigrew's body was recovered when he was killed by Sirius?",
    answers: {
      a: "nose",
      b: "toe",
      c: "ear",
      d: "finger"
    },
    correctAnswer: "d"
  },
  {
    question: "Who is Harry's wife?",
    answers: {
      a: "Hermione",
      b: "Luna",
      c: "Dolores",
      d: "Ginny"
    },
    correctAnswer: "d"
  },
  {
  question: "Who is the 1st centaur that meets Harry?",
    answers: {
      a: "Shodan",
      b: "Nidan",
      c: "Baylor",
      d: "Ronan"
    },
    correctAnswer: "d"
  },
  {
  question: "Who was killed by the Basilisk?",
    answers: {
      a: "Moaning Myrtle",
      b: "Severus Snape",
      c: "Remus Lupin",
      d: "Sirius Black"
    },
    correctAnswer: "a"
  },
  {
  question: "How many times was Nearly Headless Nick axed in the neck?",
    answers: {
      a: "25",
      b: "45",
      c: "105",
      d: "155"
    },
    correctAnswer: "b"
  },
  {
  question: "Which of the following is not located in Hogsmeade?",
    answers: {
      a: "Honeydukes",
      b: "The Three Broomsticks",
      c: "Zonko's Joke Shop",
      d: "Devlin's Cakes and Sweets"
    },
    correctAnswer: "d"
  },
  {
  question: "What's the name of Aunt Marge's dog?",
    answers: {
      a: "Errol",
      b: "Ripper",
      c: "Dudders",
      d: "Scabbers"
    },
    correctAnswer: "b"
  },
  {
  question: "What did Rita Skeeter turn into to obtain information at Hogwarts?",
    answers: {
      a: "Rat",
      b: "Tree",
      c: "Wolf",
      d: "Beetle"
    },
    correctAnswer: "d"
  },
  {
  question: "The name of Harry's first child",
    answers: {
      a: "Lily Luna",
      b: "Teddy Remus",
      c: "James Sirius",
      d: "Albur Severus"
    },
    correctAnswer: "c"
  },
  {
  question: "What species is Buckbeak?",
    answers: {
      a: "Centaur",
      b: "Werewolf",
      c: "Hippogriff",
      d: "Owl"
    },
    correctAnswer: "c"
  },
  {
  question: "Who dropped candy in front of Dudley?",
    answers: {
      a: "Malfoy",
      b: "Ron",
      c: "Fred",
      d: "Hagrid"
    },
    correctAnswer: "c"
  },
  {
  question: "Who didn't Harry bring back from the dead?",
    answers: {
      a: "Lily",
      b: "James",
      c: "Tonks",
      d: "Lupin"
    },
    correctAnswer: "c"
  },
  {
  question: "What school does Dudley go to?",
    answers: {
      a: "Beauxbatons",
      b: "Smelting",
      c: "Eton",
      d: "Durmstrang"
    },
    correctAnswer: "b"
  },
  {
  question: "What do ghosts do on their Death Day?",
    answers: {
      a: "They throw a party",
      b: "They light a candle",
      c: "They kidnap a child",
      d: "They go to sleep"
    },
    correctAnswer: "a"
  },
  {
  question: "How long had it been since the chamber of secrets had last been opened?",
    answers: {
      a: "5 years",
      b: "50 years",
      c: "500 years",
      d: "5000 years"
    },
    correctAnswer: "b"
  },
  {
  question: "Who is the Care of Magical Creatures teacher before Hagrid?",
    answers: {
      a: "Moody",
      b: "Dolores",
      c: "Kettleburn",
      d: "McGonagall"
    },
    correctAnswer: "c"
  },
  {
  question: "What birthday does Harry celebrate in the fourth book?",
    answers: {
      a: "12",
      b: "13",
      c: "14",
      d: "15"
    },
    correctAnswer: "c"
  },
  {
  question: "Who did Harry turn into when he used the Polyjuice Potion?",
    answers: {
      a: "Malfoy",
      b: "Goyle",
      c: "Ron",
      d: "Snape"
    },
    correctAnswer: "b"
  },
  {
  question: "The sorting hat says if you have a ready mind, you belong in which house?",
    answers: {
      a: "Griffindor",
      b: "Hufflepuff",
      c: "Ravenclaw",
      d: "Slytherin"
    },
    correctAnswer: "c"
  },
  {
  question: "Where in England do Nicolas Flammel live?",
    answers: {
      a: "London",
      b: "Devon",
      c: "Somerset",
      d: "Cornwall"
    },
    correctAnswer: "b"
  },
  {
  question: "Who was James Potter's secret keeper?",
    answers: {
      a: "Dumbledore",
      b: "Sirius",
      c: "Lupin",
      d: "Peter"
    },
    correctAnswer: "d"
  },
  {
  question: "Which professor is a ghost?",
    answers: {
      a: "Binns",
      b: "Lupin",
      c: "Snape",
      d: "Dippet"
    },
    correctAnswer: "a"
  },
  {
  question: "Where does Harry Potter live?",
    answers: {
      a: "4 Privet Avenue",
      b: "4 Privet Court",
      c: "4 Privet Road",
      d: "4 Privet Drive"
    },
    correctAnswer: "d"
  },
  {
  question: "How many points is the Golden Snitch worth?",
    answers: {
      a: "50",
      b: "150",
      c: "500",
      d: "1500"
    },
    correctAnswer: "b"
  },
  {
  question: "What class does Hermione walk out in anger?",
    answers: {
      a: "Care of Magical Creatures",
      b: "Potions",
      c: "Divination",
      d: "Muggle Studies"
    },
    correctAnswer: "c"
  },
  {
  question: "What is the name of Hagrid's baby dragon?",
    answers: {
      a: "Talon",
      b: "Norbert",
      c: "Noland",
      d: "Ironbelly"
    },
    correctAnswer: "b"
  },
  {
  question: "What is the name of Draco Malfoy's son?",
    answers: {
      a: "Pansy Parkinson",
      b: "Lucius Malfoy",
      c: "Scorpius Hyperion",
      d: "Gregory Goyle"
    },
    correctAnswer: "c"
  },
  {
  question: "Who was given 10 points for having the courage to stand up to his friends",
    answers: {
      a: "Ron",
      b: "Neville",
      c: "Hermione",
      d: "Harry"
    },
    correctAnswer: "b"
  },
  {
  question: "Which professor did Harry see at The Three Broomsticks?",
    answers: {
      a: "McGonagall",
      b: "Sprout",
      c: "Trelawney",
      d: "Snape"
    },
    correctAnswer: "a"
  },
  {
  question: "How many goal posts are there on a Quidditch pitch?",
    answers: {
      a: "6",
      b: "8",
      c: "10",
      d: "12"
    },
    correctAnswer: "a"
  },
  {
  question: "Who did Sirius Black attack when trying to get into the Gryffindor common room?",
    answers: {
      a: "Malfoy",
      b: "Peeves",
      c: "The Fat Lady",
      d: "Sir Cadogan"
    },
    correctAnswer: "c"
  },
  {
  question: "Who is the Ravenclaw House ghost?",
    answers: {
      a: "The Grey Lady",
      b: "Nearly Headless Nick",
      c: "The Bloody Baron",
      d: "Moaning Myrtle"
    },
    correctAnswer: "a"
  },
  {
  question: "Where was the Chamber's entrance?",
    answers: {
      a: "Ravenclaw common room",
      b: "Boys bathroom",
      c: "Myrtle's bathroom",
      d: "Great hall"
    },
    correctAnswer: "c"
  },
  {
  question: "Which professor is the head of the Ravenclaw House?",
    answers: {
      a: "Flitwick",
      b: "McGonagall",
      c: "Sprout",
      d: "Slughorn"
    },
    correctAnswer: "a"
  },
  {
  question: "Which house was Cedric Diggory a member of?",
    answers: {
      a: "Slytherin",
      b: "Ravenclaw",
      c: "Hufflepuff",
      d: "Gryffindor"
    },
    correctAnswer: "c"
  },
  {
  question: "How many Weasley children are there?",
    answers: {
      a: "5",
      b: "6",
      c: "7",
      d: "8"
    },
    correctAnswer: "c"
  },
  {
  question: "Who attended the Yule Ball at Hogwarts with Hermione?",
    answers: {
      a: "Cedric Diggory",
      b: "Viktor Krum",
      c: "Harry Potter",
      d: "Ron Weasley"
    },
    correctAnswer: "b"
  },
  {
  question: "Who is the flying teacher?",
    answers: {
      a: "Filch",
      b: "Hooch",
      c: "Lupin",
      d: "Quirrell"
    },
    correctAnswer: "b"
  },
  {
  question: "Who was the first person to escape Azkaban?",
    answers: {
      a: "Sirius Black",
      b: "Lord Voldemort",
      c: "Cornelius Fudge",
      d: "Bartemius Crouch Jr"
    },
    correctAnswer: "d"
  },
  {
  question: "What substance does a glass Remembrall appear to be full of?",
    answers: {
      a: "Fire",
      b: "Water",
      c: "Black Mist",
      d: "White Smoke"
    },
    correctAnswer: "d"
  },
  {
  question: "Which spells make things levitate?",
    answers: {
      a: "Expecto Patronum",
      b: "Anapneo",
      c: "Wingardium Leviosa",
      d: "Aguamenti"
    },
    correctAnswer: "c"
  },
  {
  question: "Which spells is used to unlock doors?",
    answers: {
      a: "Accio",
      b: "Alohomora",
      c: "Expelliarmus",
      d: "Sectumsempra"
    },
    correctAnswer: "b"
  },
  {
  question: "What was the Every Flavour Bean's flavour Dumbledore ate in the infirmary?",
    answers: {
      a: "Lemon",
      b: "Grass",
      c: "Coffee",
      d: "Ear wax"
    },
    correctAnswer: "d"
  },
  {
  question: "Who teaches Harry how to play wizard chess?",
    answers: {
      a: "Ginny",
      b: "Hagrid",
      c: "Ron",
      d: "Hermione"
    },
    correctAnswer: "c"
  },
  {
  question: "Who switched the sword of Gryffindor?",
    answers: {
      a: "Dumbledore",
      b: "Voldemort",
      c: "Snape",
      d: "Ginny"
    },
    correctAnswer: "c"
  },
  {
  question: "What did Neville turn the boggart into?",
    answers: {
      a: "Giant legless spider",
      b: "Dementor",
      c: "Snape in his grandma's clothes",
      d: "Malfoy"
    },
    correctAnswer: "c"
  },
  {
  question: "What number bank vault contains the Sorcerer's Stone?",
    answers: {
      a: "1",
      b: "13",
      c: "71",
      d: "713"
    },
    correctAnswer: "d"
  },
  {
  question: "How much did Arthur Weasley win in the Daily Prophet Grand Prize Galleon Draw?",
    answers: {
      a: "500 galleons",
      b: "600 galleons",
      c: "700 galleons",
      d: "800 galleons"
    },
    correctAnswer: "c"
  },
  {
  question: "On the train to Hogwarts, whom did Scabbers bite?",
    answers: {
      a: "Longbottom",
      b: "Malfoy",
      c: "Crabbe",
      d: "Goyle"
    },
    correctAnswer: "d"
  },
  {
  question: "Who tried to knock Harry off his broom with a spell?",
    answers: {
      a: "Quirell",
      b: "Snape",
      c: "Malfoy",
      d: "Filch"
    },
    correctAnswer: "a"
  }
]

//global const
const INCORRECT_COLOR = '#b51419';
const CORRECT_COLOR = '#1b8c15';
const TOTAL_QUESTIONS = 10;

// to store an object of QuizSession class
let currentQuizSession;

//to track which questions have been visited.
//visited question objects will be moved from questions array to visitedQuestions array
let visitedQuestions = [];


class QuizSession {
  constructor() {
    this._questionCounter = 0;
    this._correctAnswer = 0;
  }

  get questionCounter() {
    return this._questionCounter;
  }

  get correctAnswer() {
    return this._correctAnswer;
  }

  incrementQuestionCounter() {
    this._questionCounter++;
  }

  incrementCorrectAnswer() {
    this._correctAnswer++;
  }
}

/*
  Section 1: Dealing with the home page
*/
function removeHomeContainer() {
  let homeContainer = document.getElementById('home-container');
  document.body.removeChild(homeContainer);
}

function handleMainButtonClick() {
  removeHomeContainer();

  currentQuizSession = new QuizSession();

  const currentQuestion = createQuizContainer();
  addListenerToAnswerButtons(currentQuestion);
}

function addListenerToMainButton() {
  let mainButton = document.getElementById('main-button');
  mainButton.addEventListener('click', handleMainButtonClick);
}

/*
  Section 2: Dealing with the quiz
*/
function createQuizContainer() {
  //if questions.length is greater than 0, remove current question to visitedQuestions list.
  //when all questions have been visited, reset by moving all elements from visitedQuestions to Questions.
  if (questions.length <= 0) {
    visitedQuestions.forEach((item, index) => {
      questions.push(item);
    })
    visitedQuestions.length = 0;
  }

  //preparing the quiz container on the html side
  let quizContainer = document.getElementById('quiz-container');
  quizContainer.setAttribute('class', 'container-fluid');

  //Handlebars boilerplate (with some modifications)
  const templateSource = document.getElementById('quiz-html').innerHTML;
  let template = Handlebars.compile(templateSource);
  const questionIndex = getRandomQuestionIndex();
  const currentQuestion = questions[questionIndex];
  let compiledHtml = template(currentQuestion);
  quizContainer.innerHTML = compiledHtml;

  //inject values to id="question-tracker" html element
  currentQuizSession.incrementQuestionCounter();
  document.getElementById('question-tracker').innerHTML = `${currentQuizSession.questionCounter}/${TOTAL_QUESTIONS}`;

  //inject updated progress bar to html
  const questionNumberPercentage = currentQuizSession.questionCounter / TOTAL_QUESTIONS * 100;
  document.getElementById('question-progress').innerHTML = `<div class="progress-bar" role="progressbar" style="width: ${questionNumberPercentage}%" aria-valuenow="${questionNumberPercentage}" aria-valuemin="0" aria-valuemax="100"></div>`;

  //hide the 'next' button
  document.getElementById('next-button').style.visibility = 'hidden';

  //adding event handler to next-button
  addListenerToNextButton();

  //move currentQuestion to visitedQuestions list
  visitedQuestions.push(currentQuestion);
  questions.splice(questionIndex, 1);

  return currentQuestion;
}

function getRandomQuestionIndex() {
  const maxNumberOfQuestions = questions.length;
  const questionIndex = Math.floor(Math.random() * Math.floor(maxNumberOfQuestions));
  return questionIndex;
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

    //update the object
    currentQuizSession.incrementCorrectAnswer();
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

function removeQuizContainerChildren() {
  let quizContainer = document.getElementById('quiz-container');
  quizContainer.innerHTML = '';
  quizContainer.removeAttribute('class');
}

function handleNextButton() {
  removeQuizContainerChildren();

  if (currentQuizSession.questionCounter >= TOTAL_QUESTIONS) {
    //display result page
    createResultContainer();
  } else {
    const currentQuestion = createQuizContainer();
    addListenerToAnswerButtons(currentQuestion);
  }
}

function addListenerToNextButton() {
  let nextButton = document.getElementById('next-button');
  nextButton.addEventListener('click', handleNextButton);
}

/*
  Section 3: Dealing with the result page
*/
function createResultContainer() {
  let resultContainer = document.getElementById('result-container');
  resultContainer.setAttribute('class', 'container-fluid');
  resultContainer.innerHTML = document.getElementById('result-html').innerHTML;

  //set css to red if score is 6 or lower, otherwise green
  console.log(`currentQuizSession.correctAnswer: ${currentQuizSession.correctAnswer}`);
  document.getElementById('score-value-id').innerHTML = `${currentQuizSession.correctAnswer}/${TOTAL_QUESTIONS}`;
  if (currentQuizSession.correctAnswer <= 6) {
    document.getElementById('score-value-id').style.color = INCORRECT_COLOR;
  } else {
    document.getElementById('score-value-id').style.color = CORRECT_COLOR;
  }

  addListenerToContinueButton();
}

function removeResultContainerChildren() {
  let resultContainer = document.getElementById('result-container');
  resultContainer.innerHTML = '';
  resultContainer.removeAttribute('class');
}

function handleContinueButton() {
  //remove result container
  removeResultContainerChildren();

  //create a new session
  currentQuizSession = new QuizSession();

  //continue the quiz
  const currentQuestion = createQuizContainer();
  addListenerToAnswerButtons(currentQuestion);
}

function addListenerToContinueButton() {
  let continueButton = document.getElementById('continue-button');
  continueButton.addEventListener('click', handleContinueButton);
}


/******
  Kick things off
******/
addListenerToMainButton();

