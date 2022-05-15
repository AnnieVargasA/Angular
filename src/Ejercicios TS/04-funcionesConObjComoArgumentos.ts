/*
    ===== Código de TypeScript =====
    typescriptlang.org
*/
interface Mascota {
  nombre: string;
  peso: number;
  mostrarPeso: () => void;
}

function alimentar(mascota: Mascota, x: number): void {
  mascota.peso += x;
}

const nvaMascota: Mascota = {
  nombre: "Tulio",
  peso: 33,
  mostrarPeso() {
    console.log("Peso de la mascota", this.peso, "kilos");
  },
};

alimentar(nvaMascota, 10);
nvaMascota.mostrarPeso();
