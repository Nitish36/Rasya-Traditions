// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// FAQ Accordion Logic
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  
  question.addEventListener('click', () => {
    // Check if the clicked item is already active
    const isActive = item.classList.contains('active');
    
    // Close all other FAQ items (Optional - remove this part if you want multiple open at once)
    faqItems.forEach(otherItem => {
      otherItem.classList.remove('active');
    });

    // If it wasn't active, open it
    if (!isActive) {
      item.classList.add('active');
    }
  });
});


// Video hover play logic
const videoCards = document.querySelectorAll('.video-card');

videoCards.forEach(card => {
  const video = card.querySelector('video');

  card.addEventListener('mouseenter', () => {
    video.play();
  });

  card.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0; // Reset video to start
  });
});