console.log("prgrm started");
var seconds =document.getElementById("seconds");
var milliseconds= document.getElementById("milliseconds");
var start = document.getElementById("start");
var stop = document.getElementById("stop");
var reset = document.getElementById("reset");
var millisec=0;
var sec=0;
var time;
const timer=()=>{
    millisec++;
    if(millisec<9)
    {
        milliseconds.innerHTML="0" + millisec;
    }
    if(millisec>9)
    {
        milliseconds.innerHTML=millisec;
    }
    if(millisec>99)
    {
        sec++;
        millisec=0;
        seconds.innerHTML= sec;
    }
}
start.addEventListener('click',()=>{
    console.log("pressed start button");
    time=setInterval(timer,10);
    // setInterval calls the desired fucntion after desired times
})

stop.addEventListener('click',()=>{
    console.log("pressed stop button");
    // seconds.innerHTML= sec;
    // milliseconds.innerHTML=millisec;
    clearInterval(time);

})
reset.addEventListener('click',()=>{
    clearInterval(time);
    sec="00";
    millisec="00";
    seconds.innerHTML=sec;
    milliseconds.innerHTML=millisec;
})