// Elements
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// Toggle sidebar
if (sidebarBtn) {
  sidebarBtn.addEventListener("click", function () {
    sidebar.classList.toggle("active");
    this.classList.toggle("active");
  });
}

// Navigation
document.addEventListener('DOMContentLoaded', function() {
  // Select all navigation buttons and pages
  const navLinks = document.querySelectorAll('[data-nav-link]');
  const pages = document.querySelectorAll('[data-page]');
  
  // Add click event to each navigation button
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      // Get the button text (lowercase) - this will match the page identifier
      const pageName = this.textContent.trim().toLowerCase();
      
      // Remove active class from all navigation buttons
      navLinks.forEach(nav => {
        nav.classList.remove('active');
      });
      
      // Add active class to clicked button
      this.classList.add('active');
      
      // Hide all pages
      pages.forEach(page => {
        page.classList.remove('active');
      });
      
      // Show the page that corresponds to the clicked button
      const targetPage = document.querySelector(`[data-page="${pageName}"]`);
      if (targetPage) {
        targetPage.classList.add('active');
      }
    });
  });
  
  // Set "Projects" as the default active page
  const projectsNav = document.querySelector('[data-nav-link]:nth-child(4)');
  if (projectsNav) {
    projectsNav.click();
  }
});
