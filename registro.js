document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registrationForm");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");
  const cardNumber = document.getElementById("cardNumber");
  const cardCVC = document.getElementById("cardCVC");
  const confirmBtn = document.querySelector('.btn[type="submit"]');

  // Deshabilitar el botón de confirmar al inicio
  confirmBtn.disabled = true;

  // Validaciones de contraseña
  function validatePassword() {
    const pwd = password.value;
    const regex =
      /^(?=.[A-Za-z]{2,})(?=.\d{2,})(?=.[!@#$%^&()_+}{":;'?/>.<,]{2,}).{8,}$/;
    return regex.test(pwd) && pwd === confirmPassword.value;
  }

  // Validación de número de tarjeta de crédito
  function validateCardNumber() {
    const cardNum = cardNumber.value;
    if (!/^\d{16,19}$/.test(cardNum)) {
      return false;
    }
    const sum = cardNum
      .slice(0, -1)
      .split("")
      .reduce((acc, num) => acc + parseInt(num), 0);
    const lastDigit = parseInt(cardNum.slice(-1));
    return (
      (sum % 2 === 0 && lastDigit % 2 === 1) ||
      (sum % 2 === 1 && lastDigit % 2 === 0)
    );
  }

  // Validación de CVC
  function validateCVC() {
    return cardCVC.value !== "000";
  }

  // Validar todos los campos
  function validateForm() {
    const inputs = form.querySelectorAll("input[required]");
    let allValid = true;

    inputs.forEach((input) => {
      if (!input.checkValidity()) {
        allValid = false;
      }
    });

    if (!validatePassword()) {
      allValid = false;
      confirmPassword.setCustomValidity(
        "Las contraseñas no coinciden o no cumplen con los requisitos."
      );
    } else {
      confirmPassword.setCustomValidity("");
    }

    if (cardNumber.value && !validateCardNumber()) {
      allValid = false;
      cardNumber.setCustomValidity("Número de tarjeta inválido.");
    } else {
      cardNumber.setCustomValidity("");
    }

    if (cardCVC.value && !validateCVC()) {
      allValid = false;
      cardCVC.setCustomValidity("CVC no puede ser 000.");
    } else {
      cardCVC.setCustomValidity("");
    }

    confirmBtn.disabled = !allValid;
  }

  // Evento para validar el formulario
  form.addEventListener("input", validateForm);

  // Evento de envío del formulario
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (validateForm()) {
      window.location.href = "login.html";
    }
  });

  // Evento para cancelar
  document
    .querySelector('.btn[type="button"]')
    .addEventListener("click", () => {
      window.location.href = "login.html";
    });
});
