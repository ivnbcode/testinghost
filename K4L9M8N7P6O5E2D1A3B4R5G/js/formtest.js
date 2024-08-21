//genera el radicado
function generarRadicado() {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let radicado = '';
    for (let i = 0; i < 10; i++) {
        radicado += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    document.getElementById('radicado').value = radicado;
}

const miSelect = document.getElementById('origen');
const miSeccion = document.getElementById('entidad');
//habilita nueva seccion del formulario
miSelect.addEventListener('change', () => {
  if (miSelect.value === 'TERCERO') {
    miSeccion.style.display = 'block';
  } else {
    miSeccion.style.display = 'none';
  }
});


// Obtener la fecha y hora actuales
const currentDate = new Date().toLocaleString('es-CO', { timeZone: 'America/Bogota' });
const [dateString, timeString] = currentDate.split(', ');
const [day, month, year] = dateString.split('/');
const [hours, minutes] = timeString.split(':');

// Formatear la fecha y hora
const dateInput = document.getElementById('date-input');
const timeInput = document.getElementById('time-input');
dateInput.value = `${day}/${month}/${year}`;
timeInput.value = `${hours}:${minutes}`;

  // Obtén el formulario y agrega el evento de envío
  const form = document.getElementById('myForm');
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita que se envíe el formulario de forma predeterminada
    // Envía el formulario usando fetch
    fetch(form.action, {
      method: 'POST',
      body: new FormData(form)
    })
    .then(response => {
      // Redirigir a la nueva página después de una respuesta exitosa
      window.location.href = 'https://www.example.com/success'; // Reemplaza con la URL a la que quieres redirigir
    })
    .catch(error => {
      console.error('Error al enviar el formulario:', error);
      // Maneja el error según sea necesario
    });
  });