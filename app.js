'use strict';

alert('Hi');

function userName2 () {

    var userName = prompt('What is your name?');
    var userAge = prompt('What is your age?');

    document.write('<h1>' + userName + '</h1>');
}
userName2();

function quarantineGame () {
    var firstQuestion = prompt('Do you want to play a game?');
    //verify an answer with yes or no

}

quarantineGame();

function gameTime () {
    var secondQuestion = prompt('Guess a number between 55 and 130')
    //verify the answer & limit attempts

}

gameTime ();

if (hourNow > 18) {
    greeting = 'Good evening!';
} else if (hourNow > 12) {
    greeting = 'Good afternoon!';
} else if (hourNow > 0) {
    greeting = 'Good Morning!';
} else {
    greeting = 'Welcome!';
}

document.write('<h3>' + greeting + '</h3>');