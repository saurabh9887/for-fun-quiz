const data = [
  {
    id: 1,
    question: "Which player among below is called God of Cricket?",
    answers: [
      { answer: "Virat Kohli", iscorrect: "false" },
      { answer: "Rohit Sharma", iscorrect: "false" },
      { answer: "Sachin Tendulkar", iscorrect: "true" },
      { answer: "Gautam Gambhir", iscorrect: "false" },
    ],
  },

  {
    id: 2,
    question: "Who scored maximum goals in whole carrier?",
    answers: [
      { answer: "Pele", iscorrect: "false" },
      { answer: "Cristiano Ronaldo", iscorrect: "true" },
      { answer: "Leo Messi", iscorrect: "false" },
      { answer: "Romario", iscorrect: "false" },
    ],
  },

  {
    id: 3,
    question: "Which of the following anime series is must watch?",
    answers: [
      { answer: "Naruto", iscorrect: "false" },
      { answer: "One Piece", iscorrect: "false" },
      { answer: "Dragon ball", iscorrect: "false" },
      { answer: "All of the above", iscorrect: "true" },
    ],
  },

  {
    id: 4,
    question:
      "Which national cricket team has scored maximum runs in an innings?",
    answers: [
      { answer: "Austrailia", iscorrect: "false" },
      { answer: "India", iscorrect: "false" },
      { answer: "England", iscorrect: "true" },
      { answer: "New Zealand", iscorrect: "false" },
    ],
  },
];

const gameScreen = document.querySelector(".game");
const resultScreen = document.querySelector(".result");
const mainquestion = document.querySelector(".question");
const answerContainer = document.querySelector(".answers");
const submit = document.querySelector(".submit");
const Play = document.querySelector(".play");

let qIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let SelectedAns;

const playAgain = () => {
  qIndex = 0;
  correctCount = 0;
  wrongCount = 0;
  SelectedAns;
  ShowQuestion(qIndex);
};

Play.addEventListener("click", () => {
  gameScreen.style.display = "block";
  resultScreen.style.display = "none";
  playAgain();
});

const ShowResult = () => {
  gameScreen.style.display = "none";
  resultScreen.style.display = "block";

  document.querySelector(
    ".correct"
  ).innerHTML = `Correct Answers: ${correctCount}`;
  document.querySelector(".wrong").innerHTML = `Wrong Answers: ${wrongCount}`;
  document.querySelector(".score").innerHTML = `Total Score: ${
    correctCount * 10
  }`;

};

const ShowQuestion = (qNumber) => {
  if (qIndex === data.length) return ShowResult();
  SelectedAns = null;
  mainquestion.innerHTML = data[qNumber].question;
  answerContainer.innerHTML = data[qNumber].answers
    .map(
      (item, index) =>
        `
        <div class="answer">
            <input type="radio" id="${index}" value="${item.iscorrect}" name="ans" style="cursor: pointer;">
            <label for="${index}">${item.answer}</label>
        </div>
        `
    )
    .join("");

  SelectAnswer();
};

const SelectAnswer = () => {
  answerContainer.querySelectorAll("input").forEach((el) => {
    el.addEventListener("click", (e) => {
      SelectedAns = e.target.value;
    });
  });
};

const submitAnswer = () => {
  submit.addEventListener("click", () => {
    if (SelectedAns !== null) {
      if (SelectedAns === "true") {
        correctCount++;
      } else wrongCount++;
      qIndex++;
      ShowQuestion(qIndex);
    } else alert("Please select one of the Answers first!");
  });
};

submitAnswer(qIndex);

ShowQuestion(0);
