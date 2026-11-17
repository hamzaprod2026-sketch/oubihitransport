const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.textContent = open ? '×' : '☰';
});
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.textContent = '☰';
  });
});


// FORMULAIRE DE CONTACT

const contactModal = document.getElementById('contactModal');
const openContact = document.getElementById('openContact');
const closeContact = document.getElementById('closeContact');

// Ouvrir le formulaire
if (openContact) {
    openContact.addEventListener('click', function(e) {
        e.preventDefault();
        contactModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
}

// Fermer le formulaire
function closeModal() {
    contactModal.classList.remove('active');
    document.body.style.overflow = '';
}

closeContact.addEventListener('click', closeModal);

// Fermer en cliquant sur le fond noir
contactModal.addEventListener('click', function(e) {
    if (e.target === contactModal) {
        closeModal();
    }
});

// Fermer avec la touche Échap
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Empêcher un envoi non configuré
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Le formulaire est prêt. Il reste à connecter le système d'envoi.");
});

