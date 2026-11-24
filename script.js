// Small interactions for the static portfolio; no libraries or build tools needed.
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Open navigation menu' : 'Close navigation menu');
  menuButton.innerHTML = isOpen ? '<span aria-hidden="true">☰</span>' : '<span aria-hidden="true">×</span>';
  navigation.classList.toggle('is-open', !isOpen);
});

navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation menu');
    menuButton.innerHTML = '<span aria-hidden="true">☰</span>';
    navigation.classList.remove('is-open');
  });
});

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealItems = document.querySelectorAll('[data-reveal]');
if (reducedMotion || !('IntersectionObserver' in window)) {
  revealItems.forEach((item) => item.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => observer.observe(item));
}

const rotatingWords = ['curious by nature', 'learning by building', 'thinking in systems'];
const rotatingWord = document.querySelector('#rotating-word');
if (!reducedMotion) {
  let wordIndex = 0;
  window.setInterval(() => {
    wordIndex = (wordIndex + 1) % rotatingWords.length;
    rotatingWord.textContent = rotatingWords[wordIndex];
  }, 3200);
}

const profilePhoto = document.querySelector('#profile-photo');
profilePhoto.addEventListener('load', () => {
  profilePhoto.hidden = false;
  document.querySelector('#portrait-placeholder').hidden = true;
});
profilePhoto.addEventListener('error', () => { profilePhoto.hidden = true; });

// Render the certificate link only when the optional PDF is present.
const certificateLink = document.querySelector('#certificate-link');
fetch(certificateLink.href, { method: 'HEAD' }).then((response) => {
  if (response.ok && (response.headers.get('content-type') || '').includes('application/pdf')) {
    certificateLink.hidden = false;
  }
}).catch(() => {});

document.querySelector('#year').textContent = new Date().getFullYear();

document.querySelector('#contact-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const subject = encodeURIComponent(`Portfolio message from ${data.get('name')}`);
  const body = encodeURIComponent(`Hi Shubhi,\n\n${data.get('message')}\n\nFrom: ${data.get('name')}\nReply to: ${data.get('email')}`);
  document.querySelector('#form-message').hidden = false;
  document.querySelector('#form-message').textContent = 'Your email app is opening with the message details.';
  window.location.href = `mailto:awasthishubhi70@gmail.com?subject=${subject}&body=${body}`;
});
