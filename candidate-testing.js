const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = ""
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //

let correctAnswer= "Sally Ride"
let candidateAnswer = ""
let question = "Who was the first American woman in space?"
let questions = ["1. Who was the first American woman in space? ", 
 "\n2. True or false: 5 kilometer == 5000 meters? " ,
  "\n3. (5 + 3)/2 * 10 = ? ", 
  "\n4. Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
   "\n5. What is the minimum crew size for the ISS? " ];
let correctAnswers= ["Sally Ride", "true", "40", "Trajectory", 	"3"];
let candidateAnswers=[];



function askForName() {
  // TODO 1.1b: Ask for candidate's name //

  candidateName = input.question("Enter name: ")
   
 
  }

function askQuestion() {
 for (i=0; i < questions.length; i++){
  candidateAnswer= input.question(questions[i])
  candidateAnswers.push(candidateAnswer)
  console.log(`
Your Answer: ` + candidateAnswers[i] + " \nCorrect Answer: " + correctAnswers[i]+ "\n")
  } 
  return candidateAnswers;
}




function gradeQuiz(candidateAnswers) { 
  let grade = 0; 
  for (let i=0; i< correctAnswers.length; i++) {
    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()){
      grade++;  
    } 
  }
  let score = (grade/correctAnswers.length)*100
  let status = ""
  if (score < 80){
    status = "FAILED"
  } else {
    status = "PASSED"
  }
  console.log(`>>> Overall Grade: ${score}% <<<
>>> (${grade} of 5 responses correct) <<<
>>> Status: ${status} <<<`);
  return grade;
}






function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  
  console.log (`
Welcome, ` + candidateName + "." + "\n" );
  askQuestion();
  gradeQuiz(this.candidateAnswers);

}
// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
 runProgram: runProgram
};