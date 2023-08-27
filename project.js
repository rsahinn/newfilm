const form=document.getElementById("film-form");
const titleElement=document.querySelector("#title");
const directorElement=document.querySelector("#director");
const urlElement=document.getElementById("url");
const cardbody2=document.querySelectorAll(".card-body")[1];


eventListeners();

function eventListeners(){
    form.addEventListener("submit",addfilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films=Storage.getToLocalStorage();
        UI.addUIfromLocalStorage(films);
    });
    cardbody2.addEventListener("click",deletefilms);
}
function addfilm(e){
    const ad=titleElement.value;
    const yonetmen=directorElement.value;
    const link=urlElement.value;

    if(ad===""|| yonetmen===""|| link===""){
        UI.displayMessage("Tüm alanları doldurun...","danger");
    }
    else{
        const newfilm=new Film(ad,yonetmen,link);
        UI.addFilmtoUI(newfilm);
        Storage.addToLocalStorage(newfilm);
        UI.displayMessage("Film başarıyla eklendi.","success");
    }
    UI.clearInputs(titleElement,directorElement,urlElement);
    e.preventDefault();
}

function deletefilms(e){
    if (e.target.id==="delete-film") {
        UI.deleteFilmFromUI(e.target);
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        UI.displayMessage("Film Başarıyla silindi...","success");
    }
}