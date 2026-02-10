'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [overlay, navCloseBtn, navOpenBtn];

/**
 * close navbar when click on any navbar link
 */

for (let i = 0; i < navbarLinks.length; i++) { navElemArr.push(navbarLinks[i]); }

/**
 * addd event on all elements for toggling navbar
 */

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    elemToggleFunc(navbar);
    elemToggleFunc(overlay);
  });
}



/**
 * header active state
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 400 ? header.classList.add("active")
    : header.classList.remove("active");
});



/**
 * Smooth scrolling for anchor links
 */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    if (this.getAttribute('href') !== '#') {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        if (navbar.classList.contains('active')) {
          elemToggleFunc(navbar);
          elemToggleFunc(overlay);
        }
      }
    }
  });
});



/**
 * Contact button functionality
 */

const contactButtons = document.querySelectorAll('.btn, .header-top-btn, .cta-btn, .header-bottom-actions-btn[aria-label="Contact"]');
contactButtons.forEach(button => {
  button.addEventListener('click', function(e) {
    if (!this.getAttribute('href') || !this.getAttribute('href').startsWith('#')) {
      e.preventDefault();
      const contactSection = document.querySelector('#contact');
      if (contactSection) {
        window.scrollTo({
          top: contactSection.offsetTop - 100,
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        if (navbar.classList.contains('active')) {
          elemToggleFunc(navbar);
          elemToggleFunc(overlay);
        }
      }
    }
  });
});



/**
 * Initialize page
 */

document.addEventListener('DOMContentLoaded', function() {
  // Add active class to current nav link
  const currentPath = window.location.hash;
  if (currentPath) {
    const currentLink = document.querySelector(`.navbar-link[href="${currentPath}"]`);
    if (currentLink) {
      currentLink.classList.add('active');
    }
  }
  
  // Add click event to all service cards
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach(card => {
    card.addEventListener('click', function() {
      const link = this.querySelector('.card-link');
      if (link) {
        link.click();
      }
    });
  });
});