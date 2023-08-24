// questions
const Quiz = [
  {
    question: "What does HTML stand for?",
    a: "Hyperlink and Text Markup Language",
    b: "Hyper Transfer Markup Language",
    c: "Hyper Text Markup Language",
    d: "High Tech Markup Language",
    correct_answer: "c",
  },
  {
    question:
      "Which programming language is often referred to as the 'mother of all languages'?",
    a: "C++",
    b: "Java",
    c: "Python",
    d: "Assembly",
    correct_answer: "d",
  },
  {
    question: "What does CSS stand for in web development?",
    a: "Computer Style Sheets",
    b: "Creative Style Sheets",
    c: "Cascading Style Sheets",
    d: "Colorful Style Sheets",
    correct_answer: "c",
  },
  {
    question:
      "Which data structure follows the Last In First Out (LIFO) principle?",
    a: "Queue",
    b: "Stack",
    c: "Linked List",
    d: "Tree",
    correct_answer: "b",
  },
  {
    question:
      "What is the process of finding errors and bugs in software called?",
    a: "Compilation",
    b: "Debugging",
    c: "Optimization",
    d: "Execution",
    correct_answer: "b",
  },
  {
    question: "In JavaScript, what is the purpose of the 'map' function?",
    a: "To iterate over an array and modify its elements",
    b: "To create a new array by applying a function to each element",
    c: "To remove elements from an array",
    d: "To sort the elements of an array",
    correct_answer: "b",
  },
  {
    question: "What is the result of 10 + '5' in JavaScript?",
    a: "15",
    b: "105",
    c: "15",
    d: "NaN",
    correct_answer: "b",
  },
  {
    question:
      "Which keyword is used to declare a variable in TypeScript with a fixed type?",
    a: "let",
    b: "var",
    c: "const",
    d: "type",
    correct_answer: "c",
  },
  {
    question: "In object-oriented programming, what is encapsulation?",
    a: "The process of converting code into machine language",
    b: "The process of hiding the internal implementation details of an object",
    c: "The process of optimizing code for better performance",
    d: "The process of writing comments for documentation",
    correct_answer: "b",
  },
  {
    question:
      "Which design pattern ensures a single instance of a class exists in a program?",
    a: "Singleton",
    b: "Factory",
    c: "Observer",
    d: "Adapter",
    correct_answer: "a",
  },
];

//html elelment
const questionEl = document.getElementById("question");
const a_labelEl = document.getElementById("a_label");
const b_labelEl = document.getElementById("b_label");
const c_labelEl = document.getElementById("c_label");
const d_labelEl = document.getElementById("d_label");

//quiz loading
current_quiz = 0;
score = 0;

function getQuizQue() {
  const quizItem = Quiz[current_quiz];

  console.log(quizItem.question);

  questionEl.innerHTML = quizItem.question;
  a_labelEl.innerHTML = quizItem.a;
  b_labelEl.innerHTML = quizItem.b;
  c_labelEl.innerHTML = quizItem.c;
  d_labelEl.innerHTML = quizItem.d;
  current_quiz++;
}

getQuizQue();

// setInterval(getQuizQue, 2000);
