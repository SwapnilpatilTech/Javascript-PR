const questions = [
    { question: "What does 'DOM' stand for in JavaScript?", options: ["Document Object Model", "Data Object Management", "Display Oriented Model", "Document Orientation Mode"], answer: "Document Object Model" },
    { question: "Which keyword declares a constant in JavaScript?", options: ["let", "var", "const", "define"], answer: "const" },
    { question: "What is the output of 'typeof null'?", options: ["null", "object", "undefined", "number"], answer: "object" },
    { question: "Which company developed JavaScript?", options: ["Google", "Netscape", "Microsoft", "Oracle"], answer: "Netscape" },
    { question: "What method adds an element to the end of an array?", options: ["push()", "pop()", "shift()", "unshift()"], answer: "push()" },
    { question: "Which symbol is used for comments in JavaScript?", options: ["//", "<!-- -->", "#", "**"], answer: "//" },
    { question: "How do you define a function in JavaScript?", options: ["function = myFunc()", "def myFunc()", "function myFunc()", "func myFunc()"], answer: "function myFunc()" },
    { question: "Which of these is a JavaScript data type?", options: ["Float", "Boolean", "Decimal", "Character"], answer: "Boolean" },
    { question: "What is the correct syntax to call a function named 'myFunction'?", options: ["call myFunction()", "myFunction()", "Call.myFunction()", "run(myFunction)"], answer: "myFunction()" },
    { question: "Which operator is used to assign a value to a variable?", options: ["=", "==", "===", ":="], answer: "=" }
  ];

  let currentIndex = 0;
  let score = 0;
  let timer;
  let timeLeft = 60;

  function startQuiz() {
    showQuestion();
    startTimer();
  }

  function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
      timeLeft--;
      document.getElementById("time-left").textContent = timeLeft;
      if (timeLeft === 0) {
        nextQuestion();
      }
    }, 1000);
  }

  function showQuestion() {
    const question = questions[currentIndex];
    document.getElementById("question").textContent = question.question;
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";
    question.options.forEach(option => {
      const button = document.createElement("button");
      button.textContent = option;
      button.onclick = () => checkAnswer(option);
      optionsContainer.appendChild(button);
    });
  }

  function checkAnswer(selected) {
    const correctAnswer = questions[currentIndex].answer;
    const buttons = document.querySelectorAll("#options button");
    buttons.forEach(btn => btn.disabled = true);
    if (selected === correctAnswer) {
      score++;
    }
    document.getElementById("next-button").classList.remove("hidden");
    clearInterval(timer);
  }

  function nextQuestion() {
    currentIndex++;
    if (currentIndex < questions.length) {
      timeLeft = 60;
      document.getElementById("time-left").textContent = timeLeft;
      showQuestion();
      startTimer();
      document.getElementById("next-button").classList.add("hidden");
    } else {
      showResult();
    }
  }

  function showResult() {
    document.getElementById("result").style.display = "block";
    document.getElementById("score").textContent = score;
    document.getElementById("question").style.display = "none";
    document.getElementById("options").style.display = "none";
    document.getElementById("next-button").style.display = "none";
    document.getElementById("timer").style.display = "none";
    document.getElementById("restart-button").addEventListener("click", restartQuiz);
  }
  function restartQuiz() {
    currentIndex = 0;
    score = 0;
    timeLeft = 60;

    document.getElementById("result").style.display = "none";
    document.getElementById("question").style.display = "block";
    document.getElementById("options").style.display = "block";
    document.getElementById("next-button").style.display = "block";
    document.getElementById("timer").style.display = "block";

    startQuiz();
}
document.getElementById("restart-button").addEventListener("click", restartQuiz);

  

  startQuiz();