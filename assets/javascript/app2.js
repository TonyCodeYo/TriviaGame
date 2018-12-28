var timer;
var clockRunning;
var rightScore = 0;
var count = 30;
var intervalId;
var clockRunning = false;
var rightAns = ["a", "d", "b", "d", "d"];

function startGame() {
  $("#scoreboard").show(500);
  if (clockRunning === false) {
    timer();
  }
}

function timer() {
  clockRunning = true;
  clearInterval(intervalId);
  intervalId = setInterval(counter, 1000);
}

function counter() {
  count--;
  $("#timer").text(count);
  if (count === 0) {
    clearInterval(intervalId);
    $("#timer").text("Time is up !!!");
    showResults();
  }
}

$("#startBtn").on("click", function () {
  startGame();
})

$("#submitBtn").on("click", function (event) {
  event.preventDefault();
    showResults();
    $("#submitBtn").hide(500);
})

function showResults() {
  clearInterval(intervalId);
  $("#timer").text("Check out your score !!!");
  for (let i = 0; i < rightAns.length; i++) {
    if ($(`input[name='ans${i+1}']:checked`).val() === rightAns[i]) {
      rightScore++;
    }
  }
  $("#rightScore").text(rightScore);
  $("#wrongScore").text(rightAns.length - rightScore);
}