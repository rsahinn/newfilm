class Storage{
    static addToLocalStorage(newfilm){
        let film=this.getToLocalStorage();
        film.push(newfilm);
        localStorage.setItem("films",JSON.stringify(film));
    }
    
    static getToLocalStorage(){
        let film
        if (localStorage.getItem("films")===null) {
            film=[];
        }
        else{
            film=JSON.parse(localStorage.getItem("films"));
        }
        return film;
    }
    static deleteFilmFromStorage(filmtitle) {
        let films=this.getToLocalStorage();
        films.forEach(function(film,index) {
            if (film.title===filmtitle){
                films.splice(index,1);
            }
        });
        localStorage.setItem("films",JSON.stringify(films));
    }
}
