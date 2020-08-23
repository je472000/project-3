var pos = 0, // page counter
  test,
  test_status,
  question,
  choice,
  choices,
  chA, // choice a
  chB, // choice b
  chC, // choice c
  correct = 0;

//  create a questions array, this array contains json objects to build up the questionnairre.
var questions = [
  {
    question: "Which of the following is correct about features of JavaScript?",
    a: "JavaScript is is complementary to and integrated with HTML.",
    b: "JavaScript is open and cross-platform.",
    c: "Both of the above.",
    answer: "C",
  },
  {
    question:
      "Which of the following type of variable is visible everywhere in your JavaScript code?",
    a: "global variable",
    b: "local variable",
    c: "Both of the above.",
    answer: "A",
  },
  {
    question:
      "Which built-in method returns the index within the calling String object of the first occurrence of the specified value?",
    a: "getIndex()",
    b: "location()",
    c: "indexOf()",
    answer: "C",
  },
  {
    question:
      "Which of the following function of Number object forces a number to display in exponential notation?",
    a: "toExponential()",
    b: "toFixed()",
    c: "toPrecision()",
    answer: "A",
  },
];