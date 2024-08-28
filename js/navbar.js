// Replace the navigation bar placeholder with the corresponding html page
fetch("../navbar.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("navbar-placeholder").innerHTML = data;

    // Allow clicking on dropdown parent link
    document
      .querySelectorAll(".navbar .dropdown-toggle")
      .forEach(function (dropdown) {
        dropdown.addEventListener("click", function (e) {
          if (window.innerWidth >= 992) {
            // Ensure this only applies on larger screens (desktop)
            e.stopPropagation(); // Stop the click from triggering the dropdown
            window.location.href = this.getAttribute("href"); // Navigate to the href link
          }
        });
      });
  });
