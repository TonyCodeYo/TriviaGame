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
///randomize question assignment
///randomize answer assignment
///submit function



var count = 30;
var counter = setInterval(timer, 1000);


$("#startBtn").on("click", function () {



  function timer() {


    count = count - 1;
    if (count <= 0) {
      clearInterval(counter);
      //counter ended, do something here
      

    }

    document.getElementById("timer").innerHTML = count + " secs"; // watch for spelling

    //Do code for showing the number of seconds here
  }

  timer();




  arrayQnA = [
    ["ques1", "ans1_1", "wrong-11", "wrong-12", "wrong-13"],
    ["ques2", "ans2_1", "wrong-21", "wrong-22", "wrong-23"],
    ["ques3", "ans3_1", "wrong-31", "wrong-32", "wrong-33"],
    ["ques4", "ans4_1", "wrong-41", "wrong-42", "wrong-43"],
    ["ques5", "ans5_1", "wrong-51", "wrong-52", "wrong-53"]
  ];

  console.log(arrayQnA);

  
})

function score() {
}