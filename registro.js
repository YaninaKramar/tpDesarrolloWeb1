document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registrationForm");
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const email = document.getElementById("email");
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");
  const cardNumber = document.getElementById("cardNumber");
  const cardCVC = document.getElementById("cardCVC");
  const confirmBtn = document.querySelector('.btn[type="submit"]');
  const cancelBtn = document.querySelector('.btn[type="button"]');
  const payMethods = document.querySelectorAll('input[name="payMethod"]');

  // Deshabilitar el botón de confirmar al inicio
  confirmBtn.disabled = true;

  // Patrón para la contraseña: mínimo 2 letras, 2 números, 2 caracteres especiales y al menos 8 caracteres de longitud
  const passwordPattern =
    /^(?=(?:.[A-Za-z]){2})(?=(?:.\d){2})(?=(?:.*[^A-Za-z0-9]){2}).{8,}$/;

  function validatePassword() {
    const pwd = password.value;
    return passwordPattern.test(pwd) && pwd === confirmPassword.value;
  }

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

  function validateCVC() {
    return cardCVC.value !== "000";
  }

  function validateForm() {
    let allValid = true;

    if (!firstName.value.match(/^[A-Za-z]+$/)) {
      allValid = false;
      firstName.setCustomValidity("El nombre solo puede contener letras.");
    } else {
      firstName.setCustomValidity("");
    }

    if (!lastName.value.match(/^[A-Za-z]+$/)) {
      allValid = false;
      lastName.setCustomValidity("El apellido solo puede contener letras.");
    } else {
      lastName.setCustomValidity("");
    }

    if (!username.value.match(/^[A-Za-z0-9]+$/)) {
      allValid = false;
      username.setCustomValidity(
        "El nombre de usuario solo puede contener letras y números."
      );
    } else {
      username.setCustomValidity("");
    }

    if (!validatePassword()) {
      allValid = false;
      confirmPassword.setCustomValidity(
        "Las contraseñas no coinciden o no cumplen con los requisitos."
      );
    } else {
      confirmPassword.setCustomValidity("");
    }

    const selectedPaymentMethod = document.querySelector(
      'input[name="payMethod"]:checked'
    );
    if (!selectedPaymentMethod) {
      allValid = false;
    } else if (selectedPaymentMethod.value === "creditCard") {
      if (!validateCardNumber()) {
        allValid = false;
        cardNumber.setCustomValidity("Número de tarjeta inválido.");
      } else {
        cardNumber.setCustomValidity("");
      }

      if (!validateCVC()) {
        allValid = false;
        cardCVC.setCustomValidity("CVC no puede ser 000.");
      } else {
        cardCVC.setCustomValidity("");
      }
    }

    confirmBtn.disabled = !allValid;
  }

  form.addEventListener("input", validateForm);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (validateForm()) {
      const formData = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        username: username.value,
        password: password.value,
        paymentMethod: document.querySelector('input[name="payMethod"]:checked')
          .value,
        cardNumber: cardNumber.value || null,
        cardCVC: cardCVC.value || null,
      };
      sessionStorage.setItem("formData", JSON.stringify(formData));
      alert("Formulario enviado con éxito y guardado en Session Storage");
      window.location.href = "login.html";
    }
  });

  cancelBtn.addEventListener("click", () => {
    window.location.href = "login.html";
  });

  validateForm(); // Para validar en el inicio si hay algún dato precargado
});
