/*
  ===== Código de TypeScript =====
    typescriptlang.org
*/

function classDecorator<T extends {new (...args:any[]):{}}>(
  constructor: T
){
  return class extends constructor {
    newProperty="newProp";
    hello="hello override";
  }
}

@classDecorator

class MiSuperClase {
  public miPropiedad: string = 'ABC123';

  imprimir(){
    console.log('Hola mundo');
  }
}

console.log(MiSuperClase);

const miClase = new MiSuperClase();
