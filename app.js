document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-contato");
  const statusDiv = document.getElementById("mensagem-status");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); 

    const nome = form.name.value;
    const email = form.email.value;
    const mensagem = form.message.value;

    // inserir lógica para enviar o email

    statusDiv.textContent = "✅ Mensagem enviada com sucesso!";
    statusDiv.style.display = "block";

    form.reset();

    setTimeout(() => {
      statusDiv.style.display = "none";
    }, 5000); 
  });
});
