const buttons = document.querySelectorAll(".menu-buttons button");
const cards = document.querySelectorAll(".menu-card");

// Function to handle filtering logic
function filterMenu(filterValue) {
  cards.forEach((card) => {
    if (filterValue === "all") {
      card.style.display = "block";
    } else if (card.dataset.category === filterValue) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// Set initial state: hide all items on page load
filterMenu("none");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    buttons.forEach((btn) => btn.classList.remove("active"));

    // Add active class to clicked button
    button.classList.add("active");

    // Filter cards based on button data-filter attribute
    const filter = button.dataset.filter;
    filterMenu(filter);
  });
});

const sidebarToggle = document.getElementById("sidebar-toggle");
const closeToggle = document.getElementById("close-toggle");
const mobileMenu = document.getElementById("mobile-menu");

// Open menu
sidebarToggle.addEventListener("click", () => {
  mobileMenu.classList.add("active");
});

// Close menu
closeToggle.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});
