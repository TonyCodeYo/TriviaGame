///variable
var timer;
var question;
var rightAns;
var wrongAns;
var rightScore;
var wrongScore;
var startBtn;
var clockRunning;
var submitBtn;


/// current IDs
//startBtn
//timer
//rightScore
//wrongScore
//ques1
//ans1
//ans2
//ans3
//ans4
//submitBtn

/// functions ///
///start game
///clear game
///timer 
///randomize question assignment
///randomize answer assignment
///submit function

var rightScore = 0;
var wrongScore = 0;
var count = 10;
var intervalId;
var index = 0;
var clockRunning = false;

arrayQnA = [
  ["What was my first car?", "Audi 5000s", "Nissan Maxima", "Honda Civic", "Mercedes C-class"],
  ["What year was I born?", "1991", "1987", "1983", "1979"],
  ["Where was my mother born?", "USA", "Phillipines", "Ireland", "Portugal"],
  ["How many siblings do I have?", "1", "2", "3", "4"],
  ["What is my guilty pleasure?", "Real World: Challenge", "Big Brother", "WWE", "All of the above"]
];
  function startGame() {
    $("#quesYo").text(arrayQnA[index][0]);
    $("#ans1").text(arrayQnA[index][1]);
    $("#ans2").text(arrayQnA[index][2]);
    $("#ans3").text(arrayQnA[index][3]);
    $("#ans4").text(arrayQnA[index][4]);

    if (clockRunning === false) {
      timer();
    }
  }

  ///where do i put clockRunning true statement
  
  
  function timer() {
   clearInterval(intervalId);
   intervalId = setInterval(counter, 1000);
  }

  function counter() {
    count--;
    $("#timer").text(count);
    if (count === 0){
      clearInterval(intervalId);
      $("#timer").text("Time is up !!!");
      showResults();
    }
  }

  $("#startBtn").on("click", function () {
    startGame();
  })

  $("#submitBtn").on("click", function () {
    showResults();
    clearInterval(intervalId);
    $("#timer").text("Check out your score !!!");
  })

  function showResults() {
    $("#rightScore").text(rightScore);
    $("#wrongScore").text(wrongScore);
  }

  



  console.log(timer);
  console.log(startGame);

  
  
  

  
