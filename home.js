export function homePage() {
  const section = document.createElement("section");
  section.innerHTML = `
    <h1>ONG Exemplo — Transformando Vidas</h1>
    <p>Atuamos com projetos sociais nas áreas de educação, saúde e assistência. Venha conhecer e contribuir!</p>
    <img src="images/organizacao.jpg" alt="Equipe de voluntários" class="hero-img" />
    <h2>Sobre a organização</h2>
    <p>Nossa missão é promover inclusão social por meio de projetos comunitários e programas de capacitação.</p>
  `;
  return section;
}
