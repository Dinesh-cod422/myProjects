const body = document.querySelector('body');
const button = document.querySelector('button');
const color = ['red','green','yellow','pink','orange','voilet','blue','#b2c2bf','#c0ded9','#3b3a30','#a96e5b','#686256','#587e76','#c1502e','#96ceb4',' #ffcc5c',' #ff6f69','#622569',' #b8a9c9','#674d3c',' #fbefcc',' #d9ad7c'];

button.addEventListener('click',() => {
    const colorIndex = parseInt(Math.random()*color.length);
    body.style.backgroundColor = color[colorIndex]; 
    button.style.boxShadow = '2px 2px 12px black';
    button.style.border = '2px solid #454140'
})