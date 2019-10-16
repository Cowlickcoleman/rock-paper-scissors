// link DOM elements to js logic

var btnRock = document.querySelector('#rock');
var btnPaper = document.querySelector('#paper');
var btnScissors = document.querySelector('#scissors');
var scoreDialogue = document.querySelector('#scoreDialogue');
var playerScoreBoard = document.querySelector('#playerScoreBoard');
var computerScoreBoard = document.querySelector('#computerScoreBoard');
var scoreAnnouncement= document.querySelector('#scoreAnnouncement');


// setup the game
playerScoreBoard.textContent='0';
computerScoreBoard.textContent='0';
scoreDialogue.textContent='The original dispute settler. Choose an option to begin!';
const combatOptions = ['ROCK','PAPER','SCISSORS'];

var computerScore = 0;
var playerScore = 0;
var numOfRounds = 5;
var currentRound = 0;

        

// determine length of Game
function lengthOfGame() {
    if (playerScore > (numOfRounds/2)){
            scoreDialogue.textContent='Congratulations!';
            scoreAnnouncement.textContent='Winner!';
            clearScores();
        } else if (computerScore > (numOfRounds/2)){
            scoreDialogue.textContent=':(';
            scoreAnnouncement.textContent='Loser!';
            clearScores();
        } else {
        };
};

// increase score upon completion of each round
function updateScoreBoards() {
    playerScoreBoard.textContent=`${playerScore}`;
    computerScoreBoard.textContent=`${computerScore}`;
};

// reset game upon completion
function clearScores() {
    playerScore = 0;
    computerScore = 0;
};

function clearAnnouncement() {
    scoreAnnouncement.textContent='';
};


// button functionality
btnRock.addEventListener("click",function(){
    clearAnnouncement();
    var playerPlay = 'ROCK';
    var computerPlay = getComputerSelection();
    var result = determineWinner(playerPlay,computerPlay);
    updateImages();
    updateScore(result);
    updateScoreBoards();
    lengthOfGame();
});

btnPaper.addEventListener("click",function(){
    clearAnnouncement();
    var playerPlay = 'PAPER';
    var computerPlay = getComputerSelection();
    var result = determineWinner(playerPlay,computerPlay);
    updateImages();
    updateScore(result);
    updateScoreBoards();
    lengthOfGame();
});

btnScissors.addEventListener("click",function(){
    clearAnnouncement();
    var playerPlay = 'SCISSORS';
    var computerPlay = getComputerSelection();
    var result = determineWinner(playerPlay,computerPlay);
    updateImages();
    updateScore(result);
    updateScoreBoards();
    lengthOfGame();
});  

// attribute a score based upon the result in the case of a tie or win
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

// generate a random computer selection
function getComputerSelection (computerSelection) {
    var computerSelection = combatOptions[Math.floor(Math.random()*3)];
    return computerSelection;
};

// compare the computer and player selections and determine a winner
function determineWinner (playerSelection, computerSelection) {
    scoreDialogue.textContent= `Player chose ${playerSelection} and the computer picked ${computerSelection}`;
    if (playerSelection===computerSelection) {
        scoreDialogue.textContent= 'it\'s a tie! No points awarded';
        return 0;
    }
    if (
        (playerSelection === "ROCK" && computerSelection === "SCISSORS")
        ||
        (playerSelection === "PAPER" && computerSelection === "ROCK")
        ||
        (playerSelection === "SCISSORS" && computerSelection === "PAPER")) {
        return 1;
    } else {
        return 2;
    };
};


function updateImages(playerSelection) {
    var playerImg = document.createElement('img');
    playerImg.src='./media/rps_logo.png';
    var src = document.getElementById('playerImg');
    src.appendChild(playerImg);

    if(playerSelection==='ROCK') {
        playerImg.setAttribute("id","img-rock")
    } else if (playerSelection==='PAPER') {
        playerImg.setAttribute("id","img-paper")
    } else if (playerSelection==='SCISSORS') {
        playerImg.setAttribute("id","img-scissors")
    };
};
