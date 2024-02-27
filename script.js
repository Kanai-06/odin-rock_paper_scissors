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
    let ComputerChoice= getComputerChoice()
    let UserChoice= getUserChoice().toLowerCase()

    switch(UserChoice) {
        case ("rock"):
            switch(ComputerChoice) {
                case ("rock"):
                    console.log(`Draw ! You : ${UserChoice} --- Bot : ${ComputerChoice}`);
                    return "D";
                case ("scissors"):
                    console.log(`Win ! You : ${UserChoice} --- Bot : ${ComputerChoice}`);
                    return "W";
                case ("paper"):
                    console.log(`Lose ! You : ${UserChoice} --- Bot : ${ComputerChoice}`);
                    return "L";
            };
            break;
        case ("scissors"):
            switch(ComputerChoice) {
                case ("rock"):
                    console.log(`Lose ! You : ${UserChoice} --- Bot : ${ComputerChoice}`);
                    return "L";
                case ("scissors"):
                    console.log(`Draw ! You : ${UserChoice} --- Bot : ${ComputerChoice}`);
                    return "D";
                case ("paper"):
                    console.log(`Win ! You : ${UserChoice} --- Bot : ${ComputerChoice}`);
                    return "W";
                    };
            break;
        case ("paper"):
            switch(ComputerChoice) {
                case ("rock"):
                    console.log(`Win ! You : ${UserChoice} --- Bot : ${ComputerChoice}`);
                    return "W";
                case ("scissors"):
                    console.log(`Lose ! You : ${UserChoice} --- Bot : ${ComputerChoice}`);
                    return "L";
                case ("paper"):
                    console.log(`Draw ! Your pick: ${UserChoice} --- Bot's pick: ${ComputerChoice}`);
                    return "D";
            };
            break; 
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

        alert(`Score : You= ${UserScore} --- Bot= ${ComputerScore}`)
    }

    if (ComputerScore== 5) {
        return `Computer won the game ${ComputerScore} to ${UserScore}`
    } else {
        return `You won the game ${ComputerScore} to ${UserScore}`
    }
}