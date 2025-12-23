const readline = require("readline");

const questions = [
  {
    question: "What is the capital of Kenya?",
    options: ["Nyeri", "Kisumu", "Nairobi", "Eldoret"],
    answer: "Nairobi"
  },
  {
    question: "Who is the president of Kenya?",
    options: ["Geoffrey Mosiria", "Kipchumba Murkomen", "Babu Owino", "William Rutto"],
    answer: "William Rutto"
  },
  {
    question: "Which Kenyan city is known as the 'Silicon Savannah'?",
    options: ["Mombasa", "Nairobi", "Kisumu", "Eldoret"],
    answer: "Nairobi"
  },
  {
    question: "What is the official currency of Kenya?",
    options: ["Shilling", "Dollar", "Pound", "Euro"],
    answer: "Shilling"
  },
  {
    question: "Which Kenyan long-distance runner won multiple Olympic gold medals?",
    options: ["Eliud Kipchoge", "Usain Bolt", "Mo Farah", "Kenenisa Bekele"],
    answer: "Eliud Kipchoge"
  },

  
];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let score = 0;
let currentQuestion = 0;
const startTime = Date.now();

function askQuestion() {
  if (currentQuestion >= questions.length) {
    endQuiz();
    return;
  }

  const q = questions[currentQuestion];
  console.log(`\n${q.question}`);
  q.options.forEach((option, index) => {
    console.log(`${index + 1}: ${option}`);
  });

  rl.question("Select the number of your answer: ", (answer) => {
    const selectedOption = q.options[parseInt(answer) - 1];
    if (selectedOption === q.answer) {
      console.log("Correct!");
      score++;
    } else {
      console.log(`Wrong! The correct answer is: ${q.answer}`);
    }
    currentQuestion++;
    askQuestion();
  });
}

function endQuiz() {
  const totalTime = Math.floor((Date.now() - startTime) / 1000);
  console.log(`\nGame Over! Your score: ${score}/${questions.length}`);
  console.log(`Time taken: ${totalTime} seconds`);
  rl.close();
}

console.log("Welcome to the Trivia Quiz!");
askQuestion();
