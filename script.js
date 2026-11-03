// Busca o formulário e seus campos pelos IDs definidos no index.html.
const formulario = document.getElementById("formulario");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const mensagem = document.getElementById("mensagem");
const erroFormulario = document.getElementById("erro-formulario");

// O evento submit funciona tanto ao clicar em Enviar quanto ao confirmar pelo teclado.
formulario.addEventListener("submit", function (evento) {
  // Impede o envio padrão: esta atividade não possui servidor para receber os dados.
  evento.preventDefault();

  // value lê o conteúdo; trim remove espaços do início e do fim antes da conferência.
  const nomeDigitado = nome.value.trim();
  const emailDigitado = email.value.trim();
  const mensagemDigitada = mensagem.value.trim();

  // Limpa o aviso anterior antes de verificar uma nova tentativa.
  erroFormulario.textContent = "";

  // Um campo preenchido somente com espaços também é considerado vazio.
  if (nomeDigitado === "") {
    erroFormulario.textContent = "Preencha seu nome antes de continuar.";
    nome.focus();
    return;
  }

  if (emailDigitado === "") {
    erroFormulario.textContent = "Preencha seu e-mail antes de continuar.";
    email.focus();
    return;
  }

  // Verificação básica: exige texto antes e depois do @, um ponto no domínio e nenhum espaço.
  const emailValido = /^[^\s@]+@[^\s@.]+(\.[^\s@.]+)+$/.test(emailDigitado);

  // typeMismatch também informa se o navegador considera o formato incompatível com type="email".
  if (!emailValido || emailDigitado.includes("..") || email.validity.typeMismatch) {
    erroFormulario.textContent = "Digite um e-mail válido, como nome@exemplo.com.";
    email.focus();
    return;
  }

  if (mensagemDigitada === "") {
    erroFormulario.textContent = "Escreva uma mensagem antes de continuar.";
    mensagem.focus();
    return;
  }

  // Só chega aqui com os três campos válidos. Muda de página sem enviar ou armazenar os dados.
  window.location.href = "obrigado.html";
});
