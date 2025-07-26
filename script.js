let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const user_score = document.querySelector("#user-score");
const comp_score = document.querySelector("#comp-score");

let msg = document.querySelector(".message");

let pbc = document.querySelector(".printBotChoice");

let msgContainer = document.querySelector("#msgContainer");

const drawGame = () => {
    //console.log("draw");
    msg.innerText = "Game is draw! play your next move";
    msg.style.backgroundColor = "#020205";
    msg.style.transition = "1s";
}

const showWinner = (userWin, userChoice, compChoice) => {

    pbc.innerText = `BOT choose ${compChoice}! Play next move`;

    if(userWin) {
        //console.log("user is the winner");
        userScore++;
        user_score.innerText = userScore;
        msg.innerText = `You Won! Your ${userChoice} beat Bot's ${compChoice}. Play your next move`;
        msg.style.backgroundColor = "#008106";
        user_score.style.animation = "none";
        void user_score.offsetWidth;
        user_score.style.animation = "blink 0.5s linear";
    }
    else {
        //console.log("user loss");
        compScore++;
        comp_score.innerText = compScore;
        msg.innerText = `You Loss! Bot's ${compChoice} beats your ${userChoice}. Play your ext move`;
        msg.style.backgroundColor = "#d20205";
        msg.style.transition = "1s";
        comp_score.style.animation = "none";
        void comp_score.offsetWidth;
        comp_score.style.animation = "blink 0.5s linear";
    }
}

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    let idx = Math.floor(Math.random() *3);
    return(options[idx]);
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    //console.log("user choice = ", userChoice);
    //console.log("comp choice = ", compChoice);
   // Generate computer choice

   if(compChoice == "rock") {
        pbc.style.backgroundColor = "#ef88bd";
        pbc.style.color = "#3a0519";
        pbc.style.transition = "1s";
   }

   else if(compChoice == "paper"){
        pbc.style.backgroundColor = "#964e9fff";
        pbc.style.color = "#faeb92";
        pbc.style.transition = "1s";
   }

   else {
        pbc.style.backgroundColor = "#52acffff";
        pbc.style.color = "#fffbde";
        pbc.style.transition = "1s";
   }

   if(userChoice === compChoice) {
    drawGame();
    
    pbc.innerText = `BOT choose ${compChoice}! Play next move`;
   
    }

   else{
    let userWin = true;
    if(userChoice === "rock") {
        userWin = compChoice === "paper" ? false : true;
    }
    else if(userChoice === "paper") {
        userWin = compChoice === "scissors" ? false : true;
    }
    else {
        userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
   }
};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

const styleSheet = document.createElement("style");
        styleSheet.type = "text/css";
        styleSheet.innerText = `
            @keyframes blink {
            0%   { opacity: 0; }
            50%  { opacity: 0; }
            100% { opacity: 1; }
        }`;
        document.head.appendChild(styleSheet);

choices.forEach((button) => {
    button.addEventListener("click", () => {
        msgContainer.style.animation = "none";
        void msgContainer.offsetWidth;
        msgContainer.style.animation = "blink 0.5s linear";
    });
});