var inquirer = require('inquirer');

var BasicCard = require('./BasicCard');
var ClozeCard = require('./ClozeCard');

var fs = require("fs");

//prompt/ask user what style game they want to  play
function promptUser() {
    inquirer.prompt([
        {
            type: "list",
            name: "cardSelection",
            message: "What style of flashcard do you want to play?",
            choices: ["Basic Card", "Cloze Card"]
        }
    ]).then(function(input) {
        if(input.cardSelection === "Basic Card") {
            console.log("\r\n" + "Nice, you've chose Basic style flashcards" + "\r\n");
            console.log("Lets get started.....");
            bcOne();
        }else {
            console.log("\r\n" + "Nice, you've chose Cloze style flashcards" + "\r\n");
            startClozeQ();
        }
    }); 
}
promptUser();


//basic flash card Q&A set up
var AmeliaEarhart = new BasicCard("Who was the the first female to fly across the Atlantic Ocean?", "amelia earhart");
var batman = new BasicCard("Who is Batman's secret identity?", "bruce wayne");
var krypton = new BasicCard("What element starts with the letter 'K'?", "Krypton");
var five = new BasicCard("How many states boarder the Gulf of Mexico?", "five");
var michigan = new BasicCard("What state has more shoreline than the entire Atlanic seaboard?", "Michigan");

//basic card questions & user input
function bcOne() {
    inquirer.prompt([
        {
            type: "input",
            message: AmeliaEarhart.front,
            name: "answerAmelia"
        }
    ]).then(function (userInput) {
        if(userInput.answerAmelia === AmeliaEarhart.back) {
            console.log("Nice! Your answer is correct");
            bcTwo();
        }
        else{
            console.log("Uh oh...looks liek you got this one wrong, the correct answer is " + AmeliaEarhart.back);
            bcOne();
        }
    })
}
function bcTwo() {
    inquirer.prompt([
        {
            type: "input",
            message: krypton.front,
            name: "answerKrypton"
        }
    ]).then(function (userInput) {
        if(userInput.answerKrypton === krypton.back) {
            console.log("Well done! Your answer is correct");
            bcThree();
        }
        else{
            console.log("Uh oh...looks liek you got this one wrong, the correct answer is " + krypton.back);
            bcThree();
        }
    })
}
function bcThree() {
    inquirer.prompt([
        {
            type: "input",
            message: batman.front,
            name: "answerBruce"
        }
    ]).then(function (userInput) {
        if(userInput.answerBruce === batman.back) {
            console.log("Woohoo! Your answer is correct");
            bcFour();
        }
        else{
            console.log("Uh oh...looks liek you got this one wrong, the correct answer is " + batman.back);
            bcTFour();
        }
    })
}
function bcFour() {
    inquirer.prompt([
        {
            type: "input",
            message: five.front,
            name: "answerFive"
        }
    ]).then(function (userInput) {
        if(userInput.answerFive === five.back || userInput.answerFive === "5") {
            console.log("Awesome! Your answer is correct");
            bcFive();
        }
        else{
            console.log("Uh oh...looks liek you got this one wrong, the correct answer is " + five.back);
            bcTFive();
        }
    })
}
function bcFive() {
    inquirer.prompt([
        {
            type: "input",
            message: michigan.front,
            name: "answermichigan"
        }
    ]).then(function (userInput) {
        if(userInput.answermichigan === michigan.back || userInput.answermichigan === "michigan") {
            console.log("YAY! Your answer is correct");
            bcFive();
        }
        else{
            console.log("Uh oh...looks liek you got this one wrong, the correct answer is " + michigan.back);
        
        }
    })
}

//cloze flash card Q&A set up
var clozeArr = [];

function clozeQuest() {
    var clozeQ = new ClozeCard(text, cloze)
    clozeArr.push(clozeQ);
}

var cloze1 = new ClozeCard("Amelia Earhart was the first femal to fly across the Atlantic Ocean", "Amelia Earhart");
var cloze2 = new ClozeCard("Bruce Wayne is Batman's secret Idenity", "Bruce Wayne");
var cloze2 = new ClozeCard("Krypton is an element that is the letter 'K' on the periodic table");
var cloze3 = new ClozeCard("Michigan has more shoreline than the entire Atlantic seaboard", "Michigan");
var cloze4 = new ClozeCard("Red, yellow, blue are all primary colors", "red, yellow, blue");
var cloze5 = new ClozeCard("Toto, I have a feeling we aren't in Kansas anymore", "Toto");


//cloze card questions & user input

var count = 0;

function startClozeQ() {
    if(count < clozeArr.length) {
        inquirer.prompt([
            {
            type: "input",
            name: "text",
            message: clozeArr[count].partial,
            name: "clozeAnswer"
            }
        ]).then(function(userInput) {
            if(userInput.clozeAnswer === clozeArr.cloze) {
                console.log("Wooohooo, you guessed right!");
                console.log(clozeArr[clozeQ].fullText);
                count++;
                if(clozeQ <= 4) {
                    startClozeQ();
                }
                else {
                    console.log("well done! you completed all cards!")
                }
            }
        })
    }
}

// var firstPresident = new BasicCard(
//     "Who was the first president of the United States?", "George Washington");

    // console.log(firstPresident.front); 
    // "Who was the first president of the United States?"
    // console.log(firstPresident.back); 
    // "George Washington"
