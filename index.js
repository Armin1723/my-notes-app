let note= document.getElementById('note');
let addBtn= document.getElementById('addBtn');
let notes= document.getElementById('notes');
let delBtn= document.getElementsByClassName('delBtn');
let search= document.getElementById('search');
showItems=()=>{
    let noteItems= localStorage.getItem('noteItems');
    if(!noteItems){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(noteItems);
    }
    notes.innerHTML="";
    notesObj.forEach(function(element, index){
        notes.innerHTML+=`  <div class="col-md-4">
                                <div class="card mx-3 my-3" style="width: 18rem ;">
                                <div class="card-body">
                                    <h5 class="card-title">Note ${index+1}</h5>
                                    <p class="card-text">${element}</p>
                                    <button class="buttonhover " id="${index}" onclick="deleteNote(this.id)">X</button>
                                </div>
                            </div> 
                        `
  })
}
showItems();

addBtn.addEventListener('click',()=>{
    let noteItems= localStorage.getItem('noteItems');
    if(!noteItems){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(noteItems);
    }   
        if(note.value!=""){
            notesObj.push(note.value);
            localStorage.setItem('noteItems',JSON.stringify(notesObj));
            note.value='';
            showItems();
        }
        else{
            alert("Please Enter A Valid Note");
        }
})

deleteNote=(ind)=>{
    let noteItems= localStorage.getItem('noteItems');
    notesObj=JSON.parse(noteItems);
    notesObj.splice(ind,1);
    localStorage.setItem('noteItems',JSON.stringify(notesObj));
    showItems();
}

search.addEventListener('input',()=>{
    let searchTxt= search.value;
    console.log("event fired");
    let cardNotes= document.getElementsByClassName('card');
    Array.from(cardNotes).forEach(function(element){
        let cardTxt= element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(searchTxt.toLowerCase()))
            element.style.display= "block";
        else
            element.style.display= "none";
    })
})
