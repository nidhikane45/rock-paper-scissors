let score = JSON.parse(localStorage.getItem('score')) || {
            wins : 0,
            losses : 0,
            ties : 0
        }; 

updateScore();

function playGame(playersMove) {
    let res = '';
    const computerMove = pickComputerMove();

    if(playersMove === 'rock') {
        if(computerMove === 'rock')
            res = 'Tie!!!';
        else if(computerMove === 'paper')
            res = 'You lose!';
        else if(computerMove === 'scissors')
            res = 'You win!!';
        } else if(playersMove === 'paper') {
                if(computerMove === 'paper')
                    res = 'Tie!!!';
                else if(computerMove === 'scissors')
                    res = 'You lose!';
                else if(computerMove === 'rock')
                    res = 'You win!!';
            } else if(playersMove === 'scissors') {
                    if(computerMove === 'scissors')
                        res = 'Tie!!!';
                    else if(computerMove === 'rock')
                        res = 'You lose!';
                    else if(computerMove === 'paper')
                        res = 'You win!!';
                }

    if (res === 'You win!!')
        score.wins += 1;
    else if(res === 'You lose!')
        score.losses += 1;
    else if(res === 'Tie!!!')
        score.ties += 1;

    localStorage.setItem('score', JSON.stringify(score));
                
    updateScore();

    document.querySelector('.js-result').innerHTML = res;
    document.querySelector('.js-moves').innerHTML = `You <img src='images/${playersMove}-emoji.png' class="image">
            <img src='images/${playersMove}-emoji.png' class="image">  Comp`;
}

function updateScore() {
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
    let computerMove = '';
    const randomNo = Math.random();

    if(randomNo >= 0 && randomNo < 1/3) 
        computerMove = 'rock';
    else if(randomNo >= 1/3 && randomNo < 2/3)
        computerMove = 'paper';
    else if(randomNo >= 2/3 && randomNo < 1)
        computerMove = 'scissors';

    return computerMove;
}