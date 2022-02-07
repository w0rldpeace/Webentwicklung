// Convert time to a format of hours, minutes, seconds, and milliseconds

function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);
  
    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);
  
    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);
  
    let diffInMs = (diffInSec - ss) * 100;
    let ms = Math.floor(diffInMs);
  
    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedMS = ms.toString().padStart(2, "0");
  
    return `${formattedMM}:${formattedSS}:${formattedMS}`;
  }
  
  // Declare variables to use in our functions below
  
  let startTime;
  let elapsedTime = 0;
  let timerInterval;
  
  // Create function to modify innerHTML
  
  function print(txt) {
    document.getElementById("display").innerHTML = txt;
  }
  
  // Create "start", "pause" and "reset" functions
  
  function start() {
    startTime = Date.now() - elapsedTime; // 0 = ZeitJetzt - 0 am anfang -> startTime = ZeitJetzt
    timerInterval = setInterval(function printTime() {
      elapsedTime = Date.now() - startTime; //zwei sekunden spaeter ist date.now = 2000. Und unser starttime ist beim druecken auf play
      print(timeToString(elapsedTime)); // gesetzt. Anschliessend ziehen wir unsere startTime von aktueller Zeit und erhalten die verstrichene Zeit
    }, 10); // Ausgabe der lesbaren Zeit auf "display", alle 10 ms
    showButton("PAUSE");
  }
  
  function pause() {
    clearInterval(timerInterval); //Timer setInterval anhalten und die aktuelle Zeit als parameter uebergeben
    showButton("PLAY");
  }
  
  function reset() {
    clearInterval(timerInterval);
    print("00:00:00");
    elapsedTime = 0;
    showButton("PLAY");
  }
  
  // Create function to display buttons
  
  function showButton(buttonKey) {
    const buttonToShow = buttonKey === "PLAY" ? playButton : pauseButton; //wenn gedrueckter button "PLAY", zeig pause button
    const buttonToHide = buttonKey === "PLAY" ? pauseButton : playButton;
    buttonToShow.style.display = "block";
    buttonToHide.style.display = "none";
  }
  // Create event listeners

  playButton.addEventListener("click", start);
  pauseButton.addEventListener("click", pause);
  resetButton.addEventListener("click", reset);