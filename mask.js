export function applyMasks() {
  const cpf = document.querySelector("#cpf");
  const telefone = document.querySelector("#telefone");

  if (cpf) {
    cpf.addEventListener("input", e => {
      let v = e.target.value.replace(/\D/g, "").slice(0, 11);
      v = v.replace(/(\d{3})(\d)/, "$1.$2");
      v = v.replace(/(\d{3})(\d)/, "$1.$2");
      v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
      e.target.value = v;
    });
  }

  if (telefone) {
    telefone.addEventListener("input", e => {
      let v = e.target.value.replace(/\D/g, "").slice(0, 11);
      if (v.length > 10)
        v = v.replace(/^(\d{2})(\d{5})(\d{4}).*/, "($1) $2-$3");
      else
        v = v.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, "($1) $2-$3");
      e.target.value = v;
    });
  }
}
