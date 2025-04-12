function playRound(humanChoice, computerChoice) {
  const outcomes = {
    rock: { rock: "It's a tie!", paper: "You lose! Paper beats Rock.", scissors: "You win! Rock beats Scissors." },
    paper: { rock: "You win! Paper beats Rock.", paper: "It's a tie!", scissors: "You lose! Scissors beats Paper." },
    scissors: { rock: "You lose! Rock beats Scissors.", paper: "You win! Scissors beats Paper.", scissors: "It's a tie!" },
  };
  const result = outcomes[humanChoice][computerChoice];
  console.log(`You chose ${humanChoice}, computer chose ${computerChoice}. ${result}`);
  return result;
  }

  function getHumanChoice() {
    choice = prompt("Enter your choice (rock, paper, scissors):").toLowerCase();
    if(choice === "rock" || choice === "paper" || choice === "scissors") {
      return choice;
    }
    alert("Invalid choice, please select rock, paper, or scissors.");
    return getHumanChoice();
  }

  function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
  }

  const humanSelection = getHumanChoice();
  
  const computerSelection = getComputerChoice();
  console.log(getComputerChoice());
  playRound(humanSelection, computerSelection);
  