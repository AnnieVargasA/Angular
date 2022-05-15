/*
    ===== Código de TypeScript =====
    typescriptlang.org
*/
/* ==========================================
======= Desestructuración de Objetos ========
===========================================*/

interface Reproductor {
  volumen: number;
  segundo: number;
  cancion: string;
  detalles: Details;
}
interface Details {
  autor: string;
  anio: number;
}

const reproductor: Reproductor = {
  volumen: 90,
  segundo: 36,
  cancion: "A quien le importa",
  detalles: {
    autor: "Thalía",
    anio: 2002,
  },
};

console.log(`
    El volumen actual es de: ${reproductor.volumen}
    El segundo actual es: ${reproductor.segundo}
    La canción actual es: ${reproductor.cancion}
    El autor es: ${reproductor.detalles.autor}
    Lanzada el año: ${reproductor.detalles.anio}
    `);

const { volumen: vol, segundo, cancion, detalles } = reproductor;
const { autor, anio } = detalles;

console.log(`
== Texto con desestructuración ==
    El volumen actual es de: ${vol}
    El segundo actual es: ${segundo}
    La canción actual es: ${cancion}
    El autor es: ${autor}
    Lanzada el año: ${anio}
    `);

/* ==========================================
======= Desestructuración de Arreglos =======
===========================================*/
const disneyCharacters: string[] = ["Bambi", "Pinocho", "Cinderella"];
const [ch1, ch2, ch3] = disneyCharacters;

console.log(`
    1st Character = ${ch1}
    2nd Character = ${ch2}
    3rd Character = ${ch3}
`);
