const database = [
    { name: "Apple", image: "apple.jpg" },
    { name: "Banana", image: "banana.jpg" },
    { name: "Tiger", image: "tiger.jpg" },
    { name: "Lion", image: "lion.jpg" },
    { name: "pomegranate", image: "pomegranate.jpg" },
    { name: "Bag", image: "bag.jpg" },
    { name: "orange", image: "orange.jpg" },
    { name: "Eagle", image: "eagle.jpg" },
    { name: "Potato", image: "Potato-800x800.jpg" },
    { name: "tomato", image: "Tomato_je.jpg" },
    // Add more items as needed
  ];
  
  let currentRound = 1;
  let currentScore = 0;
  
  
  
  function showRandomImage() {
    const randomIndex = Math.floor(Math.random() * database.length);
    const currentImage = database[randomIndex];
  
    document.getElementById("image").src = currentImage.image;
    document.getElementById("message").innerText = "";
    document.getElementById("round").innerText = `Round: ${currentRound}`;
  }
  

  
  function getCurrentImage() {
    const currentImageSrc = document.getElementById("image").src;
    const currentImage = database.find(item => item.image === currentImageSrc.substring(currentImageSrc.lastIndexOf('/') + 1));
    return currentImage;
  }
  // ... (your existing code)

// function startGame() {
//     currentRound = 1;
//     currentScore = 0;
//     document.getElementById("score").innerText = `Score: ${currentScore}`;
//     showRandomImage();
//   }
  // ... (your existing code)

function startGame() {
    currentRound = 1;
    currentScore = 0;
    document.getElementById("score").innerText = `Score: ${currentScore}`;
    document.getElementById("guess").value = ""; // Reset the guess field
    showRandomImage();
  }
  
  // ... (your existing code)

// ... (your existing code)

function checkGuess() {
  const userGuess = document.getElementById("guess").value.toLowerCase().trim();
  const currentImage = getCurrentImage();

  if (userGuess === currentImage.name.toLowerCase()) {
    currentScore++;
    document.getElementById("score").innerText = `Score: ${currentScore}`;
    document.getElementById("message").innerText = "Correct!";
  } else {
    const errorMsg = `Oops! The correct word is "${currentImage.name}". Try again!`;
    alert(errorMsg);

    // Update the round and show a new random image
    currentRound++;
    showRandomImage();
    
    // Reset the guess field
    document.getElementById("guess").value = "";

    return; // Stop the function here to prevent advancing to the next round immediately
  }

  document.getElementById("guess").value = ""; // Reset the guess field

  if (currentRound < 5) {
    currentRound++;
    showRandomImage();
  } else {
    document.getElementById("message").innerText = `Game Over! Your final score is ${currentScore}.`;
  }
}

// ... (the rest of your existing code)

  // Initial game start
  startGame();
  