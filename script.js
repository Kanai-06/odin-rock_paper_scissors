function randomNumber(n) {
    // random integer between 0 and n-1
    return Math.floor(Math.random()*n);
}

function getComputerChoice() {
    const choicesArray= ["rock", "paper", "scissors"];
    return choicesArray[randomNumber(3)];
}

function playRound(UserChoice) {
    let ComputerChoice = getComputerChoice();

    const user = document.querySelector(".user");
    const bot = document.querySelector(".bot");

    const UserImg = document.createElement("img");
    UserImg.src = `img/${UserChoice}.png`;

    const BotImg = document.createElement("img");
    BotImg.src = `img/${ComputerChoice}.png`;

    user.removeChild(document.querySelector(".user img"));
    bot.removeChild(document.querySelector(".bot img"));

    user.insertBefore(UserImg, document.querySelector(".user h2"));
    bot.insertBefore(BotImg, document.querySelector(".bot h2"));



    if (ComputerChoice == UserChoice) {
        return "D";
    } else if ((UserChoice == "rock" && ComputerChoice == "scissors") || 
    (UserChoice == "scissors" && ComputerChoice == "paper") || 
    (UserChoice == "paper" && ComputerChoice == "rock")){
        return "W";
    } else {
        return "L";
    }
}

function playGame() {
    let ComputerScore= 0;
    let UserScore= 0;

    const score = document.querySelector("#score-text");
    const UserCards = document.querySelector("#UserChoice");
    
    const user = document.querySelector(".user");
    const bot = document.querySelector(".bot");

    const UserImg = document.createElement("img");
    UserImg.src = "img/user.svg";

    const BotImg = document.createElement("img");
    BotImg.src = "img/bot.svg";

    user.removeChild(document.querySelector(".user img"));
    bot.removeChild(document.querySelector(".bot img"));

    user.insertBefore(UserImg, document.querySelector(".user h2"));
    bot.insertBefore(BotImg, document.querySelector(".bot h2"));

    user.classList.remove("winner");
    bot.classList.remove("winner");
    const message = document.querySelector("#message");

    score.textContent = `${UserScore} - ${ComputerScore}`; 
    message.textContent = ""; 
    
    let UserChoice;

    UserCards.addEventListener("click", handleRound);
    
    function handleRound(e){
        if(ComputerScore < 5 && UserScore < 5){
            UserChoice = e.target.closest('div').id;

            let result= playRound(UserChoice);
            if (result== "W") {
                UserScore+= 1;
            } else if (result== "L") {
                ComputerScore+= 1;
            }

            score.textContent = `${UserScore} - ${ComputerScore}`;           
        }

        if (ComputerScore== 5) {
            message.textContent = "You lost, CHEH !";
            bot.classList.add("winner");
            UserCards.removeEventListener("click", handleRound);
            
        } else if(UserScore== 5){
            message.textContent = "You win !";
            user.classList.add("winner");
            UserCards.removeEventListener("click", handleRound);
        }
    }
}

const button = document.querySelector("button");

button.addEventListener("click", () =>{
    playGame();
});