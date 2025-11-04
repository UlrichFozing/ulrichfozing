/**
 * 
 */
// js/typewriter.js

// Le texte complet à afficher lettre par lettre



const textToType = "Welcome to my eportfolio ! After studying in ENSPY for fours Years, I am currently a proud student at ENSEEIHT, a prestigious engineering graduate school in Toulouse. With a strong passion for technology and innovation, I am pursuing a degree in Computer Engineering, aiming to build a career in this field.";

// L'élément HTML où le texte sera affiché
const textElement = document.getElementById('typewriter-text');

// Vitesse de frappe en millisecondes (plus la valeur est faible, plus c'est rapide)
const typingSpeed = 25; 

let charIndex = 0;

function typeWriter() {
  if (charIndex < textToType.length) {
    // Ajouter la prochaine lettre
    textElement.innerHTML += textToType.charAt(charIndex);
    charIndex++;

    // Appeler la fonction à nouveau après un délai
    setTimeout(typeWriter, typingSpeed);
  } else {
    // Optionnel : ajouter le reste du texte si vous l'avez retiré du HTML
    textElement.innerHTML = textToType; 
  }
}

// Lancer l'animation une fois que la page est chargée
window.onload = function() {
    typeWriter();
};