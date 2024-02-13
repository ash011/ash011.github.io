const timeTag1 = document.getElementById("h3_1");
const timeTag2 = document.getElementById("h3_2");
const realTimeTag = document.getElementById("real_time");
const timer = document.getElementsByTagName("h2")[0];
const startButton = document.getElementById("start_button");
let timerInActive = false;
let [minute, milisecond] = timer.innerText.split(":")
const minMilObj = { minute, milisecond };

setInterval(()=>{
  let date = new Date();
  let time = date.toTimeString().split(" ")[0]
  const timeDifferentItems = date.toString().split(time)
  realTimeTag.innerText = time;
  timeTag1.innerText = timeDifferentItems[0];
  timeTag2.innerText = timeDifferentItems[1];
  if(timerInActive){
    if(countdown(minMilObj)){
      timerInActive = false;
    }
  }
}, 1000)

function countdown(minMilObj){
  if(minMilObj.minute === "00" && minMilObj.milisecond === "00"){
    timer.innerText = "Time End"
    return true;
  }
  if(minMilObj.milisecond === "00"){
    minMilObj.milisecond = "59";
    minMilObj.minute = minMilObj.minute - 1 < 10 
      ? "0" + (minMilObj.minute - 1)
      : (minMilObj.minute - 1).toString();
  }
  minMilObj.milisecond = minMilObj.milisecond - 1 < 10 
      ? "0" + (minMilObj.milisecond - 1)
      : (minMilObj.milisecond - 1).toString();
  timer.innerText = minMilObj.minute + ":" + minMilObj.milisecond
}

startButton.addEventListener("click", () => {
  if(timerInActive){
    return;
  }
  startButton.innerText = "Button inactive"
  timerInActive = true;
})