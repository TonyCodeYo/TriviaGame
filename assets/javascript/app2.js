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



var count = 5;
var intervalId;
var index = 0;
arrayQnA = [
  ["ques1", "ans1_1", "wrong-11", "wrong-12", "wrong-13"],
  ["ques2", "ans2_1", "wrong-21", "wrong-22", "wrong-23"],
  ["ques3", "ans3_1", "wrong-31", "wrong-32", "wrong-33"],
  ["ques4", "ans4_1", "wrong-41", "wrong-42", "wrong-43"],
  ["ques5", "ans5_1", "wrong-51", "wrong-52", "wrong-53"]
];




  function startGame() {
    $("#quesYo").text(arrayQnA[index][0]);
    $("#ans1").text(arrayQnA[index][1]);
    $("#ans2").text(arrayQnA[index][2]);
    $("#ans3").text(arrayQnA[index][3]);
    $("#ans4").text(arrayQnA[index][4]);

    timer();
  }
  
  function timer() {
   clearInterval(intervalId);
   intervalId = setInterval(counter, 1000);
   
  }

  function counter() {
    count--;
    $("#timer").text(count);
    if (count === 0){
      clearInterval(intervalId);
    }
    
  }

  if (counter === 0) {
    alert("times up")
    }

  $("#startBtn").on("click", function () {
    startGame();
  })

  console.log(timer);
  console.log(startGame);

  
  
  

  
