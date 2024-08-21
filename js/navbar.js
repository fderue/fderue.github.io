// Replace the navigation bar placeholder with the corresponding html page
fetch("../navbar.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("navbar-placeholder").innerHTML = data;
    // Now that the HTML is loaded, query all <a> elements within the .navbar-nav class
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    // Highlight the active link based on the current URL
    const currentPath = window.location.pathname;
    navLinks.forEach((link) => {
      if (currentPath.includes(link.getAttribute("href"))) {
        link.classList.add("active");
      }
    });
  });
