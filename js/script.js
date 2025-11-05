// ===== Banco de preguntas ejemplo =====
const preguntas = [
  {
    pregunta: "¿Qué significa IHM?",
    opciones: ["Interfaz Hombre-Máquina", "Internet Human Model", "Interacción Hyper-Media", "Inteligencia Humana Modificada"],
    respuesta: "Interfaz Hombre-Máquina"
  },
  {
    pregunta: "Uno de los principios básicos de UX es:",
    opciones: ["Consistencia", "Complejidad", "Sorpresa constante", "Navegación confusa"],
    respuesta: "Consistencia"
  }
];

// ===== Función para generar cuestionario dinámico =====
function generarCuestionario() {
  const form = document.getElementById('quizForm');
  if (!form) return;

  let html = '';
  preguntas.forEach((p, index) => {
    html += `<p>${index + 1}. ${p.pregunta}</p>`;
    p.opciones.forEach(op => {
      html += `<input type="radio" name="q${index}" value="${op}"> ${op}<br>`;
    });
  });
  html += `<br><button type="button" onclick="checkAnswers()">Enviar</button>`;
  html += `<p id="resultado"></p>`;
  form.innerHTML = html;
}

// ===== Función para revisar respuestas =====
function checkAnswers() {
  let score = 0;
  preguntas.forEach((p, index) => {
    const answer = document.querySelector(`input[name="q${index}"]:checked`);
    if (answer && answer.value === p.respuesta) score++;
  });

  const resultado = document.getElementById('resultado');
  resultado.innerHTML = `Tu puntaje: ${score} de ${preguntas.length}`;
}

// ===== Llamar a generar cuestionario al cargar la página =====
window.addEventListener('load', generarCuestionario);

// ===== Validación formulario contacto =====
const contactoForm = document.querySelector('form');
if (contactoForm) {
  contactoForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Mensaje enviado correctamente!');
    contactoForm.reset();
  });
}