let playerScore = 0;
let computerScore = 0;

const options = document.querySelectorAll('.option');
const message = document.querySelector('#message');
const roundResult = document.querySelector('#round-result');
const playerScoreElement = document.getElementById('player-score');
const computerScoreElement = document.getElementById('computer-score');
const resetBtn = document.getElementById('reset-btn');

const generateComputerChoice = () => {  
   const choices = ['stone', 'paper', 'scissor'];
   const randomIndex = Math.floor(Math.random() * choices.length);
   return   choices[randomIndex];
};

const drawGame = (playerChoice,computerChoice) => {
    message.innerText = "Its a draw!";
    message.style.backgroundColor = "#6e6b6bff";
    roundResult.innerText = `You both chose ${playerChoice}.`;
};

const showWinner = (playerWins,playerChoice,computerChoice) => {
    if(playerWins) {
        playerScore++;
        playerScoreElement.innerText = playerScore;
        message.innerText = `You win this round!`;
        message.style.backgroundColor = "#4CAF50";
        roundResult.innerText = `${playerChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        computerScoreElement.innerText = computerScore;
        message.innerText = `Computer wins this round!`;
        message.style.backgroundColor = "#f44336";
        roundResult.innerText = `${computerChoice} beats ${playerChoice}.`;
    }
    checkGameOver();
};

const playGame = (playerChoice) => {
if(playerScore >= 5 || computerScore >= 5) return;//block if game is over

    const computerChoice = generateComputerChoice();

    if(playerChoice === computerChoice) {
        drawGame(playerChoice,computerChoice);
    }else {
        let playerWins = true;
        if(playerChoice ===  'stone'){
            playerWins = computerChoice === "paper"? false : true;
        } else if(playerChoice === 'paper'){
            playerWins = computerChoice === "scissor"? false : true;
        }else {
            playerWins = computerChoice === "stone"? false : true;
        }
        showWinner(playerWins,playerChoice,computerChoice);
    }
};

const checkGameOver = () =>{
    if(playerScore === 5){
        message.innerText = "Congratulations! You won the game!";
        disableChoices();
    }else if(computerScore === 5){
        message.innerText = "Computer won the game! Better luck next time.";
        disableChoices();
    }
};

const disableChoices = () => {
    options.forEach(opt => opt.style.pointerEvents = 'none');
};

const enableChoices = () => {
    options.forEach(opt => opt.style.pointerEvents = 'auto')
};


const resetGame = () => {
    playerScore = 0;
    computerScore = 0;
    playerScoreElement.innerText = '0';
    computerScoreElement.innerText = '0';
    message.innerText = "Make your move!";
    message.style.backgroundColor = '#2d2d2d';
    roundResult.innerText = '';
    enableChoices();
}

options.forEach((option)=> {
    option.addEventListener("click",()=>{
        const playerChoice = option.getAttribute("id");
        playGame(playerChoice);
    })
})

resetBtn.addEventListener('click', resetGame);