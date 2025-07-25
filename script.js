// === Fade-in animation on scroll ===
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

      // Close all open accordions
      document.querySelectorAll(".accordion-toggle").forEach(btn => {
        btn.classList.remove("active");
        btn.nextElementSibling.style.display = "none";
        btn.querySelector(".arrow").innerHTML = "&#709;";
        btn.setAttribute("aria-expanded", "false");
      });

      // If this was not already active, open it
      if (!isActive) {
        button.classList.add("active");
        content.style.display = "block";
        arrow.innerHTML = "&#708;";
        button.setAttribute("aria-expanded", "true");
      }
    });
  });

// === Single Project Carousel ===
let currentProject = 0;
const projects = document.querySelectorAll(".project-card");
const dotsContainer = document.getElementById("carousel-dots");

// Create dots
projects.forEach((_, index) => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  if (index === 0) dot.classList.add("active");

  dot.addEventListener("click", () => showProject(index));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

function showProject(index) {
  projects.forEach((proj, i) => {
    proj.classList.remove("active");
    dots[i].classList.remove("active");
  });

  projects[index].classList.add("active");
  dots[index].classList.add("active");
  currentProject = index;
}

function nextProject() {
  currentProject = (currentProject + 1) % projects.length;
  showProject(currentProject);
}

function prevProject() {
  currentProject = (currentProject - 1 + projects.length) % projects.length;
  showProject(currentProject);
}

// === Download Resume ===
const resumeBtn = document.getElementById('downloadResume');
if (resumeBtn) {
  resumeBtn.addEventListener('click', function () {
    const link = document.createElement('a');
    link.href = 'Resume.pdf';
    link.download = 'Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}
