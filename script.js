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

      let dataTheme = localStorage.getItem("theme") || "light"; // Default to light if null
      const themeToggle = document.getElementById("themeToggle");
      const themeText = document.getElementById("themeText");

      if (dataTheme === "light") {
        themeText.style.right = "8px";
        themeText.style.left = "";
      } else {
        themeText.style.left = "5px";
        themeText.style.right = "-5px";
      }

      // Apply stored theme on page load
      document.documentElement.setAttribute("data-theme", dataTheme);
      themeText.textContent = dataTheme;
      themeToggle.checked = dataTheme === "light"; // Sync toggle with theme

      themeToggle.addEventListener("change", function () {
        let newTheme = themeToggle.checked ? "light" : "dark"; // Determine new theme

        localStorage.setItem("theme", newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
        themeText.textContent = newTheme;

        // Adjust text positioning
        themeText.style.zIndex = "1";
        themeText.style.position = "relative";
        if (newTheme === "light") {
          themeText.style.right = "8px";
          themeText.style.left = "";
        } else {
          themeText.style.left = "5px";
          themeText.style.right = "-5px";
        }
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
  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    
    let themeText = document.getElementById("themeText");
    let themeToggle = document.getElementById("themeToggle");

    if (theme === "light") {
      themeText.textContent = "light";
      themeText.style.zIndex = "1";
      themeText.style.position = "relative";
      themeText.style.right = "8px";
      themeText.style.left = "";
      themeToggle.checked = true; // Ensure toggle is checked
    } else {
      themeText.textContent = "dark";
      themeText.style.zIndex = "1";
      themeText.style.position = "relative";
      themeText.style.left = "5px";
      themeToggle.checked = false; // Ensure toggle is unchecked
    }
  }
});
