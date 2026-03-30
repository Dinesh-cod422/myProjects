
const outputElement = document.getElementById("outputs-screen")


function act(num) {
    outputElement.value += num;
}
function Clear() {
    outputElement.value = " ";
}
function del() {
    outputElement.value = outputElement.value.slice(0,-1);
}
function calcul() {
    try{
        outputElement.value = eval
        (outputElement.value)
    }
    catch(err){
        alert("invalid")
    }
}