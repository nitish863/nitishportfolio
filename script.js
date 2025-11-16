document.addEventListener('DOMContentLoaded', () => {
  const typingText = document.getElementById('typing-text');
  const roles = ["Learner", "Developer", "Creator"];
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const current = roles[roleIndex];
    const displayed = current.substring(0, charIndex);
    typingText.textContent = displayed;

    if (!isDeleting && charIndex < current.length) {
      charIndex++;
      setTimeout(typeEffect, 100);
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      setTimeout(typeEffect, 60);
    } else {
      if (!isDeleting) {
        isDeleting = true;
        setTimeout(typeEffect, 1500);
      } else {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeEffect, 300);
      }
    }
  }
  typeEffect();
});
