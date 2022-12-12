var playStart = true;
var totalScoreP = 0;
var totalScoreC = 0;
play();


function play(){
    do{
        let scoreP = 0;
        let scoreC = 0;
        for(let i = 0;i<5;i++){
            let decide = decession(getComputerChoice(), playerSelection());
            if(decide === 1){
                scoreP++;
            }
            else if(decide === 0){
                scoreC++;
            }
        }
        console.log(`You: ${scoreP}\nComputer: ${scoreC}`);
        totalScoreP += scoreP;
        totalScoreC += scoreC;
        if(confirm('Do you want to play another round?')){
            playStart = true;
            scoreC = 0;
            scoreP = 0;
        }
        else{
            console.log(`The total score:\nYou: ${totalScoreP}\nComputer: ${totalScoreC}`);
            playStart = false;
        }
    }while(playStart !== false)
}
function getComputerChoice(){
    let choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * (3-0)) + 0];
}

function playerSelection(){
    let playerChoice = prompt('Please enter your choice! (Rock, paper, scissors)');
    let rock = /Rock/ig;
    let paper = /Paper/ig;
    let scissors = /scissors/ig;
    
    if(rock.test(playerChoice)){
        return 'Rock';
    }
    else if(paper.test(playerChoice)){
        return 'Paper';
    }
    else if(scissors.test(playerChoice)){
        return 'Scissors';
    }
    else{
        return null;
    }
}

function decession(getComputerChoice, playerSelection){
    let computer = getComputerChoice;
    let player = playerSelection;
    let scoreP = 0;
    let scoreC = 0;
    if(player === 'Rock' && computer === 'Scissors'){
        scoreP++;
        console.log(`You Won!
                    You: ${player}
                    Computer: ${computer}`);
        return 1;
    }
    else if(player === 'Paper' && computer === 'Rock'){
        scoreP++;
        console.log(`You Won!
                    You: ${player}
                    Computer: ${computer}`);
        return 1;
    }
    else if(player === 'Scissors' && computer === 'Paper'){
        scoreP++;
        console.log(`You Won!
                    You: ${player}
                    Computer: ${computer}`);
        return 1;
    }
    else if(player === 'Scissors' && computer === 'Rock'){
        scoreC++;
        console.log(`You Lost!
                    You: ${player}
                    Computer: ${computer}`);
        return 0;
    }
    else if(player === 'Rock' && computer === 'Paper'){
        scoreC++;
        console.log(`You Lost!
                    You: ${player}
                    Computer: ${computer}`);
        return 0;
    }
    else if(player === 'Paper' && computer === 'Scissors'){
        scoreC++;
        console.log(`You Lost!
                    You: ${player}
                    Computer: ${computer}`);
        return 0;
    }
    else if(player === null){
        console.log('Unvaled parameter!');
    }
    else{
        console.log(`You tied
                    You: ${player}
                    Computer: ${computer}`);
    }
}