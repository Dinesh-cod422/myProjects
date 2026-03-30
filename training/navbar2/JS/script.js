const buttonss = document.querySelectorAll('.btn')

function setactive(event) {
    buttonss.forEach((butns) => {
        butns.classList.remove('active');
    })
    event.target.classList.add('active')
}

buttonss.forEach((butns) => {
    butns.addEventListener('click',(event) => {
        setactive(event)
    })
})