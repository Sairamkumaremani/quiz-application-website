const quizData = [
    {
      question: "What is the worst case run-time complexity of binary search algorithm?",
      choices: ["O(n^2)", "O(nlogn)", "O(n^3)", "O(n)"],
      correctAnswer: "O(n)",
      selectedAnswer: null
    },
    {
      question: "If the array is already sorted, which of these algorithms will exhibit the best performance?",
      choices: ["Merge Sort", "Insertion Sort", "Quick Sort", "Heap Sort"],
      correctAnswer: "Insertion Sort",
      selectedAnswer: null
    },
    {
      question: "How many swaps are required to sort the given array using bubble sort - { 2, 5, 1, 3, 4}?",
      choices: ["4", "5", "7", "6"],
      correctAnswer: "4",
      selectedAnswer: null
    },
    {
        question: "Which of the following is not a stable sorting algorithm in its typical implementation?",
        choices: ["Insertion sort", "Merge Sort", "Quick Sort", "Bubble Sort"],
        correctAnswer: "Quick Sort",
        selectedAnswer: null
    },
    {
        question: "Consider a situation where swap operation is very costly. Which of the following sorting algorithms should be preferred so that the number of swap operations are minimized in general?",
        choices: ["Insertion sort", "Merge Sort", "Heap Sort", "Selection Sort"],
        correctAnswer: "Selection Sort",
        selectedAnswer: null
    },

  ];
  
  const questionElement = document.getElementById('question');
  const choicesElement = document.getElementById('choices');
  const submitButton = document.getElementById('submit');
  const resultElement = document.getElementById('result');
  
  let currentQuestion = 0;
  let score = 0;
  
  function loadQuestion() {
    const currentQuiz = quizData[currentQuestion];
    const current = currentQuestion+1;
    questionElement.innerHTML = current+". "+currentQuiz.question;
    choicesElement.innerHTML = '';
  
    for (let i = 0; i < currentQuiz.choices.length; i++) {
      const choice = currentQuiz.choices[i];
      const button = document.createElement('button');
      button.innerHTML = choice;
      button.addEventListener('click', selectAnswer.bind(null, i));
      choicesElement.appendChild(button);
    }
  }
  
  function selectAnswer(choiceIndex) {
    const currentQuiz = quizData[currentQuestion];
    currentQuiz.selectedAnswer = currentQuiz.choices[choiceIndex];
  
    const buttons = choicesElement.getElementsByTagName('button');
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
  
    if (currentQuiz.selectedAnswer === currentQuiz.correctAnswer) {
      score++;
      buttons[choiceIndex].classList.add('correct');
    } else {
      buttons[choiceIndex].classList.add('wrong');
    }
  
    submitButton.disabled = false;
  }
  
  function nextQuestion() {
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      loadQuestion();
      submitButton.disabled = true;
    } else {
      showResult();
    }
  }
  
  function showResult() {
    questionElement.style.display = 'none';
    choicesElement.style.display = 'none';
    submitButton.style.display = 'none';
    resultElement.innerHTML = `Your score: ${score} out of ${quizData.length}`;
    resultElement.style.display = 'block';
  }
  
  submitButton.addEventListener('click', nextQuestion);
  
  loadQuestion();
  