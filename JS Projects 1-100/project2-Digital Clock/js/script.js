const clock=document.querySelector('.clock');

function runclock(){
    var time=new Date();
    var hours=time.getHours();
    var min=time.getMinutes();
    var sec=time.getSeconds();
    var text="AM";
    if(hours>12){
        hours=hours-12;
        text="PM";
    }
    else if(hours==0){
        hours=12;
        text="AM";
    }
    hours=hours<10?'0'+hours:hours;
    min=min<10?'0'+min:min;
    sec=sec<10?'0'+sec:sec;
    clock.innerHTML=(`${hours} : ${min} : ${sec} ${text}` );
}       
runclock();
setInterval(runclock,1000);