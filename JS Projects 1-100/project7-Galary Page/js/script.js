const model = document.createElement('div');
model.id = 'model';
document.body.appendChild(model);

const images=document.querySelectorAll('.img');
// console.log(images)

images.forEach(pic=>{
    pic.addEventListener('click',()=>{
       model.classList.add('active');
       const img = document.createElement('img');
       img.src=pic.src;
       img.id="img";
       while(model.firstChild){
        model.removeChild(model.firstChild);
       }
       model.appendChild(img);
    })
});


model.addEventListener('click',()=>{
    model.classList.remove('active');
})