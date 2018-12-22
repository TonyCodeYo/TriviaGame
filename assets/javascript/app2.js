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

var rightScore = 0;
var wrongScore = 4 - rightScore;
var count = 30;
var intervalId;
var index = 0;
var clockRunning = false;


QnA = [
  ["What was my first car?", "Audi 5000s", "Nissan Maxima", "Honda Civic", "Mercedes C-class"],
  ["What year was I born?", "1991", "1987", "1983", "1979"],
  ["Where was my mother born?", "USA", "Phillipines", "Ireland", "Portugal"],
  ["How many siblings do I have?", "1", "2", "3", "4"],
  ["What is my guilty pleasure?", "Real World: Challenge", "Big Brother", "WWE", "All of the above"]
];

var rightAns = [QnA[0][1], QnA[1][4], QnA[2][3], QnA[3][4], QnA[4][4]];
console.log(QnA[0][1]);
console.log(rightAns);





  function startGame() {
    $("#quesYo1").text(QnA[0][0]);
    $("#ans11").text(QnA[0][1]);
    $("#ans12").text(QnA[0][2]);
    $("#ans13").text(QnA[0][3]);
    $("#ans14").text(QnA[0][4]);

    $("#quesYo2").text(QnA[1][0]);
    $("#ans21").text(QnA[1][1]);
    $("#ans22").text(QnA[1][2]);
    $("#ans23").text(QnA[1][3]);
    $("#ans24").text(QnA[1][4]);

    $("#quesYo3").text(QnA[2][0]);
    $("#ans31").text(QnA[2][1]);
    $("#ans32").text(QnA[2][2]);
    $("#ans33").text(QnA[2][3]);
    $("#ans34").text(QnA[2][4]);

    $("#quesYo4").text(QnA[3][0]);
    $("#ans41").text(QnA[3][1]);
    $("#ans42").text(QnA[3][2]);
    $("#ans43").text(QnA[3][3]);
    $("#ans44").text(QnA[3][4]);

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
    $("#timer2").text(count);
    if (count === 0){
      clearInterval(intervalId);
      $("#timer").text("Time is up !!!");
      $("#timer2").text("Time is over friend !!!")
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
    $("#timer2").text("How did you do !?!")
  })

  function showResults() {
    $("#rightScore").text(rightScore);
    $("#rightScore2").text(rightScore);
    $("#wrongScore").text(wrongScore);
    $("#wrongScore2").text(wrongScore);
  }

  console.log(timer);
  console.log(startGame);

  
  
  

  
