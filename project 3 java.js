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
// this is a get elementbyid helper
function get(x) {
    return document.getElementById(x);
  }
  
  function startTimer() {
    var countDownDate = moment(new Date()).add(10, "m").toDate();
    var x = setInterval(function () {
      var now = new Date().getTime();
      var distance = countDownDate - now;
  
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      document.getElementById("timer").innerHTML =
        "Time remaining: " + minutes + "m " + seconds + "s ";
  
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "EXPIRED";
      }
    }, 1000);
  }
  function renderQuestion() {
    test = get("test");
    // if all questions have been answered
    if (pos >= questions.length) {
      test.innerHTML =
        "<h2 id='testScore'>You got " +
        correct +
        " of " +
        questions.length +
        " questions correct for a score of: " +
        (correct / questions.length) * 100 +
        "</h2><p style='display: none' id='rawScore'>" +
        (correct / questions.length) * 100 +
        "</p>";
      get("test_status").innerHTML = "Test completed";
  
      pos = 0;
      correct = 0;
      var saveContainer = get("save");
      saveContainer.classList.add("showMe");
      return false;
    }
    get("test_status").innerHTML =
      "Question " + (pos + 1) + " of " + questions.length;
  
    question = questions[pos].question;
    chA = questions[pos].a;
    chB = questions[pos].b;
    chC = questions[pos].c;
  
    test.innerHTML = "<h3>" + question + "</h3>";
    test.innerHTML +=
      "<label> <input type='radio' name='choices' value='A'> " +
      chA +
      "</label><br>";
    test.innerHTML +=
      "<label> <input type='radio' name='choices' value='B'> " +
      chB +
      "</label><br>";
    test.innerHTML +=
      "<label> <input type='radio' name='choices' value='C'> " +
      chC +
      "</label><br><br>";
    test.innerHTML +=
      "<button class='btn btn-secondary submitMe' onclick='checkAnswer()'>Submit Answer</button>";
  }
  function checkAnswer() {
    choices = document.getElementsByName("choices");
    // get the answer chosen by user
    for (var i = 0; i < choices.length; i++) {
      if (choices[i].checked) {
        choice = choices[i].value;
      }
    }