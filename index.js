/* ============================
   MENU MOBILE
============================ */
function toggleMenu() {
    const menu = document.getElementById("navMenu");
    menu.classList.toggle("show");
}

/* ============================
   MÁSCARAS DE FORMULÁRIO
============================ */

// Máscara CPF
function maskCPF(value) {
    return value
        .replace(/\D/g, "")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}

// Máscara Telefone
function maskTelefone(value) {
    return value
        .replace(/\D/g, "")
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{5})(\d)/, "$1-$2")
        .substring(0, 15);
}

// Máscara CEP
function maskCEP(value) {
    return value
        .replace(/\D/g, "")
        .replace(/(\d{5})(\d)/, "$1-$2")
        .substring(0, 9);
}

/* ============================
   APLICAR MÁSCARAS NOS INPUTS
============================ */
document.addEventListener("DOMContentLoaded", () => {
    const cpfInput = document.getElementById("cpf");
    const telefoneInput = document.getElementById("telefone");
    const cepInput = document.getElementById("cep");

    if (cpfInput) {
        cpfInput.addEventListener("input", () => {
            cpfInput.value = maskCPF(cpfInput.value);
        });
    }

    if (telefoneInput) {
        telefoneInput.addEventListener("input", () => {
            telefoneInput.value = maskTelefone(telefoneInput.value);
        });
    }

    if (cepInput) {
        cepInput.addEventListener("input", () => {
            cepInput.value = maskCEP(cepInput.value);
        });
    }
});

/* ============================
   FORMULÁRIO - SUCESSO
============================ */
function handleSubmit(event) {
    event.preventDefault();

    const form = document.getElementById("volunteerForm");
    const successMessage = document.getElementById("sucessMessage");

    // Exibe mensagem de sucesso
    successMessage.style.display = "block";

    // Limpa os campos após envio
    form.reset();

    // Some a mensagem depois de 4 segundos
    setTimeout(() => {
        successMessage.style.display = "none";
    }, 4000);
}


