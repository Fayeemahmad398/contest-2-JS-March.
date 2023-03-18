function OpeningCeremony(nextRace100M) {
  setTimeout(() => {
    console.log("Let the games begin!");
    let score = { red: 0, blue: 0, green: 0, yellow: 0 };
    console.log("initialised score here:", score);
    nextRace100M(score, LongJump);
  }, 1000);
}

function Race100M(score, nextLongJump) {
  console.log("Race100M started!");
  console.log("Race100M previous scores: ", score);

  setTimeout(() => {
    let times = {
      red: getRandomInt(10, 15),
      blue: getRandomInt(10, 15),
      green: getRandomInt(10, 15),
      yellow: getRandomInt(10, 15),
    };
    console.log("Race100M previous scores: ", score);

    let sortedTimes = Object.entries(times).sort((a, b) => a[1] - b[1]);

    let firstColor = sortedTimes[0][0];
    let secondColor = sortedTimes[1][0];

    score[firstColor] += 50;
    score[secondColor] += 25;

    console.log("Race100M updated scores: ", score);
    nextLongJump(score, HighJump);
  }, 3000);
}

function LongJump(score, nextHighJump) {
  console.log("LongJump started!");
  console.log("LongJump previous scores: ", score);

  setTimeout(() => {
    let color = getRandomColor();
    score[color] += 150;
    console.log("LongJump updated scores: ", score);
    nextHighJump(score, AwardCeremony);
  }, 2000);
}

function HighJump(score, nextAwardCeremony) {
  console.log("HighJump started!");
  let color = prompt("What colour secured the highest jump?");
  console.log("Highjump previous scores: ", score);

  if (color === null || color === "") {
    console.log("Event was cancelled");

    nextAwardCeremony(score);
  } else if (Object.keys(score).includes(color)) {
    score[color] += 100;
    console.log(`${color} got HighJump scores:${score[color]}`);
    console.log("Highjump updated scores: ", score);
    nextAwardCeremony(score);
  } else {
    console.log("Invalid color entered!");

    nextAwardCeremony(score);
  }
}

function AwardCeremony(score) {
  console.log("Award Ceremony started!");
  let sortedScores = Object.entries(score).sort((a, b) => b[1] - a[1]);
  console.log(
    `${sortedScores[0][0]} came first with ${sortedScores[0][1]} points`
  );
  console.log(
    `${sortedScores[1][0]} came second with ${sortedScores[1][1]} points`
  );
  console.log(
    `${sortedScores[2][0]} came third with ${sortedScores[2][1]} points`
  );
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor() {
  let colors = ["red", "yellow", "blue", "green"];
  return colors[getRandomInt(0, 3)];
}

// Starting the SportsDay
OpeningCeremony(Race100M);
