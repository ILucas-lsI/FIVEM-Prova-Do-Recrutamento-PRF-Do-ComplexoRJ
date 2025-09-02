function corrigir() {
  const respostasCorretas = {
    q1: 'a',
    q2: 'a',
    q3: 'a',
    q4: 'a',
    q5: 'a',
    q6: 'a',
    q7: 'a',
    q8: 'a',
    q9: 'a',
    q10: 'a',
    q11: 'a',
    q12: 'a',
    q13: 'a',
    q14: 'a',
    q15: 'a',
    q16: 'a',
    q17: 'a',
    q18: 'a',
    q19: 'a',
    q20: 'a'
  };

  let nota = 0;
  let total = Object.keys(respostasCorretas).length;

  for (let q in respostasCorretas) {
    const resposta = document.querySelector(`input[name="${q}"]:checked`);
    if (resposta && resposta.value === respostasCorretas[q]) {
      nota++;
    }
  }

  const porcentagem = (nota / total) * 100;
  const aprovado = porcentagem >= 80;

  const resultado = document.getElementById("resultado");
  resultado.textContent = `Você acertou ${nota} de ${total} questões (${porcentagem.toFixed(1)}%). ${aprovado ? "✅ Aprovado!" : "❌ Reprovado."}`;

  // Desativa todos os inputs para impedir alterações
  const radios = document.querySelectorAll('input[type="radio"]');
  radios.forEach(r => r.disabled = true);

  // Desativa o botão
  document.querySelector('button').disabled = true;
}