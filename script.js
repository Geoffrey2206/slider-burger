const slides = document.querySelectorAll('.slide'); //variable de toutes les images
const dots = document.querySelectorAll('.dot'); //tous les dots sont dans une variable.
let currentIndex = 0; //ici c'est l'index de l'image actuelle.

//création d'une fonction pour changer les images.
function changeSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    //Avancer l'index de l'image de 1
    document.querySelector('.slider').style.transform = `translateX(-${currentIndex * 100}%)`;
    //Déplacer le conteneur des images
    dots.forEach((dot, index) => {
        dot.classList.remove('active');
        if (index === currentIndex) {
            dot.classList.add('active');
        }
    });
    //mettre a jour l'état des dots.
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        changeSlide();
    });
});
//fonction pour naviguer vers une image en cliquant sur un dot et changer l'image en fonction du dot cliqué.

setInterval(changeSlide, 3000);
//Défilement automatique toutes les 3 secondes. 

function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('open');
}