

async function startQuiz() {
    let score = 0;

    for (let i = 0; i < questions.length; i++) {
        const { question, options, correctIndex } = questions[i];

        console.log(question);
        options.forEach(option => console.log(option));

        const userAnswer = await getUserAnswer();
        if (userAnswer === correctIndex) {
            console.log('Correct!\n');
            score++;
        } else {
            console.log(`Incorrect. The correct answer is "${options[correctIndex]}".\n`);
        }
    }

    console.log(`Quiz finished! Your score is: ${score}/${questions.length}`);
}

function getUserAnswer() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve) => {
        rl.question('Your answer: ', (answer) => {
            rl.close();
            resolve(answer.toLowerCase());
        });
    });
}

startQuiz();