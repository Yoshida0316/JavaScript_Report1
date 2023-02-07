let showTime;
// 初めの時間
let startTime;
// 経過時間
let elapsedTime = 0 ;
//一時停止時間
let holdTime = 0;

let timeId;

// window.onload = function(){
const timer = document.getElementById('timer');
const startbtn = document.getElementById('start');
const stopbtn = document.getElementById('stop');
const resetbtn = document.getElementById('reset');

function updateTimeText(){
    let ma = Math.floor(elapsedTime / 1000000);
    let mb = Math.floor(elapsedTime / 100000);
    let mc = Math.floor(elapsedTime / 10000);
    let s = Math.floor(elapsedTime % 10000 / 1000);
    let ms = elapsedTime %1000;
   
    ma = ('0' + ma).slice(-1);
    mb = ('0' + mb).slice(-1);
    mc = ('0' + mc).slice(-1);
    s = ('0' + s).slice(-1);
   
    timer.textContent = ma+':'+mb+':'+mc+':'+s;
  
}

startbtn.addEventListener("click",function(){
 
  startTime = Date.now();
  countUp();
  
  startbtn.disabled = true;
  stopbtn.disabled = false;
  resetbtn.disabled = true; 
  
})

stopbtn.addEventListener("click",function(){
  
  clearTimeout(timeId);
  
  startbtn.disabled = false;
  stopbtn.disabled = true;
  resetbtn.disabled = false;   
   //一時停止時間＝今-始りの時間
  holdTime += Date.now() - startTime;
  
})

resetbtn.addEventListener("click",function(){
  elapsedTime = 0 ;
  holdTime = 0;
  updateTimeText();
  
  startbtn.disabled = false;
  stopbtn.disabled = true;
  resetbtn.disabled = true;  
})

  
function countUp(){
   
  timeId = setTimeout(function(){
    elapsedTime = Date.now() -startTime + holdTime;
    updateTimeText();
    countUp();
     
  },10);
}