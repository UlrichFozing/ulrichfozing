/**
 * 
 */
// js/chat-widget.js

// js/chat-widget.js (en haut du fichier)

const schedule = [
    "Monday: 12:00 PM - 2:00 PM",
    "Tuesday: 12:00 PM - 2:00 PM",
    "Wednesday: 12:00 PM - 2:00 PM",
    "Thursday: 12:00 PM - 2:00 PM",
    "Friday: 12:00 PM - 2:00 PM",
    "Saturday: 9:00 AM - 4:00 PM"
];

// ... (Vos autres variables et fonctions) ...

// js/chat-widget.js (AJOUTER CES FONCTIONS)

function showAvailabilities() {
    const availabilityList = document.getElementById('availability-list');
    let htmlContent = '';

    // 1. Générer la liste à partir du tableau 'schedule'
    schedule.forEach(dayTime => {
        htmlContent += `<li>${dayTime}</li>`;
    });

    availabilityList.innerHTML = htmlContent;

    // 2. Afficher la section et cacher les autres
    document.getElementById('chat-menu').style.display = 'none';
    document.getElementById('chat-form').style.display = 'none';
    document.getElementById('chat-availability').style.display = 'block';
}

// Mise à jour de la fonction showMenu() pour cacher également les disponibilités
function showMenu() {
    document.getElementById('chat-menu').style.display = 'block';
    document.getElementById('chat-form').style.display = 'none';
    document.getElementById('chat-availability').style.display = 'none'; // Ligne ajoutée ou modifiée
}

// Le reste du code (toggleChat, showForm, etc.) reste inchangé






function toggleChat() {
    const chatButton = document.getElementById('chat-button');
    const chatBox = document.getElementById('chat-box');

    // Vérifie si la boîte de chat est visible
    if (chatBox.style.display === 'none' || chatBox.style.display === '') {
        // Si cachée, on l'affiche et on cache le bouton
        chatBox.style.display = 'block';
        chatButton.style.display = 'none';
    } else {
        // Si affichée, on la cache et on affiche le bouton
        chatBox.style.display = 'none';
        chatButton.style.display = 'block';
    }
}
/*
// Assurez-vous que le bouton est visible au chargement de la page et la boîte cachée
window.onload = function() {
    document.getElementById('chat-box').style.display = 'none';
    document.getElementById('chat-button').style.display = 'block';
}
*/
// NOUVEAU CODE : 
document.addEventListener('DOMContentLoaded', function() {
    const chatBox = document.getElementById('chat-box');
    const chatButton = document.getElementById('chat-button');
    if (chatBox && chatButton) {
        chatBox.style.display = 'none';
        chatButton.style.display = 'block';
    }
});


// js/chat-widget.js (AJOUTER CES FONCTIONS)

function showForm() {
    document.getElementById('chat-menu').style.display = 'none';
    document.getElementById('chat-form').style.display = 'block';
}

function showMenu() {
    document.getElementById('chat-menu').style.display = 'block';
    document.getElementById('chat-form').style.display = 'none';
}

// Fonction pour afficher le nom du fichier sélectionné (Optionnel mais joli)
document.addEventListener('DOMContentLoaded', function() {
    const fileInput = document.getElementById('file-input');
    const fileNameSpan = document.getElementById('file-name');

    if (fileInput && fileNameSpan) {
        fileInput.addEventListener('change', function() {
            if (this.files.length > 0) {
                fileNameSpan.textContent = this.files[0].name;
            } else {
                fileNameSpan.textContent = 'No file selected.';
            }
        });
    }
});

// Les autres fonctions (toggleChat, etc.) restent inchangées.




