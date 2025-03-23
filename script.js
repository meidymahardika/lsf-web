// script.js
document.addEventListener('DOMContentLoaded', function() {
  const currentPath = window.location.pathname;
  const  pathLength = currentPath.split("/").length
  console.log(9, pathLength);
  
  const basePath = pathLength === 3 ? '../' : '';

  // Fetch the header content
  fetch(`${basePath}components/header.html`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to load header');
      }
      return response.text();
    })
    .then(data => {
      // Insert the header HTML into the container
      document.getElementById('header-container').innerHTML = data;
      
      // Highlight current page in navbar
      highlightCurrentPage();
    })
    .catch(error => {
      console.error('Error loading header:', error);
    });
  
  // Fetch the footer content
  fetch(`${basePath}components/footer.html`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to load footer');
      }
      return response.text();
    })
    .then(data => {
      // Insert the footer HTML into the container
      document.getElementById('footer-container').innerHTML = data;
    })
    .catch(error => {
      console.error('Error loading footer:', error);
    });
  
  // Function to highlight the current page in navbar
  function highlightCurrentPage() {
    // Get current page filename
    const currentSection = window.location.pathname.split('/')[1];
    
    console.log(1, currentSection);
    
    // Set active class based on current page
    if (currentSection === 'index.html' || currentSection === '') {
      document.getElementById('sec-home')?.classList.add('active');
    } else if (currentSection === 'tentang') {
      document.getElementById('sec-tentang')?.classList.add('active');
    } else if (currentSection === 'layanan') {
      document.getElementById('sec-layanan')?.classList.add('active');
    } else if (currentSection === 'sekretariat') {
      document.getElementById('sec-sekretariat')?.classList.add('active');
    }
  }
});

document.addEventListener("DOMContentLoaded", function() {
  var navbarToggler = document.querySelector(".navbar-toggler");
  var navbarCollapse = document.querySelector("#navbarNav");

  navbarToggler.addEventListener("click", function() {
      navbarCollapse.classList.toggle("show");
  });

  // Close menu when clicking outside
  document.addEventListener("click", function(event) {
      if (!navbarToggler.contains(event.target) && !navbarCollapse.contains(event.target)) {
          navbarCollapse.classList.remove("show");
      }
  });
});

document.getElementById("themeToggle").addEventListener("change", function() {
  let themeText = document.getElementById("themeText");
  if (this.checked) {
      themeText.textContent = "light";
      themeText.style.zIndex = "1"; // Ensure it's a string
      themeText.style.position = "relative";
      themeText.style.right = "8px"; // Add 'px' to make it work
      themeText.style.left = ""; // Correct way to remove 'left' style
  } else {
      themeText.textContent = "dark";
      themeText.style.zIndex = "1"; // Ensure it's a string
      themeText.style.position = "relative";
      themeText.style.left = "5px"; // Add 'px' to make it work
  }
});