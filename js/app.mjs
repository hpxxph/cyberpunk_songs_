const plus = document.getElementById("plus");
const play = document.getElementById("play");
const minus = document.getElementById("minus");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

const trOne = document.getElementById("trOne");
const musOne = document.getElementById("musOne");

const trTwo = document.getElementById("trTwo");
const musTwo = document.getElementById("musTwo");

const trThree = document.getElementById("trThree");
const musThree = document.getElementById("musThree");

const trFour = document.getElementById("trFour");
const musFour = document.getElementById("musFour");

const trFive = document.getElementById("trFive");
const musFive = document.getElementById("musFive");

const trSix = document.getElementById("trSix");
const musSix = document.getElementById("musSix");

const trSeven = document.getElementById("trSeven");
const musSeven = document.getElementById("musSeven");

const trEight = document.getElementById("trEight");
const musEight = document.getElementById("musEight");

const trNine = document.getElementById("trNine");
const musNine = document.getElementById("musNine");

const trTen = document.getElementById("trTen");
const musTen = document.getElementById("musTen");

const trEleven = document.getElementById("trEleven");
const musEleven = document.getElementById("musEleven");

const trTwelve = document.getElementById("trTwelve");
const musTwelve = document.getElementById("musTwelve");

const trThirteen = document.getElementById("trThirteen");
const musThirteen = document.getElementById("musThirteen");

const songName = document.getElementById("songName");

let currentTrack = null;

function playAudio(tr) {
  if (tr === currentTrack) {
    if (tr.paused) {
      play.innerText = "[stop]";
      tr.play();
    } else {
      play.innerText = "[play]";
      tr.pause();
    }
  } else {
    if (currentTrack !== null) {
      currentTrack.pause();
      currentTrack.currentTime = 0;
    }
    currentTrack = tr;
    play.innerText = "[stop]";
    tr.loop = false;
    tr.play();
  }
}

plus.addEventListener("click", () => {
  if (currentTrack !== null) {
    currentTrack.currentTime += 15;
  }
});

minus.addEventListener("click", () => {
  if (currentTrack !== null) {
    currentTrack.currentTime -= 15;
  }
});

play.addEventListener("click", () => {
  if (currentTrack !== null) {
    playAudio(currentTrack);
  }
});

trOne.addEventListener("click", () => {
  if (
    !musTwo.paused ||
    !musThree.paused ||
    !musFour.paused ||
    !musFive.paused ||
    !musSix.paused ||
    !musSeven.paused ||
    !musEight.paused ||
    !musNine.paused ||
    !musTen.paused ||
    !musTwelve.paused ||
    !musThirteen.paused ||
    !musEleven.paused
  ) {
    return;
  }
  playAudio(musOne);
  songName.innerText = `[_Whos_Ready_for_Tomorrow_]`;
});

trTwo.addEventListener("click", () => {
  if (
    !musOne.paused ||
    !musThree.paused ||
    !musFour.paused ||
    !musFive.paused ||
    !musSix.paused ||
    !musSeven.paused ||
    !musEight.paused ||
    !musNine.paused ||
    !musTen.paused ||
    !musTwelve.paused ||
    !musThirteen.paused ||
    !musEleven.paused
  ) {
    return;
  }
  playAudio(musTwo);
  songName.innerText = `[ _This_ffire__New_Version_]`;
});

trThree.addEventListener("click", () => {
  if (
    !musOne.paused ||
    !musTwo.paused ||
    !musFour.paused ||
    !musFive.paused ||
    !musSix.paused ||
    !musSeven.paused ||
    !musEight.paused ||
    !musNine.paused ||
    !musTen.paused ||
    !musTwelve.paused ||
    !musThirteen.paused ||
    !musEleven.paused
  ) {
    return;
  }
  playAudio(musThree);
  songName.innerText = `[ _On_My_Way_to_Hell_]`;
});

trFour.addEventListener("click", () => {
  if (
    !musOne.paused ||
    !musTwo.paused ||
    !musThree.paused ||
    !musFive.paused ||
    !musSix.paused ||
    !musSeven.paused ||
    !musEight.paused ||
    !musNine.paused ||
    !musTen.paused ||
    !musTwelve.paused ||
    !musThirteen.paused ||
    !musEleven.paused
  ) {
    return;
  }
  playAudio(musFour);
  songName.innerText = `[I_Really_Want_to Stay_at_Your_House]`;
});

trFive.addEventListener("click", () => {
  if (
    !musOne.paused ||
    !musTwo.paused ||
    !musThree.paused ||
    !musFour.paused ||
    !musSix.paused ||
    !musSeven.paused ||
    !musEight.paused ||
    !musNine.paused ||
    !musTen.paused ||
    !musTwelve.paused ||
    !musThirteen.paused ||
    !musEleven.paused
  ) {
    return;
  }
  playAudio(musFive);
  songName.innerText = `[_Major_Crimes_]`;
});

trSix.addEventListener("click", () => {
  if (
    !musOne.paused ||
    !musTwo.paused ||
    !musThree.paused ||
    !musFour.paused ||
    !musFive.paused ||
    !musSeven.paused ||
    !musEight.paused ||
    !musNine.paused ||
    !musTen.paused ||
    !musTwelve.paused ||
    !musThirteen.paused ||
    !musEleven.paused
  ) {
    return;
  }
  playAudio(musSix);
  songName.innerText = `[_ Code_Red_Initiated_]`;
});

trSeven.addEventListener("click", () => {
  if (
    !musOne.paused ||
    !musTwo.paused ||
    !musThree.paused ||
    !musFour.paused ||
    !musFive.paused ||
    !musSix.paused ||
    !musEight.paused ||
    !musNine.paused ||
    !musTen.paused ||
    !musTwelve.paused ||
    !musThirteen.paused ||
    !musEleven.paused
  ) {
    return;
  }
  playAudio(musSeven);
  songName.innerText = `[._Ritual__]`;
});

trEight.addEventListener("click", () => {
  if (
    !musOne.paused ||
    !musTwo.paused ||
    !musThree.paused ||
    !musFour.paused ||
    !musFive.paused ||
    !musSix.paused ||
    !musSeven.paused ||
    !musNine.paused ||
    !musTen.paused ||
    !musTwelve.paused ||
    !musThirteen.paused ||
    !musEleven.paused
  ) {
    return;
  }
  playAudio(musEight);
  songName.innerText = `[._Galaxy_]`;
});

trNine.addEventListener("click", () => {
  if (
    !musOne.paused ||
    !musTwo.paused ||
    !musThree.paused ||
    !musFour.paused ||
    !musFive.paused ||
    !musSix.paused ||
    !musSeven.paused ||
    !musEight.paused ||
    !musTen.paused ||
    !musTwelve.paused ||
    !musThirteen.paused ||
    !musEleven.paused
  ) {
    return;
  }
  playAudio(musNine);
  songName.innerText = `[._Spaceship__]`;
});

trTen.addEventListener("click", () => {
  if (
    !musOne.paused ||
    !musTwo.paused ||
    !musThree.paused ||
    !musFour.paused ||
    !musFive.paused ||
    !musSix.paused ||
    !musSeven.paused ||
    !musEight.paused ||
    !musNine.paused ||
    !musTwelve.paused ||
    !musThirteen.paused ||
    !musEleven.paused
  ) {
    return;
  }
  playAudio(musTen);
  songName.innerText = `[._Star_Bright_]`;
});

trEleven.addEventListener("click", () => {
  if (
    !musOne.paused ||
    !musTwo.paused ||
    !musThree.paused ||
    !musFour.paused ||
    !musFive.paused ||
    !musSix.paused ||
    !musSeven.paused ||
    !musEight.paused ||
    !musNine.paused ||
    !musTen.paused ||
    !musTwelve.paused ||
    !musThirteen.paused
  ) {
    return;
  }
  playAudio(musEleven);
  songName.innerText = `[._Мусорщики_]`;
});

trTwelve.addEventListener("click", () => {
  if (
    !musOne.paused ||
    !musTwo.paused ||
    !musThree.paused ||
    !musFour.paused ||
    !musFive.paused ||
    !musSix.paused ||
    !musSeven.paused ||
    !musEight.paused ||
    !musNine.paused ||
    !musTen.paused ||
    !musThirteen.paused ||
    !musEleven.paused
  ) {
    return;
  }
  playAudio(musTwelve);
  songName.innerText = `[._Lost_in_Time_]`;
});

trThirteen.addEventListener("click", () => {
  if (
    !musOne.paused ||
    !musTwo.paused ||
    !musThree.paused ||
    !musFour.paused ||
    !musFive.paused ||
    !musSix.paused ||
    !musSeven.paused ||
    !musEight.paused ||
    !musNine.paused ||
    !musTen.paused ||
    !musTwelve.paused ||
    !musEleven.paused
  ) {
    return;
  }
  playAudio(musThirteen);
  songName.innerText = `[._Endless_Horizon_]`;
});

const trackIds = [
  "musOne",
  "musTwo",
  "musThree",
  "musFour",
  "musFive",
  "musSix",
  "musSeven",
  "musEight",
  "musNine",
  "musTen",
  "musEleven",
  "musTwelve",
  "musThirteen"
];

let currentTrackIndex = 0;

function playNextTrack() {
  if (currentTrackIndex < trackIds.length - 1) {
    currentTrackIndex++;
  } else {
    currentTrackIndex = 0;
  }
  const nextTrack = document.getElementById(trackIds[currentTrackIndex]);
  playAudio(nextTrack);
  songName.innerText = '[error]'
}

function playPreviousTrack() {
  if (currentTrackIndex > 0) {
    currentTrackIndex--;
  } else {
    currentTrackIndex = trackIds.length - 1;
  }
  const prevTrack = document.getElementById(trackIds[currentTrackIndex]);
  playAudio(prevTrack);
  songName.innerText = '[error]'
}

next.addEventListener("click", playNextTrack);
prev.addEventListener("click", playPreviousTrack);