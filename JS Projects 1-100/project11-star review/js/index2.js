const ratioElement = document.querySelectorAll('input');
const ratttes = document.querySelector('.rate-value');


ratioElement.forEach((radioo) => {
    radioo.addEventListener('click',() => {
        let value = radioo.value;
        ratttes.innerText= `${value} of 5`;
    })
})