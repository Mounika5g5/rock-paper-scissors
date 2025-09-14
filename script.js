const options = document.querySelector(".rock-paper-scissors");
const humanBtn = document.querySelector("#human");
const computerBtn = document.querySelector("#computer");
const h1 = document.getElementById("delcareWinning");
const explain = document.getElementById("explanation");
const scoreHuman = document.getElementById("Hscores");
const scoreComputer = document.getElementById("Cscores");

let scores = { humanScore: 0, computerScore: 0 };

options.addEventListener("click", (e) => {
  if (e.target.id === "rock" || e.target.id === "paper" || e.target.id === "scissors") {
    const humanChoice = e.target.id;
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }
});

function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3);
  if (randomNum === 0) return "rock";
  if (randomNum === 1) return "paper";
  return "scissors";
}

function playRound(humanChoice, computerChoice) {

   if(humanChoice=="rock"){
        humanBtn.src ="images/rock.png";
    }else if(humanChoice==="paper"){
        humanBtn.src ="images/paper.png";
    }else{
        humanBtn.src ="images/scissors.png";
    }
  
  if(computerChoice=="rock"){
        computerBtn.src ="images/rock.png";
    }else if(computerChoice==="paper"){
        computerBtn.src ="images/paper.png";
    }else{
        computerBtn.src ="images/scissors.png";
    }


  if (humanChoice === computerChoice) {
    h1.textContent = "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    explain.textContent = `${humanChoice} beats ${computerChoice}`;
    scores.humanScore++;
    h1.textContent = "You Win!";
    scoreHuman.textContent = `Human Player: ${scores.humanScore}`;
  } else {
    explain.textContent = `${computerChoice} beats ${humanChoice}`;
    scores.computerScore++;
    h1.textContent = "You lose!";
    scoreComputer.textContent = `Computer Player: ${scores.computerScore}`;
  }

  if (scores.humanScore === 3) {
    showPopup("🎉 Congratulations, you won!");
  } else if (scores.computerScore === 3) {
    showPopup("😢 You lost! Better luck next time.");
  }
}

function resetGame() {
  scores.humanScore = 0;
  scores.computerScore = 0;
  humanBtn.src ="images/questionMark.jpeg";
  computerBtn.src="images/questionMark.jpeg"
  h1.textContent = "Choose your option";
  explain.textContent = "First to score 3 points wins the game";
  scoreHuman.textContent = "Human Player : 0";
  scoreComputer.textContent = "Computer Player : 0";
}

/* --- Popup Functions --- */
function showPopup(message) {
  document.getElementById("popup-message").textContent = message;
  document.getElementById("popup").style.display = "flex";
}

document.getElementById("popup-close").addEventListener("click", () => {
  document.getElementById("popup").style.display = "none";
  resetGame();
});




