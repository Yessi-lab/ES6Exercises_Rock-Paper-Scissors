const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();

if (userInput === 'rock' || userInput === 'paper'|| userInput === 'scissors'|| userInput === 'bomb') { 
  return userInput;
  } else { 
  return('Error!');
  }
};

const getComputerChoice = () => {
  let number = Math.floor(Math.random()*3);
  if (number === 0) {
    return('rock');
  } else if (number === 1) {
    return('paper');
  } else if (number === 2) {
    return ('scissors');
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'The game is a tie!';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The computer won!';
    } else {
    return 'You won';      
    }
  };
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'The computer won!';
    } else {
      return 'You won!'
    }
  };
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  };
  if (userChoice === 'bomb') {
    return 'OMG you sneaky bastard, you won!!'
  }
};

let playGame = () => {
  let userChoice = getUserChoice ('bomb');
  let computerChoice = getComputerChoice ();
  console.log('You threw ' + userChoice);
  console.log('The computer threw: '+ computerChoice);
  console.log(determineWinner(userChoice,computerChoice));
};

playGame();