const imgs = document.querySelectorAll('.img a');
let imgId = 1;
const imgDiv = document.querySelectorAll('.img');

imgs.forEach((imgg) => {
    imgg.addEventListener('click', (e) =>{
        e.preventDefault();
        imgId = imgg.dataset.id;

     moveImage()
    })
})

function moveImage() {

    const imgWidth = document.querySelector('.main-image img:first-child').clientWidth;

    var widdd = (imgId-1)*imgWidth;
    document.querySelector('.main-image').style.transform = `translateX(${-widdd}px)`;

}