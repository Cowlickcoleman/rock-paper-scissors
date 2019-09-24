const combatOptions = ['ROCK','PAPER','SCISSORS'];
        var computerScore = 0;
        var playerScore = 0;

        function playGame(numOfRounds){
            do {
                var playerPlay = getPlayerSelection();
                var computerPlay = getComputerSelection();
                var result = determineWinner(playerPlay,computerPlay);
                updateScore(result);
                // if (result !== 0) {
                //     numOfRounds--;
                // }
                alert(`Best of 5. The current score is Player: ${playerScore} vs. Computer ${computerScore}`);
            } while (playerScore < (numOfRounds/2) && computerScore < (numOfRounds/2));

            if (playerScore > computerScore) {
                alert('Congratulations! You win!')
            } else {
                alert('you lose.')
            };
            
            if (confirm("play again?")){
                clearScores()
                playGame(5)
            } else {
                alert("good game. see ya!")
            };
        };

    // --------------------------- FUNCTIONS -------------------
        // button interactivity



    
        // Generate a random computer selection
            function getComputerSelection (computerSelection) {
                var computerSelection = combatOptions[Math.floor(Math.random()*3)];
                return computerSelection;
            };

        // prompt the user for a selection
            function getPlayerSelection () {
                document.getElementById('rock').addEventListener("click",playerSelection="ROCK");
                document.getElementById('paper').addEventListener("click",playerSelection="PAPER");
                document.getElementById('scissors').addEventListener("click",playerSelection="SCISSORS");
            };  

            

                // **OLD CODE - Used for Prompt vs Button**
                // var playerSelection = prompt('Rock, Paper, or Scissors?',).toUpperCase();
                //     if(playerSelection === "ROCK" || playerSelection === "PAPER" || playerSelection === "SCISSORS") {
                //     return playerSelection;
                //     }  
                //     alert("yo, that's not an option... try again.");
                // getPlayerSelection();
        
        // compare the selections and determins a winner
            function determineWinner (playerSelection, computerSelection) {

                alert(`Player choose ${playerSelection} and the computer picked ${computerSelection}`);
                if (playerSelection===computerSelection) {
                    alert('it\'s a tie! No points awarded');
                    return 0;
                }
                if (
                    (playerSelection === "ROCK" && computerSelection === "SCISSORS")
                    ||
                    (playerSelection === "PAPER" && computerSelection === "ROCK")
                    ||
                    (playerSelection === "SCISSORS" && computerSelection === "PAPER"))
                    { alert ("Player wins the round!");
                    return 1;
                } else {
                    alert ("Computer wins the round!");
                    return 2;
                }
            };

        // attribute a score based upon the result
            function updateScore (result) {

                if(result === 0) {
                    playerScore += 0;
                    computerScore +=0;
                };
                if (result === 1) {
                    playerScore++;
                };
                if (result === 2) {
                    computerScore++;
                };
            };

        // clears the scores at the end of the game
            function clearScores() {
                playerScore = 0;
                computerScore = 0;
            };

        playGame(5);