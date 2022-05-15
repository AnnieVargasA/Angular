/*
    ===== Código de TypeScript =====
    typescriptlang.org
*/
interface SupeHero {
  name: string;
  age: number;
  direction: Direction;
  showDirection: () => string;
}
interface Direction {
  street: string;
  country: string;
  city: string;
}

const superHero: SupeHero = {
  name: "Wanda Maximoff",
  age: 33,
  direction: {
    street: "Main St",
    country: "EUA",
    city: "New York",
  },
  showDirection() {
    return `${this.name}, ${this.direction.city}, ${this.direction.country}`;
  },
};

const direction = superHero.showDirection();
console.log(direction);
