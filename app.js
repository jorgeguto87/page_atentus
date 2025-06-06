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

function funcaoMenu() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


  // Seleciona todos os links do menu
  const links = document.querySelectorAll('#myLinks a');

  // Pega o caminho da URL atual (ex: /conferente.html)
  const currentPage = window.location.pathname.split('/').pop();

  links.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

