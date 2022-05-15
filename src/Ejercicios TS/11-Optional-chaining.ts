/*
  ===== Código de TypeScript =====
    typescriptlang.org
*/

interface Pasajero{
  nombre:string;
  hijos?:string[];
}

const pasajero1:Pasajero = {
  nombre: 'Jesus',
}
const pasajero2:Pasajero = {
  nombre: 'Teresa',
  hijos:['Anahí', 'Valente'],
}

function imprimeHijos(pasajero:Pasajero):void{
  const cuantosHijos = pasajero.hijos?.length || 0; // si existen, dame los hijos else dame 0

  console.log(cuantosHijos)
}
imprimeHijos(pasajero1);
imprimeHijos(pasajero2);
