document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const cardCVC = document.getElementById("cardCVC").value;

    const passwordPattern =
      /^(?=.[A-Za-z].[A-Za-z])(?=.\d.\d)(?=.[^A-Za-z0-9].[^A-Za-z0-9]).{8,}$/;

    if (!firstName.match(/^[A-Za-z]+$/)) {
      alert("El nombre solo puede contener letras");
      document.getElementById("firstName").focus();
      return;
    }

    if (!lastName.match(/^[A-Za-z]+$/)) {
      alert("El apellido solo puede contener letras");
      document.getElementById("lastName").focus();
      return;
    }

    if (!username.match(/^[A-Za-z0-9]+$/)) {
      alert("El nombre de usuario solo puede contener letras y números");
      document.getElementById("username").focus();
      return;
    }

    if (!password.match(passwordPattern)) {
      alert(
        "La contraseña debe tener al menos 8 caracteres, incluyendo al menos dos letras, dos números y dos caracteres especiales"
      );
      document.getElementById("password").focus();
      return;
    }

    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      document.getElementById("confirmPassword").focus();
      return;
    }

    const selectedPaymentMethod = document.querySelector(
      'input[name="payMethod"]:checked'
    );
    if (!selectedPaymentMethod) {
      alert("Por favor, seleccione un método de pago");
      return;
    }

    if (selectedPaymentMethod.value === "creditCard") {
      const cardNumber = document.getElementById("cardNumber").value;

      if (!cardNumber || cardNumber.length < 16) {
        alert("Por favor, complete el número de tarjeta de crédito");
        return;
      }

      if (cardCVC === "000") {
        alert('El código CVC no puede ser "000"');
        document.getElementById("cardCVC").focus();
        return;
      }
    }

    const formData = {
      firstName,
      lastName,
      email,
      username,
      password,
      paymentMethod: selectedPaymentMethod.value,
      cardNumber:
        selectedPaymentMethod.value === "creditCard"
          ? document.getElementById("cardNumber").value
          : null,
      cardCVC: selectedPaymentMethod.value === "creditCard" ? cardCVC : null,
    };

    sessionStorage.setItem("formData", JSON.stringify(formData));
    alert("Formulario enviado con éxito y guardado en Session Storage");
  });
