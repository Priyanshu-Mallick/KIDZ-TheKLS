let score = 0;
let life = 3;
function updateScore() {
  const scoreElement = document.getElementById('score');
  scoreElement.textContent = score;
}

function increaseScore() {
  score++;
  updateScore();
}
function updateLife() {
    const lifeElement = document.getElementById('life');
    lifeElement.textContent = life;
  }
function decreaseLife(){
    life--;
    updateLife();
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function displayRandomNumber() {
  const randomNumberElement = document.getElementById('randomNumber');
  const number = getRandomNumber(1, 100); // Change the range as needed
  randomNumberElement.textContent = number;
}

function checkNumber(choice) {
  const randomNumber = parseInt(document.getElementById('randomNumber').textContent);
  const isEven = randomNumber % 2 === 0;

  if ((choice === 'even' && isEven) || (choice === 'odd' && !isEven)) {
    // alert('Correct!');
    increaseScore();
  } else {
    // alert('Incorrect!');
    if(life == 0){
        alert("Game Over!");
        score = 0;
        life = 3;
        const sc = document.getElementById('score');
        const lf = document.getElementById('life');
        sc.textContent = score;
        lf.textContent = life
    }
    else{
        decreaseLife();
    }
  }

  displayRandomNumber();
}

// Display a random number when the page loads
displayRandomNumber();
