const correctAnswer = "stephan"; 


const form = document.querySelector("#guess form");
const input = document.getElementById("user-guess");
const feedback = document.getElementById("feedback");


form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const userGuess = input.value.trim();

    if (userGuess.toLowerCase() === correctAnswer.toLowerCase()) {
      feedback.textContent = "🎉 correct!";
      feedback.style.color = "limegreen";
    } else {
      feedback.textContent = "❌ try again!";
      feedback.style.color = "red";
    }

    input.value = ""; 
  });

