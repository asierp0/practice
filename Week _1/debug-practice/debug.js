const form = document.querySelector("#score-form");
const earnedInput = document.querySelector("#earned-points");
const possibleInput = document.querySelector("#possible-points");
const resultMessage = document.querySelector("#result-message");

const learner = {
    name: "Public Figure",
    scores: {
        earned: 18,
        possible: 20
    }
};

function calculatePercentage(earned, possible) {
    return (earned / possible) * 100;
}

function getScoreLabel(percentage) {
    if (percentage >= 60 && percentage < 80) {
        return "Passing";
    } else if (percentage >= 80) {
        return "Excellent";
    } else {
        return "Needs Improvement";
    }
}

function displayLearnerScore() {
    console.log("Learner:", learner.name);
    console.log("Earned points:", learner.scores.earned);
    console.log("Possible Points", learner.scores.possible)
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const earnedPoints = parseInt(earnedInput.value);
    const possiblePoints = parseInt(possibleInput.value);

    console.log("Earned:", earnedPoints);
    console.log("Possible:", possiblePoints);

    const percentage = calculatePercentage(
        earnedPoints,
        possiblePoints
    );

    const label = getScoreLabel(percentage);

    resultMessage.textContent =
        `Score: ${percentage}% — ${label}`;
});

displayLearnerScore();