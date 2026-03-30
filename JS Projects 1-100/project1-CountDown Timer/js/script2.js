const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

function update() {
    const currentyear = new Date().getFullYear();
    const newyear = new Date(`january 1 ${currentyear+2} 00:00:00`)

    const currentdate = new Date()
    const balance = newyear-currentdate;
    const d = Math.floor(balance/1000/60/60/24);
    const h = Math.floor((balance/1000/60/60)%24);
    const m = Math.floor((balance/1000/60)%60);
    const s = Math.floor((balance/1000)%60);

    days.innerHTML = d<10?"0"+d:d;
    hours.innerHTML = h<10?"0"+h:h;
    minutes.innerHTML = m<10?"0"+m:m;
    seconds.innerHTML = s<10?"0"+s:s;

    
   console.log(d+" "+h+" "+m+" "+s);
}
update()
setInterval(update,1000)