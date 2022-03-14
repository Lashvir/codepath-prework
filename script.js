/*
This is your site JavaScript code - you can add interactivity and carry out processing
- Initially the JS writes a message to the console, and moves a button you can add from the README
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
console.log("Hello 🌎");
//global constants
//const clueHoldTime=1000; //length of sound/light
const cluePauseTime=333;//lenght of pause b/w clues
const nextClueWaitTime=1000;//how long to wait before starting playback of the clue sequence
//global vars
var pattern=[2,5,4,3,2,1,2,5];
var progress=0;
var gamePlaying=false;
var tonePlaying=false;
var volume=0.5;
var guessCounter=0;
var clueHoldTime=1000;//length of sound/light
var mistakes=0;
var timeInterval;
var timeLimit=30;
var timeLeft=0;
//start game func.
function startGame(){
  //initialize game vars
  progress=0;
  gamePlaying=true;
  clueHoldTime=1000;
  mistakes=0;
  document.getElementById("timePartSec").innerHTML=timeLimit+"s";
  //swap the state of start/stop btns
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  //alert("game started!"); Just testing
  randomizer();
  playClueSequence();
}


function guessTime(){
  let timePassed=0;
  timeInterval=setInterval(()=>{
      if(timePassed==30){
        loseGame();
        clearInterval(timeInterval);
      }
      timePassed+=1;
      timeLeft=timeLimit-timePassed;
      document.getElementById("timePartSec").innerHTML=timeLeft+"s";
    },1000);
}
/*
//time format
function formatTimeLeft(time) {
  // The largest round integer less than or equal to the result of time divided being by 60.
  const minutes = Math.floor(time / 60);
  
  // Seconds are the remainder of the time divided by 60 (modulus operator)
  let seconds = time % 60;
  
  // If the value of seconds is less than 10, then display seconds with a leading zero
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  // The output in MM:SS format
  return `${minutes}:${seconds}`;
}

*/
//will generate random numbers b/w 1 and 5 for the pattern
function randomizer(){
  for(let i=0;i<pattern.length-1;i++){
    pattern[i]=Math.floor(Math.random()*5)+1;
  }
}
//end game func.
function stopGame(){
  clearInterval(timeInterval);
  gamePlaying=false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("timePartSec").innerHTML=timeLimit+"s";
  //alert("game stopped!"); just testing
}
//light button playing clues
function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit");
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit");
}
// Sound Synthesis Functions
const freqMap = {
  1: 120,
  2: 190,
  3: 290,
  4: 390,
  5: 490
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}
//CLUES! playing 1 clue
function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    //will call in clueHoldTime (1 sec) and call the clearButton func and pass the arg. btn
    setTimeout(clearButton,clueHoldTime,btn);
  }
}
//playing a sequence of clues
function playClueSequence(){
  //context.resume()
  guessCounter=0;
  let delay=nextClueWaitTime; //delay is initial wait time
  for(let i=0;i<=progress;i++){//for each clue that has been revealed so far
    console.log("play single clue: "+pattern[i]+" in "+delay+"ms")
    setTimeout(playSingleClue,delay,pattern[i])//timeout to play the clue
    delay+=clueHoldTime;
    delay+=cluePauseTime;
    clueHoldTime-=20;
  }
  guessTime();
}
//Guess check
function guess(btn){
  console.log("user guess: "+ btn);
  if(!gamePlaying){
    return;
  }
  //add game logic here
  /*I had to change pattern[progress] to pattern[guessCounter]
    I did not properly nest */
  if(btn==pattern[guessCounter]){
    clearInterval(timeInterval);
    guessTime();
    //Correct guess
    if(guessCounter==progress){
      if(progress==pattern.length-1){
        //Game over, Win!
        winGame();
      }else{
        clearInterval(timeInterval);
        progress++;
        playClueSequence();
      }
    }else{
      //guessCounter not reached progress yet increment by 1...
      guessCounter++;
      //clearInterval(timeInterval);
    }
  }else{
    //Incorrect guess, Game over, Lose!
    mistakes++;
    alert("wrong guess, try again!")
    if(mistakes>2){
      loseGame();
    }
    
  }
}
//losegame
function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}
//wingame
function winGame(){
  stopGame();
  alert("~Congratulations you won!~");
}



// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)
