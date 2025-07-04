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


  const indices = {
    java: 0,
    aws: 0,
    ml: 0
  };

  function updateCarousel(category) {
    const cards = document.querySelectorAll(`#${category}-carousel .project-card`);
    cards.forEach((card, i) => {
      card.classList.toggle("active", i === indices[category]);
    });
  }
  function updateCarousel(category) {
  const cards = document.querySelectorAll(`#${category}-carousel .project-card`);
  const dotContainer = document.getElementById(`${category}-dots`);
  dotContainer.innerHTML = ''; // Clear old dots

  cards.forEach((card, i) => {
    card.classList.toggle("active", i === indices[category]);

    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (i === indices[category]) dot.classList.add("active");

    dot.addEventListener("click", () => {
      indices[category] = i;
      updateCarousel(category);
    });

    dotContainer.appendChild(dot);
  });
}


  function prevSlide(category) {
    const cards = document.querySelectorAll(`#${category}-carousel .project-card`);
    indices[category] = (indices[category] - 1 + cards.length) % cards.length;
    updateCarousel(category);
  }

  function nextSlide(category) {
    const cards = document.querySelectorAll(`#${category}-carousel .project-card`);
    indices[category] = (indices[category] + 1) % cards.length;
    updateCarousel(category);
  }

  function showCategory(category) {
    const categories = ['java', 'aws', 'ml'];
    categories.forEach(cat => {
      const section = document.getElementById(`${cat}-category`);
      const tab = document.querySelector(`.tab-btn[onclick="showCategory('${cat}')"]`);
      if (cat === category) {
        section.style.display = 'block';
        tab.classList.add('active');
        updateCarousel(cat); // Ensure the first card shows
      } else {
        section.style.display = 'none';
        tab.classList.remove('active');
      }
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    showCategory('java'); // Set default view
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