// let score = 0;
// let life = 3;

// function resetAll(){
//   score = 0;
//   life = 3;
//   const sc = document.getElementById('score');
//   sc.textContent = score;
//   const heart = document.querySelectorAll(".heartcontainer img");
//   heart[0].computedStyleMap.display = 'block';
//   heart[1].computedStyleMap.display = 'block';
//   heart[2].computedStyleMap.display = 'block';
// }

// function updateScore() {
//   const scoreElement = document.getElementById('score');
//   scoreElement.textContent = score;
// }

// function increaseScore() {
//   score++;
//   updateScore();
// }
// function updateLife() {
//   const heart = document.querySelectorAll(".heartcontainer img");
//   heart[life-1].computedStyleMap.display = 'none';
// }
// function decreaseLife() {
//   life--;
//   updateLife();
// }

// function getRandomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function displayRandomNumber() {
//   const randomNumberElement = document.getElementById('randomNumber');
//   const number = getRandomNumber(1, 100); // Change the range as needed
//   randomNumberElement.textContent = number;
// }

// function checkPrime(n) {
//   if (n <= 1) {
//     return false;
//   }

//   if (n <= 3) {
//     return true;
//   }

//   if (n % 2 === 0 || n % 3 === 0) {
//     return false;
//   }

//   let i = 5;
//   while (i * i <= n) {
//     if (n % i === 0 || n % (i + 2) === 0) {
//       return false;
//     }
//     i += 6;
//   }

//   return true;
// }

// function checkNumber(choice) {
//   const randomNumber = parseInt(document.getElementById('randomNumber').textContent);
//   const isPrime = checkPrime(randomNumber);

//   if ((choice === 'yes' && isPrime) || (choice === 'no' && !isPrime)) {
//     // alert('Correct!');
//     increaseScore();
//   } else {
//     // alert('Incorrect!');
//     if (life === 1) {
//       alert("Game Over!");
//       resetAll();
//     }
//     else {
//       decreaseLife();
//     }
//   }

//   displayRandomNumber();
// }

// // Display a random number when the page loads
// displayRandomNumber();


let score = 0;
let life = 3;

function resetAll(){
  score = 0;
  life = 3;
  const sc = document.getElementById('score');

  sc.textContent = score;

  const images = document.querySelectorAll('.heartcontainer img');
  images[0].style.display = 'block';
  images[1].style.display = 'block';
  images[2].style.display = 'block';
}
function updateScore() {
  const scoreElement = document.getElementById('score');
  scoreElement.textContent = score;
}

function increaseScore() {
  score++;
  updateScore();
}
function updateLife() {
    const images = document.querySelectorAll('.heartcontainer img');
    images[life].style.display = 'none';
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
    increaseScore();
  } else {
    if(life == 1){
      decreaseLife();
      alert("Game Over!");
      resetAll();
    }
    else{
        decreaseLife();
    }
  }

  displayRandomNumber();
}

// Display a random number when the page loads
displayRandomNumber();
