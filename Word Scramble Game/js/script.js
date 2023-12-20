const wordText = document.querySelector(".word"),
    hintText = document.querySelector(".hint span"),
    timeText = document.querySelector(".time b"),
    inputField = document.querySelector("input"),
    refreshBtn = document.querySelector(".refresh-word"),
    checkBtn = document.querySelector(".check-word"),
    scoreText = document.querySelector(".score b"),
    livesText = document.querySelector(".lives b");

let correctWord, timer, score = 0, lives = 3;

const initTimer = maxTime => {
    clearInterval(timer);
    timer = setInterval(() => {
        if (maxTime > 0) {
            maxTime--;
            return timeText.innerText = maxTime;
        }
        handleTimeout();
    }, 1000);
}

const handleTimeout = () => {
    lives--;
    livesText.innerText = lives;
    if (lives === 0) {
        alert(`Game Over! You ran out of lives. The correct word was ${correctWord.toUpperCase()}`);
        resetGame();
    } else {
        alert(`Time off! ${correctWord.toUpperCase()} was the correct word`);
        initGame();
    }
}

const initGame = () => {
    initTimer(30);
    let randomObj = words[Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.word.split("");
    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    wordText.innerText = wordArray.join("");
    hintText.innerText = randomObj.hint;
    correctWord = randomObj.word.toLowerCase();
    inputField.value = "";
    inputField.setAttribute("maxlength", correctWord.length);
}

const checkWord = () => {
    let userWord = inputField.value.toLowerCase();
    if (!userWord) return alert("Please enter the word to check!");
    if (userWord === correctWord) {
        score++;
        scoreText.innerText = score;
        alert(`Congrats! ${correctWord.toUpperCase()} is the correct word`);
        initGame();
    } else {
        alert(`Oops! ${userWord} is not a correct word`);
        handleIncorrectAttempt();
    }
}

const handleIncorrectAttempt = () => {
    lives--;
    livesText.innerText = lives;
    if (lives === 0) {
        alert(`Game Over! You ran out of lives. The correct word was ${correctWord.toUpperCase()}`);
        resetGame();
    }
}

const resetGame = () => {
    score = 0;
    lives = 3;
    scoreText.innerText = score;
    livesText.innerText = lives;
    initGame();
}

refreshBtn.addEventListener("click", resetGame);
checkBtn.addEventListener("click", checkWord);

// Initialize the game on page load
initGame();
