'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number!' //Cmd + ctrl + Space

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value); 
let secretNumber = Math.trunc(Math.random() * 20 ) + 1 // #8 define secret number. We want it between 1 and 20. Math.random generates a decimal number and then multiplying it by 20 (between 1 and 20). The .trunc method makes the number without decimal (0 to 19) which is why we need to add the +1 to represent 1-20.
// document.querySelector('.number').textContent = secretNumber; //#8 update the DOM to the secret number

let score = 20; //#11 start the score
let highscore = 0; //#21 initial highscore value

document.querySelector('.check').addEventListener('click', function () { //Only called once event happens //#1create event listener
    const guess = Number(document.querySelector('.guess').value); //#2 create variable to store the value, #4 convert string to number
    console.log(guess, typeof guess); //#3 see the type of value being made, #5 input guess to see if its updated
    if (!guess) { // #6 create if function to make sure the value is a number. If no value or not a number.
        document.querySelector('.message').textContent = '⛔️ No Number!';//#7 inform user
    } else if (guess === secretNumber){ //#9 check to see if the guess value is the same as the secret number. Player wins.
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.message').textContent = '🎉 Correct Number!'; //#10 update message
        document.querySelector('body').style.backgroundColor = '#60b347' // #18 Update CSS. If its two word CSS property name, you need to camel case.
        document.querySelector('.number').style.width = '30rem' //#19 update background width for the number element. CSS values always need to be in quotes (string).
    if(score > highscore) { //#22 Store the highscore condition
        highscore = score;
        document.querySelector('.highscore').textContent = highscore; //#23 update highscore DOM
    }

    } else if (guess > secretNumber) { //When user guesses too high
        if (score > 1) { //#14 make an if statement for when score is above 0. #16 However, that will make an issue because it will include 0 as well. So it needs to be updated to 1.
          document.querySelector('.message').textContent = '📈 Too High!'; //#10
          score = score - 1; //#12 minus the score since it is wrong. Alternatively score --.
          document.querySelector('.score').textContent = score; //#13 update the score value
        } else {
            document.querySelector('.message').textContent = '💥 You lost the game!'; //#15 make user aware that they lost the game because of too many attempts
            document.querySelector('.score').textContent = 0; //#17 update the score to 0.
        };
    } else if (guess < secretNumber) { //When user guesses too low
        if (score > 1) { //#14 as duplicate
          //#14 make an if statement for when score is above 0. #16 However, that will make an issue because it will include 0 as well. So it needs to be updated to 1.
          document.querySelector('.message').textContent = '📉 Too Low!'; //#10
          score = score - 1; //#12 minus the score since it is wrong. Alternatively score --.
          document.querySelector('.score').textContent = score; //#13 update the score value
        } else {
          document.querySelector('.message').textContent = '💥 You lost the game!'; //#15 make user aware that they lost the game because of too many attempts
          document.querySelector('.score').textContent = 0; //#17 update the score to 0.
        };
    };
});

document.querySelector('.again').addEventListener('click', function () { //#20 Click again to reset everything
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});