const readline = require('readline');

const questions = [
  {
    "question": "What is the capital of France?",
    "options": ["Paris", "Berlin", "London", "Rome"],
    "correctAnswer": "Paris"
  },
  {
    "question": "What is the tallest mammal?",
    "options": ["Elephant", "Giraffe", "Horse", "Lion"],
    "correctAnswer": "Giraffe"
  },
  {
    "question": "What is the chemical symbol for water?",
    "options": ["H2O", "CO2", "NaCl", "O2"],
    "correctAnswer": "H2O"
  },
  {
    "question": "Who wrote 'To Kill a Mockingbird'?",
    "options": ["Harper Lee", "J.K. Rowling", "Stephen King", "Mark Twain"],
    "correctAnswer": "Harper Lee"
  },
  {
    "question": "Which planet is known as the Red Planet?",
    "options": ["Mars", "Venus", "Mercury", "Jupiter"],
    "correctAnswer": "Mars"
  },
  {
    "question": "What is the largest organ in the human body?",
    "options": ["Liver", "Brain", "Skin", "Heart"],
    "correctAnswer": "Skin"
  },
  {
    "question": "Which country is home to the kangaroo?",
    "options": ["Australia", "Brazil", "Canada", "India"],
    "correctAnswer": "Australia"
  },
  {
    "question": "Who painted the Mona Lisa?",
    "options": ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
    "correctAnswer": "Leonardo da Vinci"
  },
  {
    "question": "What is the currency of Japan?",
    "options": ["Yen", "Euro", "Dollar", "Pound"],
    "correctAnswer": "Yen"
  },
  {
    "question": "What is the top speed of a cheetah?",
    "options": ["70 mph", "50 mph", "90 mph", "60 mph"],
    "correctAnswer": "70 mph"
  }
];

function displayQuestion(questionObj) {
  console.log(questionObj.question);
  questionObj.options.forEach((option, index) => {
    console.log(`${index + 1}. ${option}`);
  });
}

function getUserAnswer() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question('Your answer: ', (answer) => {
      rl.close();
      const optionIndex = parseInt(answer) - 1;
      if (optionIndex >= 0 && optionIndex < 4) {
        resolve(optionIndex);
      } else {
        console.log('Invalid input. Please enter a valid option number.');
        resolve(getUserAnswer());
      }
    });
  });
}

function evaluateAnswer(userAnswer, correctIndex) {
  if (userAnswer === correctIndex) {
    console.log('Correct!\n');
    return 1;
  } else {
    console.log(`Incorrect. The correct answer is "${questions[correctIndex].options[correctIndex]}".\n`);
    return 0;
  }
}

async function startQuiz() {
  let score = 0;

  for (let i = 0; i < questions.length; i++) {
    displayQuestion(questions[i]);
    const userAnswer = await getUserAnswer();
    score += evaluateAnswer(userAnswer, i);
  }

  console.log(`The Quiz has ended! Your score is: ${score}/${questions.length}`);
}

startQuiz();
