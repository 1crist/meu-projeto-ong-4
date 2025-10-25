export function projetosPage() {
  const section = document.createElement("section");
  section.innerHTML = `
    <h1>Projetos Sociais</h1>
    <h2>Voluntariado</h2>
    <p>Participe como voluntário: apoio pedagógico, oficinas e atividades com crianças e idosos.</p>
    <img src="images/voluntarios.jpg" alt="Voluntários em ação" />
    <p>Para se candidatar, acesse o formulário na aba "Cadastro".</p>

    <h2>Como doar</h2>
    <ul>
      <li>Doações financeiras (PIX): <strong>00000000-0000</strong></li>
      <li>Doações de alimentos, roupas e material escolar na nossa sede.</li>
    </ul>
  `;
  return section;
}
