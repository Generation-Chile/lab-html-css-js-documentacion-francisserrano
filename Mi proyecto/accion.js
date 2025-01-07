// Seleccionar el botón de llamada a la acción
const ctaButton = document.getElementById('cta-form');

// Añadir evento para desplazarse suavemente al formulario
ctaButton.addEventListener('click', () => {
  const formSection = document.getElementById('form');
  formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// Función para manejar el envío del formulario
function presionarBoton() {
  // Capturar los valores de los inputs
  const nombre = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensaje = document.getElementById('message').value.trim();

  // Validar los campos del formulario
  if (!nombre || !email || !mensaje) {
    alert('Por favor, complete todos los campos antes de enviar.');
    return;
  }

  // Validar el formato del correo electrónico
  if (!validarEmail(email)) {
    alert('Por favor, ingrese un correo electrónico válido.');
    return;
  }

  // Mostrar un mensaje de confirmación y enviar los datos a la consola
  alert('¡Gracias por tu mensaje! Hemos registrado tu información correctamente.');
  console.log('Información enviada:', { nombre, email, mensaje });

  // Limpiar los campos del formulario
  limpiarFormulario();
}

// Función para validar el formato del correo electrónico
function validarEmail(email) {
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regexEmail.test(email);
}

// Función para limpiar los campos del formulario
function limpiarFormulario() {
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';
}

// Mejorar la experiencia del usuario con feedback visual
const inputs = document.querySelectorAll('form input, form textarea');
inputs.forEach(input => {
  input.addEventListener('focus', () => {
    input.style.borderColor = '#ff5722';
  });
  input.addEventListener('blur', () => {
    input.style.borderColor = '#ccc';
  });
});
