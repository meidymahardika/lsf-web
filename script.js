// script.js
document.addEventListener('DOMContentLoaded', function() {
  
  const currentPath = window.location.pathname;
  const  pathLength = currentPath.split("/").length
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

      // set javascript here
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
      
      // let dataTheme = localStorage.getItem("theme");
      // console.log(dataTheme, "dataTheme");
      
      // document.getElementById("themeToggle").addEventListener("change", function() {
        
      //   let themeText = document.getElementById("themeText");
        
      //   if (dataTheme === "light") {
      //     localStorage.setItem("theme", "light");
      //     document.documentElement.setAttribute("data-theme", "light");
      //     themeText.textContent = "light";
      //     themeText.style.zIndex = "1"; // Ensure it's a string
      //     themeText.style.position = "relative";
      //     themeText.style.right = "8px"; // Add 'px' to make it work
      //     themeText.style.left = ""; // Correct way to remove 'left' style
      //   } else {
      //     localStorage.setItem("theme", "dark");
      //     document.documentElement.setAttribute("data-theme", "dark");
      //     themeText.textContent = "dark";
      //     themeText.style.zIndex = "1"; // Ensure it's a string
      //     themeText.style.position = "relative";
      //     themeText.style.left = "5px"; // Add 'px' to make it work
      //   }
      // });

      // Apply theme styles
      function applyTheme(theme) {
        document.documentElement.setAttribute("data-theme", theme);
        themeText.textContent = theme;

        // Position text
        themeText.style.zIndex = "1";
        themeText.style.position = "relative";
        if (theme === "light") {
          themeText.style.right = "8px";
          themeText.style.left = "";
        } else {
          logo.style.display = "none";
          logoDark.style.display = "block";
          themeText.style.left = "5px";
          themeText.style.right = "-5px";
        }

        // Sync all toggles
        themeToggles.forEach(toggle => {
          toggle.checked = theme === "light";
        });
      }

      let dataTheme = localStorage.getItem("theme") || "light"; // Default to light
      const themeToggles = [
        document.getElementById("themeToggle"),
        document.getElementById("themeToggleMobile")
      ].filter(Boolean); // remove nulls

      const themeTexts = document.querySelectorAll("#themeText"); // target all themeText elements

      // Apply theme styles to all
      function applyTheme(theme) {
        document.documentElement.setAttribute("data-theme", theme);
      
        // Update toggle switches
        themeToggles.forEach(toggle => {
          toggle.checked = theme === "light";
        });
      
        // Update text and position styles
        themeTexts.forEach(text => {
          text.textContent = theme;
          text.style.zIndex = "1";
          text.style.position = "relative";
      
          // Apply positioning styles only for desktop screen
          if (window.innerWidth >= 992) {
            if (theme === "light") {
              text.style.right = "8px";
              text.style.left = "";
            } else {
              text.style.left = "5px";
              text.style.right = "-5px";
            }
          } else {
            // Reset on mobile
            text.style.right = "";
            text.style.left = "";
          }
        });
      }

      // Initial setup
      applyTheme(dataTheme);

      // Add toggle listeners
      themeToggles.forEach(toggle => {
        toggle.addEventListener("change", () => {
          const newTheme = toggle.checked ? "light" : "dark";
          localStorage.setItem("theme", newTheme);
          applyTheme(newTheme);
        });
      });
      
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

  // Function to apply the theme
  // function applyTheme(theme) {
  //   document.documentElement.setAttribute("data-theme", theme);
  //   localStorage.setItem("theme", theme);
    
  //   let themeText = document.getElementById("themeText");
  //   let themeToggle = document.getElementById("themeToggle");

  //   if (theme === "light") {
  //     themeText.textContent = "light";
  //     themeText.style.zIndex = "1";
  //     themeText.style.position = "relative";
  //     themeText.style.right = "8px";
  //     themeText.style.left = "";
  //     themeToggle.checked = true; // Ensure toggle is checked
  //   } else {
  //     themeText.textContent = "dark";
  //     themeText.style.zIndex = "1";
  //     themeText.style.position = "relative";
  //     themeText.style.left = "5px";
  //     themeToggle.checked = false; // Ensure toggle is unchecked
  //   }
  // }
});
