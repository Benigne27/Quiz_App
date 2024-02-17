const { read } = require('fs');
const { resolve } = require('path');
const readline=require('readline')

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
    }
  ];

//   //Create interface to interact with the user
  
//   const rl=readline.createInterface({
//     input: process.stdin, //Read from standard input (Keyboard)
//     output: process.stdout //Write to standard output (Console)
//   })

//   rl.question("What is your name?", (name)=>{
//     console.log(`Hello, ${name}`)


//     //Close the readline
//     rl.close()
//   }
//   )

// const checkCorrect=()=>{
  const theAnswer=()=>{
const rl=readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
 rl.question("Answer: \n", (answer)=>{
  rl.close()
  resolve(answer)
})
  }
  // theAnswer()

    const getQuestions = questions.forEach((element, index)=>{
        console.log(`Q${index+1}. ${element.question}`)
        console.log(`${theAnswer()}\n`)

    
        for(let i=0; i<element.options.length; i++){
            console.log(`${i+1}. ${element.options[i]}`)
        }

        // const userAnswer=()=>{
            

                // if(element.correctAnswer==answer){
                //     console.log("That's correct!")
                // }
                // else{
                //     console.log(`Incorrect! The answer is: ${element.correctAnswer}`)
                // }
          
          }
        //   userAnswer()
    // }
    )
    
    console.log(getQuestions)

// }
// checkCorrect();
