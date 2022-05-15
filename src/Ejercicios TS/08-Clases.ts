/*
  ===== Código de TypeScript =====
    typescriptlang.org
*/
class PersonaNormal{
  constructor(
    public nombre: string,
    public direccion: string,
  ){}
}

class Heroe extends PersonaNormal {
  constructor ( // Es una función que llamamos cuando sea una instancia de mi clase
    public AlterEgo:string,
    public Edad: number,
    public NombreReal: string,
    ) {
      super(NombreReal, 'Gatlon City');
    }
}

const sketch = new Heroe('Sketch', 23, 'Adrian Everhart');

console.log(sketch);