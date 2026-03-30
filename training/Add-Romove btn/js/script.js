(function() {
 const btns = document.querySelectorAll('.counterbtn');
 count = 0;
const prev = document.querySelector('.prev');
const next = document.querySelector('.next')

 

 btns.forEach((button) => {
    button.addEventListener('click',() => {
        if (button.classList.contains('prev')){
        count--;
        prev.style.backgroundColor = 'red'

        setTimeout(() => {
        prev.style.backgroundColor = ''
        },100)


        }
        else if (button.classList.contains('next')){
        count++;
        prev.style.backgroundColor = ''
        next.style.backgroundColor = 'green'


        setTimeout(() => {
            next.style.backgroundColor = ''
            },100)
        }

        const counter = document.querySelector('#count');
        counter.textContent = count;

        if (count < 0) {
            counter.style.color = 'red'
        }
        else if (count > 0) {
            counter.style.color = 'green'
        }
        else{
            counter.style.color = '#333333'
        }

    })
 })
})()