// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "no puedo verte triste", time: .3 },
  { text: "Porque me mata", time: 1.5 },
  { text: "Tu carita de pena mi dulce amor", time: 8 },
  { text: "Me duele tanto el llanto que tu derramas", time: 13 },
  { text: "Que se llena de angustia mi corazon", time: 22 },
  { text: "yo sufro lo indecible ", time: 27 },
  { text: "si tu entristeces", time: 30 },
  { text: "No quiero que la duda te haga llorar", time: 37 },
  { text: "Hemos jurado amarnos hasta la muerte", time: 44 },
  { text: "Y si los muertos aman", time: 52 },
  { text: "despues de muertos amarnos mas", time: 55 },
  { text: "Si yo muero primero", time: 60 },
  { text: "es tu promesa", time: 64 },
  { text: "sobre de mi cadaver", time: 68 },
  { text: "dejar caer", time: 71 },
  { text: "Todo el llanto que brote de tu tristeza", time: 77 },
  { text: "I que todos se enteren", time: 84 },
  { text: "de tu querer", time: 87 },
  { text: "si tu mueres primero", time: 92 },
  { text: "yo te prometo", time: 95 },
  { text: "escribire la historia", time: 100 },
  { text: "de nuestro amor", time: 103 },
  { text: "con toda el alma llena de sentimiento", time: 107 },
  { text: "la escribire con sangre", time: 113 },
  { text: "con tinta sangre del corazon", time: 116 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);