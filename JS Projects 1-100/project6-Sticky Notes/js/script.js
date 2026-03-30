const containerElement=document.getElementById("container");
const btnadd=document.getElementsByClassName("btn-add")[0];

function getAppStorage(){
    return JSON.parse(localStorage.getItem("dinesh-app") || "[]");
}


getAppStorage().forEach(element => {
    const textElement=createTextElement(element.id,element.content);
    containerElement.insertBefore(textElement,btnadd);
});


function createTextElement(id,content){
     const textElement=document.createElement('textarea');
     textElement.classList.add('sticky');
     textElement.value=content;
     textElement.placeholder="Please Enter Notes";

     textElement.addEventListener("change",()=>{
        updateNote(id,textElement.value);
     });

     textElement.addEventListener("dblclick",()=>{
        const check=confirm("are you sure?");
        if (check){
            deleteNotes(id,textElement);
        }
     });

     return textElement;
}
//sticky..
function addsticky(){
    const notes=getAppStorage();
    const notesObject={
        id:Math.floor(Math.random()*100000),
        content:""
    }
    const textElement=createTextElement(notesObject.id,notesObject.content);
    containerElement.insertBefore(textElement,btnadd);
    notes.push(notesObject)
    saveNotes(notes);
}
btnadd.addEventListener('click',()=>addsticky());


function saveNotes(notes){
    localStorage.setItem("dinesh-app",JSON.stringify(notes))
}

//update .....

function updateNote(id,content){
    const notes=getAppStorage();
    const updateElement=notes.filter((note)=>note.id==id)[0];
    updateElement.content = content;
    saveNotes(notes);
}

function deleteNotes(id,textElement){
    const notes=getAppStorage().filter((note)=>note.id!=id);
    saveNotes(notes);
    containerElement.removeChild(textElement);
}