const outputElement = document.querySelector('#output');
const btncopy = document.querySelector('#btncopy');
const passwordlengthElement = document.querySelector('#length');
const numberElement = document.querySelector('#number');
const capitalElement = document.querySelector('#capital');
const smallElement = document.querySelector('#small');
const symbolElement = document.querySelector('#symbol');
const frm = document.querySelector('#frm');




btncopy.addEventListener('click', async() =>{
    const pass = outputElement.value;
    if (pass) {
      await navigator.clipboard.writeText(pass);
      alert('Copied to Clickboard')
    } 
    else{
        alert('There is no password')
    }
});

function generateRandomcharac (min,max) {
     const limit = max-min+1;
     return String.fromCharCode(Math.floor(Math.random()*limit)+min); 
}

function capitalvalue(){
    return generateRandomcharac (65,90);
}

function smallvalue () {
    return generateRandomcharac(97,122);
}

function numbervalue () {
    return generateRandomcharac (48,57)
}

function symbolvalue (){
    const symbols = "~!@#$%^&*)(}{+_/.";
    return symbols[Math.floor(Math.random()*symbols.length)];
}

const functionArray=[
    
    {
        ele:numberElement ,
        func:numbervalue
    },
    {
        ele:capitalElement ,
        func:capitalvalue
    },
    {
        ele:smallElement ,
        func:smallvalue  
    },
    {
        ele:symbolElement ,
        func:symbolvalue
    },
];


frm.addEventListener('submit', (event) =>{
    event.preventDefault();
    const limit= passwordlengthElement.value;
    
    
    let generatePassword = "";
    const funArray = functionArray.filter(({ele}) => ele.checked);
    for(i=0;i<limit;i++){
        const index = Math.floor(Math.random()*funArray.length);
        const letter = funArray[index].func();
        generatePassword+=letter
    }
    outputElement.value=generatePassword;
})