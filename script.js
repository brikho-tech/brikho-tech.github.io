// Récupère toutes les images cliquables
const images = document.querySelectorAll('.histoire-photo');
const modal = document.getElementById('myModal');
const modalImg = document.getElementById('modalImage');
const closeBtn = document.querySelector('.close');

// Ajoute un événement de clic sur chaque image
images.forEach(image => {
  image.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalImg.src = image.src;
  });
});

// Ferme la modale quand on clique sur la croix
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Ferme la modale quand on clique en dehors de l'image
modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
// Récupère les cartes des membres et la modale
const membreCards = document.querySelectorAll('.membre-card');
const profilModal = document.getElementById('profilModal');
const profilModalPhoto = document.getElementById('profilModalPhoto');
const profilModalNom = document.getElementById('profilModalNom');
const profilModalRole = document.getElementById('profilModalRole');
const profilModalBio = document.getElementById('profilModalBio');
const profilClose = document.querySelector('.profil-close');

// Ouvre la modale avec les infos du membre cliqué
membreCards.forEach(card => {
  card.addEventListener('click', () => {
    const photo = card.querySelector('.membre-photo').src;
    const nom = card.querySelector('.membre-nom').textContent;
    const role = card.querySelector('.membre-role').textContent;
    const bio = card.querySelector('.membre-bio').textContent;

    profilModalPhoto.src = photo;
    profilModalNom.textContent = nom;
    profilModalRole.textContent = role;
    profilModalBio.textContent = bio;

    profilModal.style.display = 'flex';
    setTimeout(() => {
      profilModal.style.opacity = '1';
    }, 10);
  });
});

// Ferme la modale
profilClose.addEventListener('click', () => {
  profilModal.style.opacity = '0';
  setTimeout(() => {
    profilModal.style.display = 'none';
  }, 300);
});

// Ferme la modale en cliquant en dehors
profilModal.addEventListener('click', (event) => {
  if (event.target === profilModal) {
    profilModal.style.opacity = '0';
    setTimeout(() => {
      profilModal.style.display = 'none';
    }, 300);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  // ... (ton code existant pour la modale)

  // Gestion du contenu long dans la bio
  const bioElement = document.getElementById('profilModalBio');
  if (bioElement) {
    if (bioElement.scrollHeight > bioElement.clientHeight) {
      const toggleButton = document.createElement('button');
      toggleButton.textContent = 'Voir plus';
      toggleButton.style.marginTop = '10px';
      toggleButton.style.alignSelf = 'flex-start';
      toggleButton.style.background = 'none';
      toggleButton.style.border = 'none';
      toggleButton.style.color = '#6a11cb';
      toggleButton.style.cursor = 'pointer';
      toggleButton.style.fontFamily = 'Roboto, sans-serif';

      toggleButton.addEventListener('click', () => {
        if (bioElement.style.maxHeight === 'none') {
          bioElement.style.maxHeight = '280px';
          toggleButton.textContent = 'Voir plus';
        } else {
          bioElement.style.maxHeight = 'none';
          toggleButton.textContent = 'Voir moins';
        }
      });

      bioElement.parentNode.appendChild(toggleButton);
    }
  }
});
