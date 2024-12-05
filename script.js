function playGame() {
    // Get player choices
    const player1Choice = document.getElementById("player1").value;
    const player2Choice = document.getElementById("player2").value;
  
    // Computer's random choice
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
  
    // Display computer's choice
    document.getElementById("computer-choice").textContent = `Computer chose: ${computerChoice}`;
  
    // Determine winner
    let result = '';
    
    if (player1Choice === player2Choice) {
      result = "It's a tie!";
    } else if (player1Choice === computerChoice && player2Choice === computerChoice) {
      result = "Both players and the computer tied!";
    } else {
      if (player1Choice === "rock" && player2Choice === "scissors" ||
          player1Choice === "paper" && player2Choice === "rock" ||
          player1Choice === "scissors" && player2Choice === "paper") {
        result = "Player 1 wins!";
      } else if (player2Choice === "rock" && player1Choice === "scissors" ||
                 player2Choice === "paper" && player1Choice === "rock" ||
                 player2Choice === "scissors" && player1Choice === "paper") {
        result = "Player 2 wins!";
      } else {
        result = "Computer wins!";
      }
    }
    
    document.getElementById("result").textContent = result;
  }