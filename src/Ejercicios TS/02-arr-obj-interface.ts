/*
    ===== Código de TypeScript =====
    typescriptlang.org
*/
let habilidades: string[] = ["Ana", "Vale", "Jesús", "Kevin"];
habilidades.push("Antonio");
console.log(habilidades);

interface Personaje {
  nombre: string;
  hp: number;
  habilidades: string[];
  puebloNatal?: string;
}

const personaje: Personaje = {
  nombre: "Panelosa",
  hp: 1000000,
  habilidades: ["Dormir", "Comer", "Ladrar"],
};

personaje.puebloNatal = "Pueblo Panela";

console.table(personaje);
