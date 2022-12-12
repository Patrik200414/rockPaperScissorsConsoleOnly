var playStart = true;
console.log(play(getComputerChoice(), playerSelection()));



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

function play(getComputerChoice, playerSelection){
    let computer = getComputerChoice;
    let player = playerSelection;
    if(player === 'Rock' && computer === 'Scissors'){
        console.log(`You Won!
                    You: ${player}
                    Computer: ${computer}`);
    }
    else if(player === 'Paper' && computer === 'Rock'){
        console.log(`You Won!
                    You: ${player}
                    Computer: ${computer}`);
    }
    else if(player === 'Scissors' && computer === 'Paper'){
        console.log(`You Won!
                    You: ${player}
                    Computer: ${computer}`);
    }
    else if(player === 'Scissors' && computer === 'Rock'){
        console.log(`You Lost!
                    You: ${player}
                    Computer: ${computer}`);
    }
    else if(player === 'Rock' && computer === 'Paper'){
        console.log(`You Lost!
                    You: ${player}
                    Computer: ${computer}`);
    }
    else if(player === 'Paper' && computer === 'Scissors'){
        console.log(`You Lost!
                    You: ${player}
                    Computer: ${computer}`);
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



