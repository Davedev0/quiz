emailjs.init({
  publicKey: "b_gxtqaXvH1pM8y6w",
});

// Quiz Data
const quizData = {
  "Computer Science": [
    {
    question: "1. What is CPU?",
    options: [
      "Central Program Unit",
      "Computer Personal Unit",
      "Central Processing Unit",
      "Control Processing Unit"
    ],
    answer: "Central Processing Unit"
  },
  {
    question: "2. What does RAM stand for?",
    options: [
      "Read Access Memory",
      "Random Access Memory",
      "Read And Memory",
      "Random And Memory"
    ],
    answer: "Random Access Memory"
  },
  {
    question: "3. What is an algorithm?",
    options: [
      "A type of software",
      "A step-by-step procedure",
      "A programming language",
      "A hardware component"
    ],
    answer: "A step-by-step procedure"
  },
  {
    question: "4. What is a variable?",
    options: [
      "A fixed value",
      "A function",
      "A type of loop",
      "A storage location"
    ],
    answer: "A storage location"
  },
  {
    question: "5. What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Markup Language",
      "Hyperlink Text Markup Language",
      "Hyper Text Markup Link"
    ],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "6. What is a database?",
    options: [
      "A collection of data",
      "A type of software",
      "A programming language",
      "A hardware component"
    ],
    answer: "A collection of data"
  },
  {
    question: "7. What is an IP address?",
    options: [
      "Internet Personal address",
      "Internal Protocol address",
      "Internet Protocol address",
      "Internal Personal address"
    ],
    answer: "Internet Protocol address"
  },
  {
    question: "8. What is a compiler?",
    options: [
      "A type of hardware",
      "A hardware component",
      "A programming language",
      "A type of software"
    ],
    answer: "A type of software"
  },
  {
    question: "9. What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Cascading Style System",
      "Computer Style Sheets",
      "Creative Style Sheets"
    ],
    answer: "Cascading Style Sheets"
  },
  {
    question: "10. What is a loop?",
    options: [
      "A way to repeat software",
      "A type of variable",
      "A data structure",
      "A way to repeat code"
    ],
    answer: "A way to repeat code"
  },
  {
    question: "11. What is a function?",
    options: [
      "A programming language",
      "A type of variable",
      "A data structure",
      "A reusable block of code"
    ],
    answer: "A reusable block of code"
  },
  {
    question: "12. What is debugging?",
    options: [
      "Finding and fixing errors",
      "Writing code",
      "Compiling code",
      "Running a program"
    ],
    answer: "Finding and fixing errors"
  },
  {
    question: "13. What is an operating system?",
    options: [
      "Software and hardware",
      "A programming language",
      "A hardware component",
      "A data structure"
    ],
    answer: "Software and hardware"
  },
  {
    question: "14. What is a network?",
    options: [
      "A group of connected devices",
      "A type of software",
      "A programming language",
      "A hardware component"
    ],
    answer: "A group of connected devices"
  },
  {
    question: "15. What is cloud computing?",
    options: [
      "A hardware component",
      "A type of software",
      "A programming language",
      "A store data"
    ],
    answer: "A store data"
  }
],

"Mathematics": [
    {
      "question": "1. What is 2 + 2?",
      "options": [
        "2",
        "3",
        "4",
        "5"
      ],
      "answer": "4"
    },
    {
      "question": "2. What is 5 - 3?",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "answer": "2"
    },
    {
      "question": "3. What is 3 × 3?",
      "options": [
        "6",
        "7",
        "8",
        "9"
      ],
      "answer": "9"
    },
    {
      "question": "4. What is 10 ÷ 2?",
      "options": [
        "2",
        "4",
        "5",
        "6"
      ],
      "answer": "5"
    },
    {
      "question": "5. What is the square root of 16?",
      "options": [
        "2",
        "3",
        "4",
        "5"
      ],
      "answer": "4"
    },
    {
      "question": "6. What is the value of π (pi) approximately?",
      "options": [
        "2.14",
        "3.14",
        "3.41",
        "4.14"
      ],
      "answer": "3.14"
    },
    {
      "question": "7. What is 7 + 8?",
      "options": [
        "14",
        "15",
        "16",
        "17"
      ],
      "answer": "15"
    },
    {
      "question": "8. What is 12% of 200?",
      "options": [
        "20",
        "24",
        "30",
        "40"
      ],
      "answer": "24"
    },
    {
      "question": "9. What is the perimeter of a rectangle with length 5 and width 3?",
      "options": [
        "15",
        "16",
        "18",
        "20"
      ],
      "answer": "16"
    },
    {
      "question": "10. What is the area of a triangle with base 4 and height 3?",
      "options": [
        "6",
        "8",
        "10",
        "12"
      ],
      "answer": "6"
    },
    {
      "question": "11. What is 15% of 300?",
      "options": [
        "30",
        "40",
        "45",
        "50"
      ],
      "answer": "45"
    },
    {
      "question": "12. What is the next prime number after 5?",
      "options": [
        "6",
        "7",
        "8",
        "9"
      ],
      "answer": "7"
    },
    {
      "question": "13. What is the sum of angles in a triangle?",
      "options": [
        "90 degrees",
        "180 degrees",
        "360 degrees",
        "270 degrees"
      ],
      "answer": "180 degrees"
    },
    {
      "question": "14. What is 8 × 7?",
      "options": [
        "54",
        "56",
        "58",
        "60"
      ],
      "answer": "56"
    },
    {
      "question": "15. What is the value of 2^3?",
      "options": [
        "6",
        "7",
        "1",
        "8"
      ],
      "answer": "8"
    }
],
  "General Knowledge": [
    {
      question: "1. What is the capital of France?",
      options: [
        "Berlin", 
        "Madrid", 
        "Paris", 
        "Rome"
      ],
      answer: "Paris"
    },
    {
      question: "2. Who wrote 'Romeo and Juliet'?",
      options: [
        "Charles Dickens", 
        "William Shakespeare", 
        "Mark Twain", 
        "Jane Austen"
      ],
      answer: "William Shakespeare"
    },
    {
      question: "3. What is the largest planet in our solar system?",
      options: [
        "Earth", 
        "Mars", 
        "Jupiter", 
        "Saturn"
      ],
      answer: "Jupiter"
    },
    {
      question: "4. Who painted the Mona Lisa?",
      options: [
        "Vincent Van Gogh", 
        "Pablo Picasso", 
        "Leonardo da Vinci", 
        "Claude Monet"
      ],
      answer: "Leonardo da Vinci"
    },
    {
      question: "5. What is the currency of Japan?",
      options: [
        "Yen", 
        "Won", 
        "Dollar", 
        "Euro"
      ],
      answer: "Yen"
    },
    {
      question: "6. Who was the first person to walk on the moon?",
      options: [
        "Buzz Aldrin", 
        "Neil Armstrong", 
        "Yuri Gagarin", 
        "John Glenn"
      ],
      answer: "Neil Armstrong"
    },
    {
      question: "7. What is the capital of Italy?",
      options: [
        "Venice", 
        "Rome", 
        "Florence", 
        "Milan"
      ],
      answer: "Rome"
    },
    {
      question: "8. What is the smallest continent?",
      options: [
        "Asia", 
        "Australia", 
        "Europe", 
        "Antarctica"
      ],
      answer: "Australia"
    },
    {
      question: "9. Who discovered penicillin?",
      options: [
        "Marie Curie", 
        "Alexander Fleming", 
        "Louis Pasteur", 
        "Isaac Newton"
      ],
      answer: "Alexander Fleming"
    },
    {
      question: "10. What is the longest river in the world?",
      options: [
        "Amazon", 
        "Nile", 
        "Yangtze", 
        "Mississippi"
      ],
      answer: "Nile"
    },
    {
      question: "11. What is the main ingredient in guacamole?",
      options: [
        "Tomato", 
        "Avocado", 
        "Pepper", 
        "Onion"
      ],
      answer: "Avocado"
    },
    {
      question: "12. Who is known as the 'Father of Computers'?",
      options: [
        "Charles Babbage", 
        "Alan Turing", 
        "Bill Gates", 
        "Steve Jobs"
      ],
      answer: "Charles Babbage"
    },
    {
      question: "13. What is the hardest natural substance on Earth?",
      options: [
        "Gold", 
        "Iron", 
        "Diamond", 
        "Quartz"
      ],
      answer: "Diamond"
    },
    {
      question: "14. What is the capital of Australia?",
      options: [
        "Sydney", 
        "Canberra", 
        "Melbourne", 
        "Brisbane"
      ],
      answer: "Canberra"
    },
    {
      question: "15. What is the chemical symbol for gold?",
      options: [
        "Au", 
        "Ag", 
        "Pb", 
        "Fe"
      ],
      answer: "Au"
    }
  ]
};

let currentQuestion = 0;
let score = 0;
let userEmail = "";
let userName = "";
let selectedCategory = "";

const emailSection = document.getElementById("email-section");
const categorySection = document.getElementById("category-section");
const quizSection = document.getElementById("quiz");
const resultsSection = document.getElementById("results");
const emailInput = document.getElementById("email");
const nameInput = document.getElementById("name");
const startQuizButton = document.getElementById("start-quiz");
const nextQuestionButton = document.getElementById("next-question");
const submitButton = document.getElementById("submit");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");

// Start Quiz
startQuizButton.addEventListener("click", () => {
  const email = emailInput.value.trim();
  const name = nameInput.value.trim();
  if (email && email.includes("@gmail.com") && name) {
    userEmail = email;
    userName = name;
    emailSection.style.display = "none";
    categorySection.style.display = "block";
    alert("Successfully signed in.");
  } else {
    alert("Please enter a valid email and name.");
  }
});

// Category Selection
document.getElementById("computer-science").addEventListener("click", () => {
  selectedCategory = "Computer Science";
  startQuiz();
  alert("Get ready for 15 questions about computer science.");
});

document.getElementById("mathematics").addEventListener("click", () => {
  selectedCategory = "Mathematics";
  startQuiz();
  alert("Get ready for 15 questions about math.");
});

document.getElementById("general-knowledge").addEventListener("click", () => {
  selectedCategory = "General Knowledge";
  startQuiz();
  alert("Get ready for 15 questions about general knowledge.");
});

function startQuiz() {
  categorySection.style.display = "none";
  quizSection.style.display = "block";
  renderQuestion();
}

// Render Quiz Questions
function renderQuestion() {
  const question = quizData[selectedCategory][currentQuestion];
  questionElement.textContent = question.question;
  optionsElement.innerHTML = question.options.map(option => `
    <label class="option">
      <input type="radio" name="option" value="${option}">
      <span></span>
      ${option}
    </label>
  `).join("");

  if (currentQuestion === quizData[selectedCategory].length - 1) {
    nextQuestionButton.style.display = "none";
    submitButton.style.display = "block";
  } else {
    nextQuestionButton.style.display = "block";
    submitButton.style.display = "none";
  }
}

// Next Question
nextQuestionButton.addEventListener("click", () => {
  const selectedOption = document.querySelector('input[name="option"]:checked');
  if (selectedOption) {
    if (selectedOption.value === quizData[selectedCategory][currentQuestion].answer) {
      score++;
    }
    currentQuestion++;
    renderQuestion();
  } else {
    alert("Please select an option.");
  }
});

// Submit Quiz
submitButton.addEventListener("click", () => {
  const selectedOption = document.querySelector('input[name="option"]:checked');
  if (selectedOption) {
    if (selectedOption.value === quizData[selectedCategory][currentQuestion].answer) {
      score++;
    }
    quizSection.style.display = "none";
    resultsSection.style.display = "block";
    alert("Successfully submitted.");
    sendEmail();
  } else {
    alert("Please select an option.");
  }
});

// Send Email via EmailJS
function sendEmail() {
  const templateParams = {
    user_name: userName,
    user_email: userEmail,
    user_score: score,
    user_category: selectedCategory,
  };

  emailjs.send("service_nurznhb", "template_kkq3g91", templateParams)
    .then((response) => {
      console.log("Email sent successfully!", response.status, response.text);
    })
    .catch((error) => {
      console.error("Failed to send email:", error);
    });
}