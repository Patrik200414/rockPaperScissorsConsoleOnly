var play = true;



function getComputerChoice(){
    let choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * (2-0)) + 0];
}

