document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form-contato');
    const statusDiv = document.getElementById('mensagem-status');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const telefone = document.getElementById('phone').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();

        const msgFormulario = `🚀 *Novo contato via formulário do site*\n\n👤 Nome: ${nome}\n📧 Email: ${email}\n📱 Whatsapp: ${telefone}\n📝 Mensagem:\n${mensagem}`;

        const formData = new FormData();
        formData.append("mensagem", msgFormulario);

        const xhr = new XMLHttpRequest();
        xhr.open("POST", "proxy.php", true);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200 && xhr.responseText.trim() === "OK") {
                    statusDiv.innerText = "✅ Mensagem enviada com sucesso!";
                    statusDiv.style.color = "green";
                    form.reset();
                } else {
                    statusDiv.innerText = "❌ Erro ao enviar mensagem.";
                    statusDiv.style.color = "red";
                    console.error(xhr.responseText);
                }
            }
        };

        xhr.send(formData);
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

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".topnav a");
    const currentPage = window.location.pathname.split("/").pop();

    links.forEach(link => {
        const linkHref = link.getAttribute("href");
        if (linkHref === currentPage || (currentPage === "" && linkHref === "index.html")) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});
