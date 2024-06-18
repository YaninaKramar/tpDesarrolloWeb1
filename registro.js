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

  function showError(input, message) {
    const parentDiv = input.parentElement;
    let errorDiv = parentDiv.querySelector(".error-message");
    if (!errorDiv) {
      errorDiv = document.createElement("div");
      errorDiv.className = "error-message";
      parentDiv.appendChild(errorDiv);
    }
    errorDiv.textContent = message;
  }

  function clearError(input) {
    const parentDiv = input.parentElement;
    const errorDiv = parentDiv.querySelector(".error-message");
    if (errorDiv) {
      parentDiv.removeChild(errorDiv);
    }
  }

  function validatePassword() {
    const pwd = password.value;
    if (!passwordPattern.test(pwd)) {
      showError(
        password,
        "La contraseña debe tener al menos 8 caracteres, incluyendo al menos dos letras, dos números y dos caracteres especiales"
      );
      return false;
    } else {
      clearError(password);
    }
    if (pwd !== confirmPassword.value) {
      showError(confirmPassword, "Las contraseñas no coinciden");
      return false;
    } else {
      clearError(confirmPassword);
    }
    return true;
  }

  function validateCardNumber() {
    const cardNum = cardNumber.value;
    if (!/^\d{16,19}$/.test(cardNum)) {
      showError(
        cardNumber,
        "Número de tarjeta inválido. Debe tener entre 16 y 19 dígitos."
      );
      return false;
    } else {
      clearError(cardNumber);
    }
    const sum = cardNum
      .slice(0, -1)
      .split("")
      .reduce((acc, num) => acc + parseInt(num), 0);
    const lastDigit = parseInt(cardNum.slice(-1));
    if (
      !(
        (sum % 2 === 0 && lastDigit % 2 === 1) ||
        (sum % 2 === 1 && lastDigit % 2 === 0)
      )
    ) {
      showError(
        cardNumber,
        "El último dígito de la tarjeta no cumple con las reglas de paridad."
      );
      return false;
    } else {
      clearError(cardNumber);
    }
    return true;
  }

  function validateCVC() {
    if (cardCVC.value === "000") {
      showError(cardCVC, 'El CVC no puede ser "000".');
      return false;
    } else {
      clearError(cardCVC);
    }
    return true;
  }

  function validateForm() {
    let allValid = true;

    if (!firstName.value.match(/^[A-Za-z]+$/)) {
      allValid = false;
      showError(firstName, "El nombre solo puede contener letras.");
    } else {
      clearError(firstName);
    }

    if (!lastName.value.match(/^[A-Za-z]+$/)) {
      allValid = false;
      showError(lastName, "El apellido solo puede contener letras.");
    } else {
      clearError(lastName);
    }

    if (!username.value.match(/^[A-Za-z0-9]+$/)) {
      allValid = false;
      showError(
        username,
        "El nombre de usuario solo puede contener letras y números."
      );
    } else {
      clearError(username);
    }

    if (!validatePassword()) {
      allValid = false;
    }

    const selectedPaymentMethod = document.querySelector(
      'input[name="payMethod"]:checked'
    );
    if (!selectedPaymentMethod) {
      allValid = false;
      alert("Por favor, seleccione un método de pago.");
    } else if (selectedPaymentMethod.value === "creditCard") {
      if (!validateCardNumber()) {
        allValid = false;
      }
      if (!validateCVC()) {
        allValid = false;
      }
    }

    confirmBtn.disabled = !allValid;
    return allValid;
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
