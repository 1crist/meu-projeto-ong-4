import { homePage } from "./pages/home.js";
import { projetosPage } from "./pages/projetos.js";
import { cadastroPage } from "./pages/cadastro.js";

const app = document.getElementById("app");
const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

// Rotas simples
const routes = {
  home: homePage,
  projetos: projetosPage,
  cadastro: cadastroPage,
};

// Função de navegação
function navigate(route) {
  const page = routes[route] || homePage;
  app.innerHTML = "";
  app.appendChild(page());
}

// Escuta cliques nos links
document.querySelectorAll("[data-route]").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const route = link.getAttribute("data-route");
    navigate(route);
  });
});

// Carrega rota inicial
const initialRoute = window.location.hash.replace("#", "") || "home";
navigate(initialRoute);
