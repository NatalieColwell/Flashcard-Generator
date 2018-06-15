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
            clozeOne();
        }
    }); 
}


//basic flash card Q&A set up
var AmeliaEarhart = new BasicCard("Who was the the first female to fly across the Atlantic Ocean?", "amelia earhart");
var batman = new BasicCard("Who is Batman's secret identity?", "bruce wayne");
var krypton = new BasicCard("What element starts with the letter 'K'?", "Krypton");
var five = new BasicCard("How many states boarder the Gulf of Mexico?", "five");
var michigan = new BasicCard("What state has more shoreline than the entire Atlanic seaboard?", "Michigan");

function bcOne() {
    inquirer.prompt([
        {
            type: "input",
            message: AmeliaEarhart.front,
            name: "Amelia Earhart"
        }
    ]).then(function (input) {
        if(input.AmeliaEarhart === "Amelia Earhart" || input.AmeliaEarhart === "amelia earhart") {
            console.log("Nice! Your answer is correct");
            bcTwo();
        }
        else{
            console.log("Uh oh...looks liek you got this one wrong, the correct answer is " + AmeliaEarhart.back);
            return bcOne();
        }
    })
}



// var firstPresident = new BasicCard(
//     "Who was the first president of the United States?", "George Washington");

    // console.log(firstPresident.front); 
    // "Who was the first president of the United States?"
    // console.log(firstPresident.back); 
    // "George Washington"
