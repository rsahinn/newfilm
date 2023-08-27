class UI{
  
  
  
  static addFilmtoUI(newfilm){
    const filmList=document.querySelector("#films");
    filmList.innerHTML+=
      `<tr>
      <td><img src="${newfilm.url}" class="img-fluid img-thumbnail"></td>
      <td>${newfilm.title}</td>
      <td>${newfilm.director}</td>
      <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    </tr>`
  }
  static clearInputs(element1,element2,element3){
      element1.value="";
      element1.setAttribute("placeholder","Film Adı");
      element2.value="";
      element2.setAttribute("placeholder","Yönetmen");
      element3.value="";
      element3.setAttribute("placeholder","Film Afiş Linki");
  }
  static displayMessage(message,type){
      const cardBody=document.querySelector(".card-body");
      const div=document.createElement("div");
      div.className=`alert alert-${type}`;
      div.textContent=message;
  
      cardBody.appendChild(div);
  
      setTimeout(() => {
          div.remove();
      },1000);
  }
      static addUIfromLocalStorage(films){
      const filmList=document.querySelector("#films");  
      films.forEach(film => {
          filmList.innerHTML+= `<tr>
      <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
      <td>${film.title}</td>
      <td>${film.director}</td>
      <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    </tr>`
      });
  
  }
  static deleteFilmFromUI(element) {
      element.parentElement.parentElement.remove();
  }
  
      
  
}
