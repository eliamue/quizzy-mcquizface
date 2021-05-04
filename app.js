//export functions
import { isYes } from './utils.js';
import { isNo } from './utils.js';

//DOM elements
const button = document.getElementById('boaty-button');
const quizResults = document.getElementById('quiz-results');

//event listener
button.addEventListener('click', () => {

//alert that quiz is triggering
    alert('Welcome, Boaty fans!');

//trigger quiz confirmation
    const wantQuiz = confirm('Are you ready to test your Boaty knowledge?');
    if (wantQuiz === false) {
        return;
    }

//name
    const firstName = prompt('What is your first name, champ?');
    const lastName = prompt('What is your last name, sport?');

//Question 1
    const answer1 = prompt('Okay, was Boaty McBoatface the first viral example of an official naming contest resulting in a "Something McSomething" winning name? y/n');
    let score = 0;
    if (isYes(answer1)) {
        score = score + 0;
    }
    if (isNo(answer1)) {
        score = score + 1;
    }


//Question 2
    const answer2 = prompt('Was the name Boaty McBoatface actually used for anything official? y/n');
    if (isYes(answer2)) {
        score = score + 1;
    }
    if (isNo(answer1)) {
        score = score + 0;
    }

//Question 3
    const answer3 = prompt('Will Boaty be used for anything vital? y/n');
    if (isYes(answer3)) {
        score = score + 1;
    }
    if (isNo(answer1)) {
        score = score + 0;
    }

//results
    quizResults.textContent = `Well look at you, ${firstName} ${lastName}, you got ${score} out of 3!`;
    quizResults.style.display = 'block';
});