// Fade-in animation on scroll
const fadeEls = document.querySelectorAll('.fade-in');
function fadeInOnScroll() {
  fadeEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('DOMContentLoaded', fadeInOnScroll);

document.querySelectorAll(".accordion-toggle").forEach(button => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;
    const arrow = button.querySelector(".arrow");
    const isActive = button.classList.contains("active");

    if (isActive) {
      button.classList.remove("active");
      content.style.display = "none";
      arrow.innerHTML = "&#709;";
      button.setAttribute("aria-expanded", "false");  
    } else {
      button.classList.add("active");
      content.style.display = "block";
      arrow.innerHTML = "&#708;";
      button.setAttribute("aria-expanded", "true"); 
    }
    
  });
});

  document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".project-card");
    const leftBtn = document.querySelector(".carousel-btn.left");
    const rightBtn = document.querySelector(".carousel-btn.right");

    let currentIndex = 0;

    function updateCarousel(index) {
      cards.forEach((card, i) => {
        card.classList.toggle("active", i === index);
      });
    }

    updateCarousel(currentIndex);

    leftBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + cards.length) % cards.length;
      updateCarousel(currentIndex);
    });

    rightBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % cards.length;
      updateCarousel(currentIndex);
    });
  });

    const cards = document.querySelectorAll('.project-card');
  const dots = document.querySelectorAll('.dot');
  const leftBtn = document.querySelector('.carousel-btn.left');
  const rightBtn = document.querySelector('.carousel-btn.right');

  let currentIndex = 0;

  function showSlide(index) {
    // Hide all cards and remove active dot
    cards.forEach(card => card.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    // Show the selected card and set corresponding dot active
    cards[index].classList.add('active');
    dots[index].classList.add('active');

    currentIndex = index;
  }

  leftBtn.addEventListener('click', () => {
    const newIndex = (currentIndex - 1 + cards.length) % cards.length;
    showSlide(newIndex);
  });

  rightBtn.addEventListener('click', () => {
    const newIndex = (currentIndex + 1) % cards.length;
    showSlide(newIndex);
  });

  // Optional: clicking on a dot navigates to that slide
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => showSlide(index));
  });

// Download Resume
document.getElementById('downloadResume').addEventListener('click', function() {
  const link = document.createElement('a');
  link.href = 'VigneshResume.pdf';
  link.download = 'VigneshResume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});