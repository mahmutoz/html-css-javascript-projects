'use strict';
const d = document;
class Question {
    constructor(text, choices, correct) {
        this.text = text;
        this.choices = choices;
        this.correct = correct;
    }
    checkAnswer(correct){
        return this.correct === correct;
    }
}

class Quiz {
    constructor(question) {
        this.question = question;
        this.score = 0;
        this.questionIndex = 0;
    }

    getQuestion(){
        return this.question[this.questionIndex];
    }

    isFinish(){
        return this.question.length === this.questionIndex;
    }

    whichQuestion(){
        const whichQuestionEl = d.querySelector('.count');
        whichQuestionEl.innerHTML = `${this.questionIndex + 1}/${questions.length}`;
    }

    checkAnswer(answer){
        let question = this.getQuestion();
        if(question.checkAnswer(answer))
            this.score++;
        this.questionIndex++;
    }

    userGuess(btnClass, choice){
        let markedButton = d.querySelector(btnClass);
        markedButton.onclick = function (){
            quiz.checkAnswer(choice);
            loadQuestion();
        }
    }

    showScore(){
        const questionCardEl = d.querySelector('.question--card');
        const titleEl = d.createElement('h2');
        titleEl.className = "title";
        titleEl.textContent = "Trivia Test Result";
        questionCardEl.innerHTML = `<h2>Correct: ${quiz.score}</h2><br><h2>Wrong: ${questions.length - quiz.score}</h2>`;

        questionCardEl.insertAdjacentElement("afterbegin", titleEl);
    }
}

const q1 = new Question("Inside which HTML element do we put the JavaScript?",["<javascript>","<js>","<script>","<scripting>","<link>"], "<script>");
const q2 = new Question("Which operator is used to assign a value to a variable?" ,["*","=","-","x",">"], "=");
const q3 = new Question("What's the best programing language?" ,["PHP","C#","Python","Javascript","Ruby"], "Javascript");
const q4 = new Question("What is the correct syntax for referring to an external script called \"xxx.js\"?" ,["<script src=\"xxx.js\">","<script href=\"xxx.js\">","<script name=\"xxx.js\">","<link src=\"xxx.js\">","<link href=\"xxx.js\">"], "<script src=\"xxx.js\">");
const q5 = new Question("How do you write 'Hello World' in an alert box?",["alertBox(\"Hello World\");","msg(\"Hello World\");","alert(\"Hello World\");","msgBox(\"Hello World\");", "Alert(Hello World);"], "alert(\"Hello World\");");

let questions = [q1, q2, q3, q4, q5];
let quiz = new Quiz(questions);

function loadQuestion(){
    if (quiz.isFinish()){
        quiz.showScore();
    } else {
        let question = quiz.getQuestion();
        let choices = question.choices;

        d.querySelector('.question--header').textContent = question.text;

        choices.forEach((choice, index) => {
           let optionEl = d.querySelector(`.btn--option-${index + 1}`);
           optionEl.textContent = choice;
           quiz.whichQuestion();
           quiz.userGuess(`.btn--option-${index + 1}`, choice);
        });
    }
}
loadQuestion();