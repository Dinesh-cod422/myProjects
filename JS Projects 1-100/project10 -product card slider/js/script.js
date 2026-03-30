// -----------left-side page slider-----------

const imgs = document.querySelectorAll('.img a')
let imgId=1;

const imgDiv = document.querySelectorAll('.img');

imgs.forEach((imgg) => {
    imgg.addEventListener('click', (e) => {
        e.preventDefault();
        imgId=imgg.dataset.id;

        imgDiv.forEach((img) => {
            img.classList.remove('active');
        });
        imgg.parentElement.classList.add('active');

        moveImage();


    });
});

function moveImage() {

    const imgWidth = document.querySelector('.main-image img:first-child').clientWidth;
    
    var widdd = (imgId-1)*imgWidth;
    document.querySelector('.main-image').style.transform=`translateX(${-widdd}px)`;
    console.log(widdd);

}

// -----------right-side page--------

const minusBtn = document.querySelector('#minus');
const plusBtn = document.querySelector('#plus');
const qtyText = document.querySelector('#qty');

minusBtn.addEventListener('click',() => {
    let qty = parseInt(qtyText.value);
    if(qty>0){
        qty--;
        qtyText.value = qty;
    }
}) 
    plusBtn.addEventListener('click',() => {
        let qty = parseInt(qtyText.value);
        if(qty>=0 && qty<5){
            qty++;
            qtyText.value = qty;
        }
})