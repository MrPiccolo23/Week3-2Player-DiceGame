

let scores, roundScore, activePlayer, gamePlaying, lastDice;


init();

document.querySelector('.btn-roll').addEventListener('click', function() {
 
if (gamePlaying) {

    let dice = Math.floor(Math.random() * 6 + 1);
    let dice2 = Math.floor(Math.random() * 6 + 1);

  
    let diceDOM = document.querySelector('.dice');
    let diceDOM2 = document.querySelector('.dice2');
    
    diceDOM.style.display = 'block';
    diceDOM2.style.display = 'block';

    diceDOM.src = './images/dice-' + dice + '.png';
    diceDOM2.src = './images/dice-' + dice2 + '.png';

  
    if (dice !== 1 && dice2 !== 1) {
    
    roundScore += dice + dice2;
    
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
    
    } else {
    
    nextPlayer();
    }
    
    lastDice = dice;
}

});

document.querySelector('.btn-hold').addEventListener('click', function() {
  
if (gamePlaying) {
    
    scores[activePlayer] += roundScore;

    
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    
    let input = document.querySelector('.winningScore').value;
    let winningScore;
    
    if(input) {
    winningScore = input;
    } else {
    
    winningScore = 50;
    }

    
    if (scores[activePlayer] >= winningScore) {
    
    document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
    
    document.querySelector('.dice').style.display = 'none';
    
    document.querySelector('.dice2').style.display = 'none';
    
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    gamePlaying = false;
    } else {
    
    nextPlayer();
    }
}

});

function nextPlayer() {
activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

roundScore = 0;

document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.querySelector('.player-0-panel').classList.toggle('active');
document.querySelector('.player-1-panel').classList.toggle('active');

}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
document.querySelector('.winningScore').textContent = '';

scores = [0, 0];
roundScore = 0;
activePlayer = 0;
gamePlaying = true;


document.querySelector('.dice').style.display = 'none';
document.querySelector('.dice2').style.display = 'none';


document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.getElementById('name-0').textContent = 'Player 1';
document.getElementById('name-1').textContent = 'Player 2';


document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');

document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');

}
