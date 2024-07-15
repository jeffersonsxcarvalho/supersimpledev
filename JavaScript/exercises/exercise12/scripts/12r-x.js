//12r

console.log('12r');

const autoPlayBtn = document.querySelector('.js-auto-play-button');
const resetScoreBtn = document.querySelector('.js-reset-score-button');

let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();

/*
if (!score) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0
  };
}
*/

let isAutoPlaying = false;
let intervalId;

//const autoPlay = () => {

//};
function autoPlay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;

    //12t
    autoPlayBtn.innerHTML = 'Stop Playing';

  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;

    //12t
    autoPlayBtn.innerHTML = 'Auto Play';
  }
}

document.querySelector('.js-rock-button')
  .addEventListener('click', () => {
    playGame('rock');
  });

document.querySelector('.js-paper-button')
  .addEventListener('click', () => {
    playGame('paper');
  });

document.querySelector('.js-scissors-button')
  .addEventListener('click', () => {
    playGame('scissors');
  });

document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r') {
    playGame('rock');
  } else if (event.key === 'p') {
    playGame('paper');
  } else if (event.key === 's') {
    playGame('scissors');
  }

//12u
  if (event.key === 'a') {
    autoPlay();
  }

//12w
  if (event.key === 'Backspace') {
    resetScoreConfirm();
  }  
});


function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose.';
    } else if (computerMove === 'paper') {
      result = 'You win.';
    } else if (computerMove === 'scissors') {
      result = 'Tie.';
    }

  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win.';
    } else if (computerMove === 'paper') {
      result = 'Tie.';
    } else if (computerMove === 'scissors') {
      result = 'You lose.';
    }
    
  } else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie.';
    } else if (computerMove === 'paper') {
      result = 'You lose.';
    } else if (computerMove === 'scissors') {
      result = 'You win.';
    }
  }

  if (result === 'You win.') {
    score.wins += 1;
  } else if (result === 'You lose.') {
    score.losses += 1;
  } else if (result === 'Tie.') {
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result').innerHTML = result;

  document.querySelector('.js-moves').innerHTML = `You
<img src="images/${playerMove}-emoji.png" class="move-icon">
<img src="images/${computerMove}-emoji.png" class="move-icon">
Computer`;
}

function updateScoreElement() {
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  return computerMove;
}

//12s
console.log('12s');
autoPlayBtn.addEventListener('click', () => autoPlay());


//12v
console.log('12v');

function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem('score');
  updateScoreElement();
}

//changed in 12x
//resetScoreBtn.addEventListener('click', () => resetScore());


//12x

console.log('12x');

const resetScoreConfirmp = document.querySelector('.js-reset-confirm');


resetScoreConfirmp.innerHTML = 'Are you sure you wanna reset the score? <button class="js-yes">Yes</button> <button class="js-no">No</button>'

resetScoreConfirmp.style.display = 'none';

  const yesBtn = document.querySelector('.js-yes');
  const noBtn = document.querySelector('.js-no');



  yesBtn.addEventListener('click', () => {
    resetScore();
    resetScoreConfirmp.style.display = 'none';
  });

  noBtn.addEventListener('click', () => resetScoreConfirmp.style.display = 'none');


//BONUS
  document.body.addEventListener('keydown', (event) => {
    if(resetScoreConfirmp.style.display = 'block' && (event.key === 'y' ||event.key === 'n')){
      if (event.key === 'y') {
        resetScore();
        resetScoreConfirmp.style.display = 'none';
      }else if (event.key === 'n') {
        resetScoreConfirmp.style.display = 'none'
      } 
    }    
});


function resetScoreConfirm() {
  resetScoreConfirmp.style.display = 'block';
}
  
  
resetScoreBtn.addEventListener('click', () => resetScoreConfirm());