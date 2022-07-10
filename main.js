let toggleButton = document.querySelector(".mobile-nav-toggle")
let navbar = document.querySelector("#navbar")

toggleButton.addEventListener("click", () => {
  navbar.classList.toggle("navbar-mobile")
  toggleButton.classList.toggle('bi-list')
  toggleButton.classList.toggle('bi-x')
})