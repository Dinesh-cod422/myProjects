(function() {
    const pic = ["1","2","3","4","5","6","7"]

    const btn = document.querySelectorAll('.btn');
    const container = document.querySelector('.container');
    let count = 0;

    btn.forEach((button) => {
        button.addEventListener('click',(e) => {
            if(button.classList.contains('btnleft')){
                count--;
                if(count < 0){
                    count = pic.length - 1
                }
                container.style.background = `url('img/${pic[count]}.jpg') center/cover`
            }

            if(button.classList.contains('btnright')){
                count++;
                if(count > pic.length - 1){
                    count = 0
                }
                container.style.background = `url('img/${pic[count]}.jpg') center/cover`
            }
        })
    })
})()