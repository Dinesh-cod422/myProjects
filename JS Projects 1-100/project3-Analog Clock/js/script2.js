const hours = document.querySelector('.hrs');
const minutes = document.querySelector('.min');
const seconds = document.querySelector('.sec');

function update() {
    const time = new Date();
    const sec = time.getSeconds()/60;
    const min = (sec+time.getMinutes())/60;
    const hour = (min+time.getHours())/12;

    hours.style.setProperty('--rotation',hour*360)
    minutes.style.setProperty('--rotation',min*360)
    seconds.style.setProperty('--rotation',sec*360)
}
update();
setInterval(update,1000);