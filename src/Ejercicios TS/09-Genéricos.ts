/*
  ===== Código de TypeScript =====
    typescriptlang.org
*/

function queTipoSoy<T>(arg:T){ // <T> genérico
  return arg;
}

let soyString = queTipoSoy('Hola Mundo!');
let soyNumero = queTipoSoy(100);
let soyArr= queTipoSoy([1,2,3,4,5]);
let soyExplicito = queTipoSoy<number>(100);
