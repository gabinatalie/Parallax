const hamburgerIcon = document.querySelector(".hamburguer-container");
const navMenu = document.querySelector(".nav-menu");


// Quando o menu hambúrguer for clicado, alterna a exibição das menus
hamburgerIcon.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
