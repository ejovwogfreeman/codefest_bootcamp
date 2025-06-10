// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 1000,
  once: true,
  offset: 100,
  easing: "ease-out-cubic",
});

// Navbar scroll effect
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("mainNavbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const offsetTop = target.offsetTop - 80; // Account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// Testimonial Carousel Functions
let currentTestimonialIndex = 0;
const testimonialSlides = document.querySelectorAll(".testimonial-slide");
const testimonialIndicators = document.querySelectorAll(".indicator");

function showTestimonial(index) {
  // Remove active class from all slides and indicators
  testimonialSlides.forEach((slide) => slide.classList.remove("active"));
  testimonialIndicators.forEach((indicator) =>
    indicator.classList.remove("active")
  );

  // Add active class to current slide and indicator
  testimonialSlides[index].classList.add("active");
  testimonialIndicators[index].classList.add("active");

  currentTestimonialIndex = index;
}

function nextTestimonial() {
  const nextIndex = (currentTestimonialIndex + 1) % testimonialSlides.length;
  showTestimonial(nextIndex);
}

function previousTestimonial() {
  const prevIndex =
    (currentTestimonialIndex - 1 + testimonialSlides.length) %
    testimonialSlides.length;
  showTestimonial(prevIndex);
}

function currentTestimonial(index) {
  showTestimonial(index - 1); // Convert to 0-based index
}

// Auto-play testimonials
setInterval(nextTestimonial, 5000);

// FAQ Toggle Function
function toggleFaq(element) {
  const faqItem = element.parentElement;
  const allFaqItems = document.querySelectorAll(".faq-item");

  // Close all other FAQ items
  allFaqItems.forEach((item) => {
    if (item !== faqItem) {
      item.classList.remove("active");
    }
  });

  // Toggle current FAQ item
  faqItem.classList.toggle("active");
}

// Floating animations for hero shapes
function animateFloatingShapes() {
  const shapes = document.querySelectorAll(".floating-shape");
  shapes.forEach((shape, index) => {
    const randomDelay = Math.random() * 2000;
    const randomDuration = 6000 + Math.random() * 4000;

    setTimeout(() => {
      shape.style.animation = `floating ${randomDuration}ms ease-in-out infinite`;
    }, randomDelay);
  });
}

// Parallax effect for hero section
window.addEventListener("scroll", function () {
  const scrolled = window.pageYOffset;
  const heroShapes = document.querySelectorAll(".floating-shape");

  heroShapes.forEach((shape, index) => {
    const speed = 0.5 + index * 0.1;
    shape.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

// Card hover effects
document
  .querySelectorAll(".modern-card, .expo-card, .schedule-card")
  .forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px) scale(1.02)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
    });
  });

// Video overlay interaction
const videoContainer = document.querySelector(".video-container");
if (videoContainer) {
  videoContainer.addEventListener("mouseenter", function () {
    const overlay = this.querySelector(".video-overlay");
    if (overlay) {
      overlay.style.opacity = "1";
    }
  });

  videoContainer.addEventListener("mouseleave", function () {
    const overlay = this.querySelector(".video-overlay");
    if (overlay) {
      overlay.style.opacity = "0";
    }
  });
}

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-in");
    }
  });
}, observerOptions);

// Observe elements for animation
document
  .querySelectorAll(
    ".modern-card, .expo-card, .schedule-card, .testimonial-card"
  )
  .forEach((el) => {
    observer.observe(el);
  });

// Counter animation for hero stats
// function animateCounters() {
//   const counters = document.querySelectorAll(".stat-number");

//   counters.forEach((counter) => {
//     const target = parseInt(counter.innerText);
//     const increment = target / 100;
//     let current = 0;

//     const timer = setInterval(() => {
//       current += increment;
//       if (current >= target) {
//         counter.innerText = target;
//         clearInterval(timer);
//       } else {
//         counter.innerText = Math.floor(current);
//       }
//     }, 20);
//   });
// }

// Mobile menu improvements
const navbarToggler = document.querySelector(".navbar-toggler");
const navbarCollapse = document.querySelector(".navbar-collapse");

if (navbarToggler) {
  navbarToggler.addEventListener("click", function () {
    this.classList.toggle("active");
  });
}

// Close mobile menu when clicking on a link
document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
  link.addEventListener("click", function () {
    const navbarCollapse = document.querySelector(".navbar-collapse");
    const navbarToggler = document.querySelector(".navbar-toggler");

    if (navbarCollapse.classList.contains("show")) {
      navbarToggler.click();
    }
  });
});

// Add loading animation
window.addEventListener("load", function () {
  document.body.classList.add("loaded");

  // Trigger counter animation after page load
  setTimeout(animateCounters, 1000);

  // Initialize floating shapes animation
  animateFloatingShapes();
});

// Registration button click tracking
document
  .querySelectorAll('a[href="#register"], a[href="register.html"]')
  .forEach((button) => {
    button.addEventListener("click", function (e) {
      // Add click animation
      this.style.transform = "scale(0.95)";
      setTimeout(() => {
        this.style.transform = "";
      }, 150);

      // You can add analytics tracking here
      console.log("Registration button clicked");
    });
  });

// Enhanced scroll reveal animations
function revealOnScroll() {
  const reveals = document.querySelectorAll(
    ".modern-card, .expo-card, .schedule-card"
  );

  reveals.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add("reveal-active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

// Add CSS for reveal animation
const style = document.createElement("style");
style.textContent = `
  .modern-card, .expo-card, .schedule-card {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s ease;
  }
  
  .reveal-active {
    opacity: 1;
    transform: translateY(0);
  }
  
  .loaded {
    overflow-x: hidden;
  }
  
  .navbar-toggler.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }
  
  .navbar-toggler.active span:nth-child(2) {
    opacity: 0;
  }
  
  .navbar-toggler.active span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -6px);
  }
`;
document.head.appendChild(style);

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Apply debounce to scroll events
const debouncedScrollHandler = debounce(() => {
  revealOnScroll();
  // Add other scroll-dependent functions here
}, 10);

window.addEventListener("scroll", debouncedScrollHandler);

// Add touch support for mobile devices
if ("ontouchstart" in window) {
  document.body.classList.add("touch-device");

  // Add touch-specific styles
  const touchStyle = document.createElement("style");
  touchStyle.textContent = `
    .touch-device .modern-card:hover,
    .touch-device .expo-card:hover,
    .touch-device .schedule-card:hover {
      transform: none;
    }
    
    .touch-device .modern-card:active,
    .touch-device .expo-card:active,
    .touch-device .schedule-card:active {
      transform: scale(0.98);
    }
  `;
  document.head.appendChild(touchStyle);
}
