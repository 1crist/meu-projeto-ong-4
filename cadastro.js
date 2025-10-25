import { applyMasks } from "../utils/mask.js";
import { validateCPF } from "../utils/cpfValidator.js";

export function cadastroPage() {
  const formSection = document.createElement("section");
  formSection.innerHTML = `
    <h1>Formulário de Cadastro</h1>
    <form id="cadastroForm" novalidate>
      <label for="nome">Nome completo *</label>
      <input id="nome" name="nome" required minlength="2" />

      <label for="email">E-mail *</label>
      <input id="email" name="email" type="email" required />

      <label for="cpf">CPF *</label>
      <input id="cpf" name="cpf" type="text" required placeholder="000.000.000-00" />

      <label for="telefone">Telefone *</label>
      <input id="telefone" name="telefone" type="text" required placeholder="(00) 00000-0000" />

      <button type="submit">Enviar</button>
    </form>
  `;

  // aplica máscaras
  applyMasks();

  // validações de consistência
  const form = formSection.querySelector("#cadastroForm");
  form.addEventListener("submit", e => {
    e.preventDefault();
    const cpf = form.querySelector("#cpf").value;

    if (!validateCPF(cpf)) {
      alert("CPF inválido. Verifique e tente novamente!");
      return;
    }

    if (!form.checkValidity()) {
      alert("Preencha todos os campos corretamente!");
      return;
    }

    alert("Cadastro enviado com sucesso!");
    form.reset();
  });

  return formSection;
}
