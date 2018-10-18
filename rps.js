const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
      return userInput
    } else {
      console.log("ERROR")
    };
  };
  const getComputerChoice = () =>{
    randomNumber = Math.floor(Math.random()*3);
    switch(randomNumber){
      case (0):
        return 'rock';
      case (1):
        return 'paper';
      case (2):
        return 'sciccors';
    };
  };
  
  const determineWinner = function (userChoice,computerChoice) {
    if(userChoice === 'bomb'){
      return 'You have picked the BOMB!! Of course you have won!'
    } if(userChoice === computerChoice){
      return 'The game is a tie!'
    } else if(userChoice === 'rock'){
      if(computerChoice === 'scissors'){
        return 'You have won!';
      } else{
        return 'The computer has won!'
      };
    } else if(userChoice === 'paper'){
      if(computerChoice === 'rock'){
        return 'You have won!'
      } else{
        return 'The computer has won!'
      };
    } else if(userChoice === 'scissors'){
      if(computerChoice === 'paper'){
        return 'You have won!'
      } else{
        return 'The computer has won!'
      };
    };
  };
  
  const playGame = function (){
    const userChoice = getUserChoice('bomb');
    const computerChoice = getComputerChoice();
    console.log(userChoice);
    console.log(computerChoice);
    console.log(determineWinner(userChoice,computerChoice))
  };
  playGame()