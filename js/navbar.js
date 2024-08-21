// Replace the navigation bar placeholder with the corresponding html page
fetch("../navbar.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("navbar-placeholder").innerHTML = data;
    // Now that the HTML is loaded, query all <a> elements within the .navbar-nav class
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    // Extract the href attribute from each <a> element
    const hrefs = Array.from(navLinks).map((link) => link.getAttribute("href"));

    // Log the hrefs to the console
    console.log(hrefs);

    // Highlight the active link based on the current URL
    const currentPath = window.location.pathname;
    navLinks.forEach((link) => {
      if (link.getAttribute("href") === currentPath.split("/").pop()) {
        link.classList.add("active");
      }
    });
  });
