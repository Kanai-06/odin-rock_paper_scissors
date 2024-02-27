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
                    return `Draw ! You : ${UserChoice} | Bot : ${ComputerChoice}.`;
                case ("scissors"):
                    return `Win ! You : ${UserChoice} | Bot : ${ComputerChoice}.`;
                case ("paper"):
                    return `Lose ! You : ${UserChoice} | Bot : ${ComputerChoice}.`;
            };
            break;
        case ("scissors"):
            switch(ComputerChoice) {
                case ("rock"):
                    return `Lose ! You : ${UserChoice} | Bot : ${ComputerChoice}.`;
                case ("scissors"):
                    return `Draw ! You : ${UserChoice} | Bot : ${ComputerChoice}.`;
                case ("paper"):
                    return `Win ! You : ${UserChoice} | Bot : ${ComputerChoice}.`;
                    };
            break;
        case ("paper"):
            switch(ComputerChoice) {
                case ("rock"):
                    return `Win ! You : ${UserChoice} | Bot : ${ComputerChoice}.`;
                case ("scissors"):
                    return `Lose ! You : ${UserChoice} | Bot : ${ComputerChoice}.`;
                case ("paper"):
                    return `Draw ! You : ${UserChoice} | Bot : ${ComputerChoice}.`;
            };
            break; 
    }
}