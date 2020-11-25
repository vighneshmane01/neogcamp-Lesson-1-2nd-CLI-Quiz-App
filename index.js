var chalk = require('chalk');

var readlineSync = require('readline-sync');

var userInput = readlineSync.question(chalk.cyan("Enter your name: "))

console.log(chalk.blueBright("\n🔥 Welcome "+userInput+" to the Mumbai Indians quiz🔥"))

console.log(chalk.bgYellow("\n Guidelines:"))
console.log(chalk.cyan("1.You have to answer five questions.",
"\n2.All questions are compulsory.","\n3.Each question is of 2 marks.","\n4.No negative marks will be alloted.\n"))
var score = 0;

function play(ques,ans) {
  var userAnswer = readlineSync.question(ques);

  if (userAnswer.toUpperCase() === ans.toUpperCase()) {
    console.log(chalk.green("Correct"));
    score = score + 2;
    
  } else {
    console.log(chalk.red("Incorrect"));
   
  }

  console.log(chalk.bgBlue("current score: ", score));
  console.log(chalk.yellowBright("*******************************************"))
}

var questions = [{
  ques: "1.When did Mumbai Indians won 1st IPL title 🏆 ? \n",
  ans: "2013"
}, {
  ques: "2.When did Mumbai Indians won 2nd IPL title 🏆 ? \n",
  ans: "2015"
}, {
  ques: "3.When did Mumbai Indians won 3rd IPL title 🏆 ? \n",
  ans: "2017"
}, {
  ques: "4.When did Mumbai Indians won 4th IPL title 🏆 ? \n",
  ans: "2019"
}, {
  ques: "5.When did Mumbai Indians won 5th IPL title 🏆 ? \n",
  ans: "2020"
}];


for (var i=0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  play(chalk.blue(currentQuestion.ques),currentQuestion.ans)
}
console.log(chalk.bgYellow("Final Score: ", score));
console.log(chalk.bgRed("\nAnswers:"))
console.log(chalk.red("1.2013 "))
console.log(chalk.red("2.2015 "))
console.log(chalk.red("3.2017 "))
console.log(chalk.red("4.2019 "))
console.log(chalk.red("5.2020 \n"))

console.log(chalk.bgBlue("Scorecard:"))
console.log(chalk.bgRed("Sr.No. " + "Name " + "Score"))

console.log(chalk.bgCyan(" 1.  "+"  Sky"+"    10 "))
console.log(chalk.bgCyan(" 2.  "+"  Omi"+"    10 \n"))
console.log(chalk.green("Thankyou for playing the quiz 😃 ."))


