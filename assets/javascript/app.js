


var card = $("#quiz-area");

// Question set // objects are in the baby blue // java much simple
var questions = [
  {
    question: "who was the original war-machine actor?",
    answers: ["Terrance Howard", "Don Cheadle", "Denzel Washington", "wesley snipe "],
    correctAnswer: "Terrance Howard"
  },
  {
    question: "Who kills Peter Star Lord Quill mom ?",
    answers: ["Json dad", "Ego Father", "Yondu Step daddy", "Thanos"],
    correctAnswer: "Ego Father"
  },
  {
    question: "Where does vibranium come from?",
    answers: ["Dubai", "California", "Wakanda", "Guatemala"],
    correctAnswer: "Wakanda"
  },
  {
    question: "Thor losses an eye by who?",
    answers: ["Lokie", "Hela", "Hulk", "Valkyries"],
    correctAnswer: "Hela"
  },
  {
    question: "On Spider-Man far from home, who is he going against",
    answers: ["Venom & Carnage", "The Punisher", "Mysterio", "Hot Gobblin"],
    correctAnswer: "Mysterio"
  },
  {
    question: "Who trains Dr. Strange to take place of Ancient One",
    answers: ["Mordo", "Wong", "Starks", "Dr. Pim"],
    correctAnswer: "Fresh"
  },
  {
    question: "How many infinity stones are there",
    answers: ["1", "100", "20", "6"],
    correctAnswer: "Skeeter"
  },
  {
    question: "Who creates Ultron",
    answers: ["S.H.I.E.L.D.", "Starks & Dr. Banner", "J.A.R.V.I.S.", "Asguard"],
    correctAnswer: "Starks & Dr. Banner"
  }
];

// Variable that will hold the setInterval
var timer; //var like math problem

var game = {
  correct: 0, //set to zero
  incorrect: 0,
  counter: 120, // 12 secs

  countdown: function() { // this function is for the countdown
    game.counter--;
    $("#counter-number").html(game.counter);// Jquery pound to call upon
    if (game.counter === 0) { // if statement not answer at zero you lose 
      console.log("TIME UP"); // console checks your code &
      game.done();
    }
  },

  start: function() { // starts the timer @ 1min
    timer = setInterval(game.countdown, 1000);

    $("#sub-wrapper").prepend(
      "<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>"
    );

    $("#start").remove();// start is at the function part

    for (var i = 0; i < questions.length; i++) { // for loop
      card.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        card.append("<input type='radio' name='question-" + i +
          "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    card.append("<button id='done'>Done</button>");
  },

  done: function() { // 
    var inputs = card.children("input:checked"); // idk
    for (var i = 0; i < inputs.length; i++) { // for loopt
      if ($(inputs[i]).val() === questions[i].correctAnswer) {
        game.correct++;
      } else { // if else statements 
        game.incorrect++;
      }
    }
    this.result();
  },

  result: function() {
    clearInterval(timer); // restarts the timer

    $("#sub-wrapper h2").remove();

    card.html("<h2>All Done!</h2>");
    card.append("<h3>Correct Answers: " + this.correct + "</h3>"); // this where the code is written
    card.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
  }
};

// CLICK EVENTS

$(document).on("click", "#start", function() { // makes it clickable
  game.start();
});

$(document).on("click", "#done", function() { // game is over
  game.done();
});
