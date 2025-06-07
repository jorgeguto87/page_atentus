/*document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-contato");
  const statusDiv = document.getElementById("mensagem-status");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); 

    const nome = form.name.value;
    const email = form.email.value;
    const mensagem = form.message.value;
    const phone = form.phone.value;

    // inserir lógica para enviar o email

    statusDiv.textContent = "✅ Mensagem enviada com sucesso!";
    statusDiv.style.display = "block";

    form.reset();

    setTimeout(() => {
      statusDiv.style.display = "none";
    }, 5000); 
  });
});
*/

//Função enviar Formulario

document.getElementById('enviarBtn').addEventListener('click', function() {
            const nome = document.getElementById('numero').value;
            const email = document.getElementById('email').value;
            const whatsapp = document.getElementById('phone').value;
            const mensagem = document.getElementById('mensagem').value;
            const apiToken = document.getElementById('apiToken').value;

            if (!nome || !email || !whatsapp || !mensagem) {
                showStatus('Preencha todos os campos!', 'error');
                return;
            }

            const btn = document.getElementById('enviarBtn');
            btn.disabled = true;
            btn.textContent = 'Enviando...';

            // Método 100% funcional - usando XMLHttpRequest que não tem problemas com CORS
            const xhr = new XMLHttpRequest();
            xhr.open('POST', 'https://atentus.com.br:3000/enviar', true);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.setRequestHeader('token', apiToken);

            xhr.onload = function() {
                if (xhr.status === 200) {
                    showStatus('✅ Mensagem enviada com sucesso!', 'success');
                } else {
                    showStatus('Erro: ' + xhr.responseText, 'error');
                }
                btn.disabled = false;
                btn.textContent = 'Enviar';
            };

            xhr.onerror = function() {
                showStatus('Erro de conexão. Verifique:', 'error');
                btn.disabled = false;
                btn.textContent = 'Enviar';
            };

            xhr.send(JSON.stringify({
                nome: nome,
                email: email,
                whatsapp: whatsapp,
                mensagem: mensagem
            }));
        });

        function showStatus(message, type) {
            const statusDiv = document.getElementById('mensagem-status');
            statusDiv.textContent = message;
            statusDiv.className = type;
            statusDiv.style.display = 'block';
        }
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

