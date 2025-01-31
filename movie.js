const submit= document.getElementById("btn-ajouter"); // declarina vr htina feh id dyal btn-ajouter
const fimlsAccueil=document.getElementById("filmsAccueil"); // fen ay t afichaw aflam
let locas=localStorage.getItem("filmsData") ? JSON.parse(localStorage.getItem("filmsData")) : []; 

if(submit) {
    submit.addEventListener("click", function() {

let newMovie={
    nom: document.getElementById("nomFilm")?.value,
    anneeFilm: document.getElementById("anneeFilm")?.value,
    Description: document.getElementById("Description")?.value,
    type: document.getElementById("type")?.value,
    URL: document.getElementById("URL")?.value,
}
locas.push(newMovie);
localStorage.setItem("filmsData",  JSON.stringify(locas)); 
affichData();

    })}




























































// let movies=[];
// function ajouterFilm(event) {                // function to add a film to the list of films
//     event.preventDefault();                  //bach matrelaodach page

//     const title=document.getElementById("nomFilm").value;  // get the value of the title input
//     const description=document.getElementById("Description").value;
//     const catégorie=document.getElementById("type").value;
//     const Image=document.getElementById("URL").value;

//     const film= {
//         name: nomFilm,
//         description: Description,
//         catégorie: type,
//         Image: URL,
//     };                                        // create a new film object

//    movies.push(film);                         // add the new film to the array

//    localStorage.setItem("movies",JSON.stringify(movies));  // save the array in the local storage
//    location.assign("/accueil.html");                           // redirect to the index page
// // clear the input
// }
// document.getElementById("addRecipeForm").addEventListener("submit", ajouterFilm);  // add an event listener to the form to call the function ajouterFilm when the form is submitted

