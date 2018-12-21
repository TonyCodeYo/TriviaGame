$(document).ready(function() {

  // When random-button is clicked...
  $("#random-button").on("click", function() {

    // ...create a string which will hold the lottery number.
    var lottoNumber = "";

    // Then create a loop that generates 9 separate numbers.
    for (var i = 0; i < 9; i++) {
      var random = Math.floor(Math.random() * 9) + 1;

      // Add to the lottery number.
      lottoNumber = random + lottoNumber;
    }
    if (result === randomNumber) {
      wins++;
      $("#win-lose").html("<h2>Winner!</h2>");
      $("#wins").html("<h3>" + wins + "</h3>");
    }
  
    //  Else:
    //  Increment losses by one.
    //  Find the div with an id of win-lose. Update it with an h2 of "Loser!"
    //  Find the div with an id of losses. Update it with the value of the losses variable.
    else {
      losses++;
      $("#win-lose").html("<h2>Loser!</h2>");
      $("#losses").html("<h3>" + losses + "</h3>");
    }
    var windowTimeout = setTimeout(function() {
      alert("Alert #1: Called automatically 1 second after page load.");
    }, 1000);

    //  Start on click.
    $("#start").on("click", function() {
      //  Set the button alert's timeout to run three seconds after the function's called.
      delayButtonAlert = setTimeout(function() {
        alert("Alert #2: Called 3 seconds after the start button is clicked.");
      }, 3000);
    });

    //  Cancel on click.
    $("#cancel").on("click", function() {
      // Clear the button alert's timeout.
      clearTimeout(delayButtonAlert);
    });

    //  Cancel window alert on click.
    $("#window-cancel").on("click", function() {
      //  Clear the timeout, and stop the window alert.
      clearTimeout(windowTimeout);
    });
    function timeUp() {
      // in the element with an id of time-left add an h2 saying Time's Up!
      // console log done
      console.log("done");
      $("#time-left").append("<h2>Time's Up!</h2>");
      console.log("time is up");
    
      //  The following line will play the audio file we linked to above:
      audio.play();
    }
    // This code will run as soon as the page loads
window.onload = function() {
  $("#lap").on("click", recordLap);
  $("#stop").on("click", stop);
  $("#reset").on("click", reset);
  $("#start").on("click", start);
};

//  Variable that will hold our setInterval that runs the stopwatch
var intervalId;

// prevents the clock from being sped up unnecessarily
var clockRunning = false;
var time = 0;
var lap = 1;

function reset() {

  time = 0;
  lap = 1;

  // DONE: Change the "display" div to "00:00."
  $("#display").text("00:00");

  // DONE: Empty the "laps" div.
  $("#laps").text("");
}
function start() {

  // DONE: Use setInterval to start the count here and set the clock to running.
  if (!clockRunning) {
    intervalId = setInterval(count, 1000);
    clockRunning = true;
  }
}
function stop() {

  // DONE: Use clearInterval to stop the count here and set the clock to not be running.
  clearInterval(intervalId);
  clockRunning = false;
}
function recordLap() {

  // DONE: Get the current time, pass that into the timeConverter function,
  //       and save the result in a variable.
  var converted = timeConverter(time);

  // DONE: Add the current lap and time to the "laps" div.
  $("#laps").append("<p>Lap " + lap + " : " + converted + "</p>");

  // DONE: Increment lap by 1. Remember, we can't use "this" here.
  lap++;
}
function count() {

  // DONE: increment time by 1, remember we cant use "this" here.
  time++;

  // DONE: Get the current time, pass that into the timeConverter function,
  //       and save the result in a variable.
  var converted = timeConverter(time);
  console.log(converted);

  // DONE: Use the variable we just created to show the converted time in the "display" div.
  $("#display").text(converted);
}
function timeConverter(t) {

  var minutes = Math.floor(t / 60);
  var seconds = t - (minutes * 60);

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (minutes === 0) {
    minutes = "00";
  }
  else if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return minutes + ":" + seconds;
}


// Solution if you would like to put it in an object

// window.onload = function() {
//   $("#lap").on("click", stopwatch.recordLap);
//   $("#stop").on("click", stopwatch.stop);
//   $("#reset").on("click", stopwatch.reset);
//   $("#start").on("click", stopwatch.start);
// };

// //  Variable that will hold our setInterval that runs the stopwatch
// var intervalId;

// // prevents the clock from being sped up unnecessarily
// var clockRunning = false;

// // Our stopwatch object
// var stopwatch = {

//   time: 0,
//   lap: 1,

//   reset: function() {

//     stopwatch.time = 0;
//     stopwatch.lap = 1;

//     // DONE: Change the "display" div to "00:00."
//     $("#display").text("00:00");

//     // DONE: Empty the "laps" div.
//     $("#laps").text("");
//   },
//   start: function() {

//     // DONE: Use setInterval to start the count here and set the clock to running.
//     if (!clockRunning) {
//       intervalId = setInterval(stopwatch.count, 1000);
//       clockRunning = true;
//     }
//   },
//   stop: function() {

//     // DONE: Use clearInterval to stop the count here and set the clock to not be running.
//     clearInterval(intervalId);
//     clockRunning = false;
//   },
//   recordLap: function() {

//     // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
//     //       and save the result in a variable.
//     var converted = stopwatch.timeConverter(stopwatch.time);

//     // DONE: Add the current lap and time to the "laps" div.
//     $("#laps").append("<p>Lap " + stopwatch.lap + " : " + converted + "</p>");

//     // DONE: Increment lap by 1. Remember, we can't use "this" here.
//     stopwatch.lap++;
//   },
//   count: function() {

//     // DONE: increment time by 1, remember we cant use "this" here.
//     stopwatch.time++;

//     // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
//     //       and save the result in a variable.
//     var converted = stopwatch.timeConverter(stopwatch.time);
//     console.log(converted);

//     // DONE: Use the variable we just created to show the converted time in the "display" div.
//     $("#display").text(converted);
//   },
//   timeConverter: function(t) {

//     var minutes = Math.floor(t / 60);
//     var seconds = t - (minutes * 60);

//     if (seconds < 10) {
//       seconds = "0" + seconds;
//     }

//     if (minutes === 0) {
//       minutes = "00";
//     }
//     else if (minutes < 10) {
//       minutes = "0" + minutes;
//     }

//     return minutes + ":" + seconds;
//   }
// };

//  Slideshow Activity
//  ** SOLUTION **

// TODO: Put links to our images in this image array.
var images = ["images/bootstrap.png", "images/github-logo.jpg", "images/logo_JavaScript.png"];

// Variable showImage will hold the setInterval when we start the slideshow
var showImage;

// Count will keep track of the index of the currently displaying picture.
var count = 0;

// TODO: Use jQuery to run "startSlideshow" when we click the "start" button.
$("#start").click(startSlideshow);

// TODO: Use jQuery to run "stopSlideshow" when we click the "stop" button.
$("#stop").click(stopSlideshow);


// This function will replace display whatever image it's given
// in the 'src' attribute of the img tag.
function displayImage() {
  $("#image-holder").html("<img src=" + images[count] + " width='400px'>");
}

function nextImage() {
  //  TODO: Increment the count by 1.
  count++;

  // TODO: Show the loading gif in the "image-holder" div.
  $("#image-holder").html("<img src='images/loading.gif' width='200px'/>");

  // TODO: Use a setTimeout to run displayImage after 1 second.
  setTimeout(displayImage, 1000);

  // TODO: If the count is the same as the length of the image array, reset the count to 0.
  if (count === images.length) {
    count = 0;
  }
}

function startSlideshow() {

  // TODO: Use showImage to hold the setInterval to run nextImage.
  showImage = setInterval(nextImage, 3000);

}

function stopSlideshow() {

  // TODO: Put our clearInterval here:
  clearInterval(showImage);

}

// This will run the display image function as soon as the page loads.
displayImage();
/ document.ready so page loads before js is accessable
 $(document).ready(function() {
   // Timer run function
   function run() {
     clearInterval(intervalId);
     intervalId = setInterval(decrement, 1000);
   }
   // Losing time! (decrease time function)
   // add timer to html
   function decrement() {
     time--

     $("#timer").html("<h2>" + "Time remaining: " + time + "</h2>");

   // if function for timer when it reaches zero (before submit button is clicked)
   // alerts user that time is up and runs submit function
     if (time === 0 ) {
       alert("Time's up!");
       submit();
     }
   }

   // start timer when start button is clicked
   $("#start-timer").on("click", run)
   console.log(time);

   // if user submits before time is over, stop time and run submit function
   $("#submit-quiz").on("click", submit)
 })