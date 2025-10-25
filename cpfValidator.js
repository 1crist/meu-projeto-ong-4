export function validateCPF(input) {
  if (!input) return false;
  const num = input.replace(/\D/g, "");
  if (num.length !== 11 || /^(\d)\1{10}$/.test(num)) return false;

  let sum = 0;
  for (let i = 0; i < 9; i++) sum += parseInt(num[i]) * (10 - i);
  let d1 = (sum * 10) % 11;
  if (d1 === 10) d1 = 0;
  if (d1 !== parseInt(num[9])) return false;

  sum = 0;
  for (let i = 0; i < 10; i++) sum += parseInt(num[i]) * (11 - i);
  let d2 = (sum * 10) % 11;
  if (d2 === 10) d2 = 0;
  if (d2 !== parseInt(num[10])) return false;

  return true;
}
