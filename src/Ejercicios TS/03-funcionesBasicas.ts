/*
    ===== Código de TypeScript =====
    typescriptlang.org
*/

function sumar(a: number, b: number): number {
  return a + b;
}
const sumarFlecha = (a: number, b: number): number => {
  return a + b;
};

function multiplicar(num: number, oNum?: number, base: number = 2): number {
  return num * base;
}

console.log(`
    sumar(20,10) => ${sumar(20, 10)}
    sumarFlecha => ${sumarFlecha(22, 3)}
    multiplicar(5,10) => ${multiplicar(5, 0, 10)}
    `);
