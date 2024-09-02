function randomNumber(n) {
    // random integer between 0 and n-1
    return Math.floor(Math.random()*n);
}

function getComputerChoice() {
    const choicesArray= ["rock", "paper", "scissors"];
    return choicesArray[randomNumber(3)];
}

function getUserChoice() {
    return prompt("Which attack ?");
}

function playRound() {
    let ComputerChoice= getComputerChoice();
    let UserChoice= getUserChoice().toLowerCase();

    if (ComputerChoice == UserChoice) {
        console.log(`Draw ! You : ${UserChoice} --- Bot : ${ComputerChoice}`);
        return "D";
    } else if ((UserChoice == "rock" && ComputerChoice == "scissors") || 
    (UserChoice == "scissors" && ComputerChoice == "paper") || 
    (UserChoice == "paper" && ComputerChoice == "rock")){
        console.log(`Win ! You : ${UserChoice} --- Bot : ${ComputerChoice}`);
        return "W";
    } else {
        console.log(`Lose ! You : ${UserChoice} --- Bot : ${ComputerChoice}`);
        return "L";
    }
}

function playGame() {
    let ComputerScore= 0;
    let UserScore= 0;

    while((ComputerScore < 5) && (UserScore < 5)) {
        let result= playRound();
        if (result== "W") {
            UserScore+= 1;
        } else if (result== "L") {
            ComputerScore+= 1;
        }

        alert(`Score : You= ${UserScore} --- Bot= ${ComputerScore}`);
    }

    if (ComputerScore== 5) {
        return `Computer won the game ${ComputerScore} to ${UserScore}`;
    } else {
        return `You won the game ${ComputerScore} to ${UserScore}`;
    }
}