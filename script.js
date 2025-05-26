// je récupére l'élément qui va contenir le burger et je crée une nouvelle variable
const burger = document.getElementById('burger');


// je récupére l'élément qui contient la liste des liens et je crée une variable
const navLinks = document.getElementById('nav-links');

// La je crée une action ou je récupére ma variable et au moment ou je clique dessus alors une action/événement se produit.
burger.addEventListener('click', () => {
    toggle(navLinks,'active');
});

    function toggle(element, className){
      
        if(!element.classList.contains(className)){
            element.classList.add(className);
        }
        else{
            element.classList.remove(className);
        }
    }



// création des variables qui seront utilisées
// création de la variable "slideImage" qui va servir a récupérer les class "slide-img"
const slideImage = document.querySelectorAll(".slide-img"); // querySelectorAll commande qui permets de récupérer les éléments ciblé.

// création de la variable "dots" qui va servir a récupérer les class "dot"
const dots = document.querySelectorAll(".dot");
// variable qui va servir pour le défilement des images.

let index = 0; // index permet de garder en mémoire l'image actuellement affiché et le démarage se fait par le "0" qui représente la première image.

// variable qui va permettre de créer une intervalle de temps.
const interval = 3000; //3000 === 3 secondes

// la je crée une fonction qui va permettre de révéler une image précise et cacher les autres.
function showSlide(i) {

    // Je réinitialise les images et dots
    slideImage.forEach(slide => slide.classList.remove('active')); // on regarde toutes les images et on remove = retire la classe "active" ( en css une classe qui n'est pas "active" l'opacity et a 0 donc caché).

    dots.forEach(dot => dot.classList.remove('active')); //On fait la même chose pour les dots.

    // J'active le slide et le dot qui correspond a l'index qui est "active" ce qui la rend visible.
    slideImage[index].classList.add('active');
    dots[index].classList.add('active');

}
// function qui permet de passer à l'image suivante.
function nextSlide() {
    index = (index+1) % slideImage.length; // index+1 correspond a l'image précédent +1 ce qui fait avancé a la prochaine image. --- %slideImage.length = permets de revenir a la 1ère image sans avoir un effet rembobinage.
    // en utilisant le modulo (%) on peut donner le résultat d'une division donc quand on arrive a l'index 6 % 6 (positionnement final de la dernière slide) = le résultat du restant est de 0. Donc le résultat nous ramene automatiquement a l'index d'origine le 0.
    
    //ici on affiche le nouvel index. 
    showSlide(index);
}

// variable qui lance le slider automatiquement
let autoSlide = setInterval(nextSlide, interval);
// Fonction pour permettre de cliquer sur les dots pour changer manuellement de slide.
//je permets a l'utilisateur de cliquer sur un dot pour pouvoir changer d'image manuellement.
dots.forEach((dot, i) => {
    //action qui va se passer au moment ou je vais cliquer sur un bouton. 
    dot.addEventListener('click', () => {
        //ici (clearInterval) est une sorte d'interrupteur qui permet de stopper le déroulement automatique du slide.
        clearInterval(autoSlide);
        //je met a jour l'index pour qu'il corresponde au dot cliqué. 
        index = i;
        // on affiche l'image sélectionner
        showSlide(index);
        // La je relance le défilement automatique.
        autoSlide = setInterval(nextSlide, interval); // redémarre le déroulement
    });
});
