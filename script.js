var play = true;



function getComputerChoice(){
    let choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * (2-0)) + 0];
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

console.log(playerSelection());

