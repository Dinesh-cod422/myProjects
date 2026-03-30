const day = document.querySelector('#days');
const hour = document.querySelector('#hours');
const minute = document.querySelector('#minutes');
const second = document.querySelector('#seconds');
const emaillls = document.getElementById("mail");
const form = document.querySelector("#form");

form.addEventListener('submit',even => {
    even.preventDefault();
    updateElement()
    console.log(updateElement)
});


function setError(input,message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error'
    small.innerText = message;
}
function setSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}
function updateElement() {
    const emailValue = emaillls.value;
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(emailValue.match(pattern)) {
        setSuccess(emaillls)
     }
     else if(emailValue === ''){
        setError(emaillls,'please enter letters and special characters')
     }
     else{
        setError(emaillls,'please enter some special characters***',alert('please enter valid email'));
     }
}


function output() {
    const current = new Date().getFullYear();
    const launch = new Date(`december 25 ${current} 00:00:00`);
    

    const currentDate = new Date();
    const differ = launch-currentDate;
    const d = Math.floor(differ/1000/60/60/24);
    const h = Math.floor((differ/1000/60/60)%24);
    const m = Math.floor((differ/1000/60)%60);
    const s = Math.floor((differ/1000)%60);
    day.innerHTML = d<10?"0"+d : d;
    hour.innerHTML = h<10?"0"+h : h;
    minute.innerHTML = m<10?"0"+m : m;
    second.innerHTML = s<10?"0"+s : s;

    console.log(`${d}: ${h}: ${m}: ${s}`)
}
output()
setInterval(output,1000)




